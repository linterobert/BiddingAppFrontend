import { Component, OnInit } from '@angular/core';
import { getProduct } from 'src/interfaces/getProduct';
import { CountDownPipe } from 'src/pipes/countdown';
import { ProductServce } from 'src/app/services/product.service';
import { Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})


export class ProductCardComponent implements OnInit {
  starNumber : number = 0;
  rating! : Observable<number>;
  image! : Observable<any>;
  @Input() productCard! : getProduct;

  redirect(productId : number){
    window.location.href = `http://localhost:4200/product/${productId}`
  }

  round(number : number){
    return Math.round(number);
  }

  public countdown( x: Date ) : void{
    const product = document.getElementById('timer'.concat(this.productCard.productId.toString()));
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
  ) { 
    
  }

  ngOnInit(): void {
    this.rating = this.productService.getProductRating(this.productCard.productId.toString());
    this.image = this.productService.getProductByID(this.productCard.productId)
    setInterval(() => this.countdown(new Date(this.productCard.finalTime)),1000)
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
