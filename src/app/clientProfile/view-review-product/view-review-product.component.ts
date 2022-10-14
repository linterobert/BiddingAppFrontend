import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductServce } from 'src/app/services/product.service';
import { SimpleChange } from '@angular/core';

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
  constructor(
    private productService : ProductServce
  ) { }

  ngOnInit(): void {
    this.product = this.productService.getProductByID(this.productID);
    this.product.subscribe(rez => console.log(rez))
    this.rating = this.productService.getProductRating(this.productID.toString());
  }
  ngOnChanges(change : SimpleChange){
  }

}
