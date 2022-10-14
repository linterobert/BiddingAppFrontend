import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { CountDownPipe } from 'src/pipes/countdown';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  myOffer! : FormControl;
  makeOffer = true;
  @Input() product! : any;
  @Input() userType! : string;
  @Input() username! : string;
  clientId = 0;

  constructor(
    private clientService : ClientService
  ) { }

  makeOfferCommand(){
    this.clientService.makeOffer(this.clientId, this.product.productId, this.myOffer.value).subscribe(
      rez => {console.log("Registration successful");
      window.location.reload()
      },
      err => {
          console.error("Registration failed: " + err);
          return;
      }
      
    )
  }


  ngOnInit(): void {
    this.myOffer = new FormControl('', [Validators.required]);
    var companyProfileImage = document.getElementById('companyImage');
    if(companyProfileImage){
      if(this.product.companyProfile.profilePhotoURL == 'default'){
        companyProfileImage.setAttribute('src', 'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg')

      }
      else{
        companyProfileImage.setAttribute('src', this.product.companyProfile.profilePhotoURL);
      }
    }
    var finalTime = new CountDownPipe;
    if(this.product.clientProfileId == 1 || finalTime.transform(this.product.finalTime) == 'Time finished'){
      this.makeOffer = false;
    }
    if(this.userType == 'Client'){
      this.clientService.getClientByName(this.username).subscribe(rez => this.clientId = rez.clientProfileId);
    }
  }

}
