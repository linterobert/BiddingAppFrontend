import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ProductCard } from 'src/interfaces/product-card';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  @Input() productCard! : ProductCard;

  constructor() { }

  ngOnInit(): void {
  }

}
