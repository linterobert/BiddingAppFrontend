import { Component, OnInit } from '@angular/core';
import { ProductCard } from 'src/interfaces/product-card';
import { CompanyService } from 'src/app/services/company.service';
import { SimpleChange } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-sold-products',
  templateUrl: './sold-products.component.html',
  styleUrls: ['./sold-products.component.css']
})
export class SoldProductsComponent implements OnInit {

  @Input() companyId = 0
  product_list : any

  public lastPage : number = 0;
  pageNumber = 1;
  observerPage! : any;


  changePage(pageNumber : number){
    var box = document.getElementById('reviewPage1');
    if(pageNumber > 0){

      box = document.getElementById('reviewPage1');
      if(box){
        box.innerHTML = (pageNumber - 1).toString();
        if(pageNumber == 1){
          box.hidden = true
        }
        else{
          box.hidden = false
        }
      }
      box = document.getElementById('reviewPage2');
      if(box){
        box.innerHTML = (pageNumber).toString();
      }
      box = document.getElementById('reviewPage3');
      if(box){
        box.innerHTML = (pageNumber - (-1)).toString();
        if(pageNumber - (-1) <= this.lastPage){
          box.hidden = false
        }
        else{
          box.hidden = true;
        }
      }
      box = document.getElementById('reviewPage4');
      if(box){
        box.innerHTML = (pageNumber - (-2)).toString();
        if(pageNumber - (-2) <= this.lastPage){
          box.hidden = false
        }
        else{
          box.hidden = true;
        }
      }
      box = document.getElementById('reviewPage5');
      if(box){
        box.innerHTML = (pageNumber - (-3)).toString();
        if(pageNumber - (-3) <= this.lastPage){
          box.hidden = false
        }
        else{
          box.hidden = true;
        }
      }
      box = document.getElementById('reviewPage6');
      if(box){
        box.innerHTML = (pageNumber - (-4)).toString();
        if(pageNumber - (-4) <= this.lastPage){
          box.hidden = false
        }
        else{
          box.hidden = true;
        }
      }
    }
    this.pageNumber = pageNumber;
    this.product_list = this.companyService.getOwnProducts(this.companyId, pageNumber, 3);
  }

  constructor(
    private companyService : CompanyService
  ) { }

  
  ngOnInit(): void {
    this.companyService.getOwnProductsMaxPage(this.companyId,3).subscribe((res:number) =>
    { 
      let c = document.getElementById('reviewLastPage')
      if(c){
        c.setAttribute('id', 'reviewLastPage'.concat(res.toString()))
        c.addEventListener('click', () => this.changePage(res));
      }
      this.lastPage = res;
      this.changePage(1);
    });
    this.product_list = this.companyService.getOwnProducts(this.companyId, this.pageNumber, 3);
  }

  ngOnChanges(change : SimpleChange){
  }

}
