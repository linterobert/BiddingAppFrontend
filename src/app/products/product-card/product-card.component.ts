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
  @Input() productCard! : getProduct;

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
  constructor(
    private productService : ProductServce
  ) { 
    
  }

  ngOnInit(): void {
    this.rating = this.productService.getProductRating(this.productCard.productId.toString());
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
