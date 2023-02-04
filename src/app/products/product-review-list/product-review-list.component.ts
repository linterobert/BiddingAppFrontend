import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';
import { PostReview } from 'src/interfaces/postReview';
import { SimpleChange } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { UpdateReview } from 'src/interfaces/updateReview';
import { ActivatedRoute } from '@angular/router';
import { ProductServce } from 'src/app/services/product.service';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-product-review-list',
  templateUrl: './product-review-list.component.html',
  styleUrls: ['./product-review-list.component.css']
})
export class ProductReviewListComponent implements OnInit {

  @Input() product : any;
  @Input() usertype!: string;
  @Input() username!: string;
  @Input() userId = 5;
  productID! : number

  myText! : FormControl
  openEdit = false
  reviews: any;


  checkClient(clientId : number){
    if( this.usertype == 'Client' && clientId == this.userId){
      this.openEdit = true
      return true
    }
    else{
      return false
    }
  }


  updateReview2(review:any){
    review.text = this.myText.value;
    
    var checkedStars = document.getElementsByClassName('fa fa-star 2');
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

  hoverStars(idMax:number): void{
    var id = 'star1'
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

  updateReview(){
    var stars = document.getElementById('postStars');
    if(stars){
      var checkedStars = stars.getElementsByClassName('fa fa-star');
      var count = 0;
      for(let i = 0; i < checkedStars.length; i++){
        var star = checkedStars[i] as HTMLElement;
        if(star.style.color == 'orange'){
          count += 1;
        }
      }
      var updateReview : PostReview = {
        productId : this.productID,
        clientId : this.userId,
        text : this.myText.value,
        starNumber : count
      }
      this.clientService.postReview(updateReview).subscribe(res => {
        console.log("Registration successful");
        window.location.reload()
        },
        err => {
            console.error("Registration failed: " + err);
        }
      );
    }
  }
  constructor(
    private route: ActivatedRoute,
    private productService : ProductServce,
    private clientService : ClientService,
    private companyService : CompanyService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.myText = new FormControl('', Validators.required);
    if(this.usertype == 'Company'){
      this.openEdit == true;
      this.route.params.forEach(
        param => {
          this.productID = param['id']
        })
      
      this.product = this.productService.getProductByID(this.productID).subscribe(
        rez => {
          for(let review of rez.reviews){
            if(review.clientId == this.userId){
              this.openEdit = true;
            }
          }
          this.reviews = rez.reviews
        }
      )
    }
    else{
      this.route.params.forEach(
        param => {
          this.productID = param['id']
        })
      
      this.product = this.productService.getProductReviews(this.productID).subscribe(
        rez => {
          for(let review of rez){
            console.log(this.userId)
            if(review.clientId == this.userId){
              console.log('da')
              this.openEdit = true;
            }
          }
          this.reviews = rez
        }
      )
    }
  }

  ngOnChanges(change : SimpleChange){
  }
  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

}
