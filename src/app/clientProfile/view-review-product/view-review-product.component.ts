import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductServce } from 'src/app/services/product.service';
import { SimpleChange } from '@angular/core';
import { CountDownPipe } from 'src/pipes/countdown';

@Component({
  selector: 'app-view-review-product',
  templateUrl: './view-review-product.component.html',
  styleUrls: ['./view-review-product.component.css']
})
export class ViewReviewProductComponent implements OnInit {
  
  @Input() productID! : number;
  product! : Observable<any>
  rating! : Observable<any>

  round(number : number){
    return Math.round(number);
  }
  public countdown( x: Date ) : void{
    const product = document.getElementById('timer'.concat(this.productID.toString()));
    if(product){
      var pipe = new CountDownPipe;
      product.innerHTML = pipe.transform(x.toString());
      var date = new Date(x.toString()).getTime();
      var now = new Date().getTime();
      var color = product.style.color;
      console.log(date-now);
      if(date - now < 3600000 && date - now > 0 ){
        if(color != "red"){
          product.style.color = "red";
        }
        else{
          product.style.color = "black";
        }
      }
    }
  }
  constructor(
    private productService : ProductServce
  ) { }

  ngOnInit(): void {
    this.product = this.productService.getProductByID(this.productID);
    this.product.subscribe(rez => {
      setInterval(() => this.countdown(rez.finalTime), 1000)
    })
    this.rating = this.productService.getProductRating(this.productID.toString());
  }
  ngOnChanges(change : SimpleChange){
  }

}
