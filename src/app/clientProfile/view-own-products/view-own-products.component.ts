import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-own-products',
  templateUrl: './view-own-products.component.html',
  styleUrls: ['./view-own-products.component.css']
})
export class ViewOwnProductsComponent implements OnInit {
  pageNumber : number = 1;
  constructor() { }

  ngOnInit(): void {
    var box
    if(this.pageNumber > 0){
      box = document.getElementById('page1');
      if(box){
        box.innerHTML = (this.pageNumber - 1).toString();
        box.setAttribute('href', '#');
      }
      box = document.getElementById('page2');
      if(box){
        box.innerHTML = (this.pageNumber).toString();
        box.setAttribute('href', '#');
      }
      box = document.getElementById('page3');
      if(box){
        box.innerHTML = (this.pageNumber - (-1)).toString();
        box.setAttribute('href', '#');
      }
      box = document.getElementById('page4');
      if(box){
        box.innerHTML = (this.pageNumber - (-2)).toString();
        box.setAttribute('href', '#');
      }
      box = document.getElementById('page5');
      if(box){
        box.innerHTML = (this.pageNumber - (-3)).toString();
        box.setAttribute('href', '#');
      }
      box = document.getElementById('page6');
      if(box){
        box.innerHTML = (this.pageNumber - (-4)).toString();
        box.setAttribute('href', '#');
      }
      if(this.pageNumber == 1){
        document.getElementById('page1')?.remove();
      }
    }
  }

}
