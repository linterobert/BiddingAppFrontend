import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { CountDownPipe } from 'src/pipes/countdown';
import { ProductCard } from 'src/interfaces/product-card';
import { ProductServce } from 'src/app/services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  @Input() productCard! : any;
  rating! : Observable<any>
  images! : Observable<any>

  public countdown( x: Date ) : void{
    const product = document.getElementById('timer'.concat(this.productCard.productId));
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
  round(number : number){
    return Math.round(number);
  }
  constructor(
    private productService : ProductServce
  ) { }

  ngOnInit(): void {
    console.log(this.productCard)
    this.rating = this.productService.getProductRating(this.productCard.productId.toString());
    setInterval(() => this.countdown(this.productCard.finalTime.toString()),1000)
    this.images = this.productService.getProductByID(this.productCard.productId); 
    this.images.subscribe(rez => console.log(rez))
  }

}
