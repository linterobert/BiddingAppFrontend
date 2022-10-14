import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { SimpleChange } from '@angular/core';

@Component({
  selector: 'app-product-images',
  templateUrl: './product-images.component.html',
  styleUrls: ['./product-images.component.css']
})
export class ProductImagesComponent implements OnInit {

  @Input() product! : any;

  constructor() { }

  changeImage(url : string){
    var image = document.getElementById('resizeImage');
    console.log(image)
    if(image){
      image.setAttribute('src', url);
    }
  }

  ngOnInit(): void {
  }
  ngOnChanges(change : SimpleChange){
  }
}
