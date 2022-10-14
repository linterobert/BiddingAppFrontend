import { Component, OnInit, SimpleChange } from '@angular/core';
import { ProductCard } from 'src/interfaces/product-card';
import { Input } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Observable } from 'rxjs';
import { GetClientReview } from 'src/interfaces/getClientReview';
import { ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateReview } from 'src/interfaces/updateReview';
import { ProductServce } from 'src/app/services/product.service';

@Component({
  selector: 'app-view-review',
  templateUrl: './view-review.component.html',
  styleUrls: ['./view-review.component.css']
})
export class ViewReviewComponent implements OnInit {
  editBox = false;
  reviews! : Observable<any>;
  getProduct! : Observable<any> 
  reviewTemplate! : GetClientReview;
  @Input() clientId = 0;
  @Input() productData! : ProductCard;
  @Input() pageNumber = 0;
  @ViewChild('textArea') myTextArea!: any;
  myText! : FormControl;
  constructor(
    private clientService : ClientService,
    private productService : ProductServce
  ) { }

  ngOnInit(): void {
    this.myText = new FormControl('', Validators.required);
    this.reviews = this.clientService.getReviews(this.clientId,this.pageNumber, 1);
    console.log(this.reviews.subscribe((rez: any)=> console.log(rez)));
  }

  ngOnChanges(change : SimpleChange){
    console.log(this.reviewTemplate)
    this.reviews = this.clientService.getReviews(this.clientId,this.pageNumber, 1);
  }

  repost(productId : any){
    window.location.href = `http://localhost:4200/product/${productId}`
  }

  changeType(review : any): void{

    var id = 'openEdit';
    var icon = document.getElementById(id);
    if(icon){
      if(this.editBox == true){
        this.updateReview(review)
        icon.innerHTML = 'border_color';

      }
      else{
        icon.innerHTML = 'save_alt';
      }
    }
    this.editBox = !this.editBox;
  }

  hoverStars(idMax:number): void{
    if(this.editBox){
      var id = 'star'
      for(let i = 0; i <= idMax; i++){
        var getid = id.concat(i.toString());
        var star = document.getElementById(getid);
        if(star){
          star.style.color = 'orange';
        }
      }
      for(let i = idMax + 1; i <= 5; i++){
        var getid = id.concat(i.toString());
        var star = document.getElementById(getid);
        if(star){
          star.style.color = 'white';
        }
      }
    }
  }

  updateReview(review:any){
    review.text = this.myText.value;
    
    var stars = document.getElementsByClassName('starNumber2')[0];
    var checkedStars = stars.getElementsByClassName('fa fa-star');
    var count = 0;
    for(let i = 0; i < checkedStars.length; i++){
      var star = checkedStars[i] as HTMLElement;
      if(star.style.color == 'orange'){
        count += 1;
      }
    }
    review.starNumber = count;
    var updateReview : UpdateReview = {
      clientId : review.clientId,
      text : this.myText.value,
      starNumber : count
    }
    this.clientService.updateReview(updateReview, review.reviewID).subscribe(res => {
      console.log("Registration successful");
      },
      err => {
          console.error("Registration failed: " + err);
      }
    );
  }
}
