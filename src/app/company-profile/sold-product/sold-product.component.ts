import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductServce } from 'src/app/services/product.service';
import { CountDownPipe } from 'src/pipes/countdown';
import { CompanyService } from 'src/app/services/company.service';
import { MatDialog } from '@angular/material/dialog';
import { RepostProductComponent } from '../repost-product/repost-product.component';
import { CompanyProfileComponent } from '../company-profile/company-profile.component';
import { NgZone } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { HostListener } from '@angular/core';
import { UpdateProduct } from 'src/interfaces/update-product';

@Component({
  selector: 'app-sold-product',
  templateUrl: './sold-product.component.html',
  styleUrls: ['./sold-product.component.css']
})
export class SoldProductComponent implements OnInit {

  @Input() companyId = 0;
  @Input() productCard! : any;
  myDialog!: any;
  images! : Observable<any>;
  rating! : Observable<any>;
  starNumber = 0;
  cashOut = false
  repost = false
  constructor(
    private productService : ProductServce,
    private companyService : CompanyService,
    public dialog : MatDialog,
    private ngZone: NgZone
  ) { }


  openDialog(){
    this.dialog.closeAll()
    this.myDialog = this.dialog.open(RepostProductComponent, {

    });
    this.myDialog.afterClosed().subscribe((result: any) => {
      var list = result.split('*')

      var productToUpdate : UpdateProduct = {
        productName: this.productCard.productName,
        startPrice: list[0],
        finalTime: list[1],
        companyId: this.productCard.companyProfileId 
      }
      this.productService.updateProduct(productToUpdate, this.productCard.productId).subscribe(
        res =>{
          window.location.reload();
        }
      )
    });
  
  }
  redirect(){
    window.location.href = `http://localhost:4200/product/${this.productCard.productId}`
  }


  round(number : number){
    return Math.round(number);
  }
  cashOutProduct(){
    this.cashOut = false
    this.companyService.cashOutProduct(this.productCard.companyProfileId, this.productCard.productId).subscribe(
      rez => {console.log("Registration successful");
      },
      err => {
          console.error("Registration failed: " + err);
      }
      
    )
  }
  public countdown( x: Date ) : void{
    const product = document.getElementById(this.productCard.productId.toString());
    var pipe = new CountDownPipe;
    if(product){
      var timer = product.getElementsByClassName('timer');
      for(let i = 0; i < timer.length; i++){
          var time = timer[i] as HTMLElement;
          time.innerHTML = pipe.transform(x.toString());
          var color = time.style.color;
          if(color != "red"){
            time.style.color = "red";
          }
          else{
            time.style.color = "black";
          }
      }
    }

  }

  
  ngOnInit(): void {
    var finalTime = new CountDownPipe;
    if(finalTime.transform(this.productCard.finalTime) == 'Time finished' && this.productCard.clientProfileName != null){
      this.cashOut = true;
    }
    if(finalTime.transform(this.productCard.finalTime) == 'Time finished' && this.productCard.clientProfileName == null){
      this.repost = true;
    }
    this.images = this.productService.getProductByID(this.productCard.productId);
    
    setInterval(() => this.countdown(new Date(this.productCard.finalTime)),1000)
    this.rating = this.productService.getProductRating(this.productCard.productId.toString());
    var product = document.getElementById(this.productCard.companyProfileId.toString());
    if(product){
      var stars = product.getElementsByClassName('starNumber');
      for(let i = 0; i < stars.length; i++){
        var star = stars[i] as HTMLElement;
        var checkStar = document.createElement("span");
        checkStar.setAttribute('class', "fa fa-star checked");
        for(let j = 1; j <= this.starNumber; j++ ){
          star.append(checkStar);
        }
      }
    }

  }

  
}
