import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';
import { PostReview } from 'src/interfaces/postReview';
import { SimpleChange } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { UpdateReview } from 'src/interfaces/updateReview';

@Component({
  selector: 'app-product-review-list',
  templateUrl: './product-review-list.component.html',
  styleUrls: ['./product-review-list.component.css']
})
export class ProductReviewListComponent implements OnInit {

  @Input() product : any;
  @Input() usertype!: string;
  @Input() username!: string;
  @Input() userId = 0;

  myText! : FormControl
  openBox = false
  openEdit = false

  public openBoxEdit(review:any){
    if(this.openBox == true){
      this.updateReview2(review)
    }
    this.openBox = !this.openBox
  }

  checkClient(clientId : number){
    if( this.usertype == 'Client' && clientId == this.userId){
      this.openEdit = true
      return true
    }
    else{
      return false
    }
  }

  deleteReview(reviewID : number){
    this.clientService.deleteReview(reviewID).subscribe(res => {
      console.log("Registration successful");
      },
      err => {
          console.error("Registration failed: " + err);
      }
    );
    window.location.reload()
    this.openBox = false
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
  postAuthor(id : number){
    return this.clientService.getClientByID(id.toString());
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
    console.log('da')
    
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
        productId : this.product.productId,
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
    private clientService : ClientService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.myText = new FormControl('', Validators.required);
  }

  ngOnChanges(change : SimpleChange){
  }
  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

}
