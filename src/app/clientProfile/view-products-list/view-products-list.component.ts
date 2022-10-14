import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientService } from 'src/app/services/client.service';
import { ProductCard } from 'src/interfaces/product-card';
import { CountDownPipe } from 'src/pipes/countdown';
import { Input } from '@angular/core';

@Component({
  selector: 'app-view-products-list',
  templateUrl: './view-products-list.component.html',
  styleUrls: ['./view-products-list.component.css']
})
export class ViewProductsListComponent implements OnInit {

  @Input() clientId = 0;
  public lastPage : number = 0;
  pageNumber = 1;

  redirect(productCard : any){
    window.location.href = `http://localhost:4200/product/${productCard.productId}`
  }
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
    this.product_list = this.clientService.getOwnProducts(this.clientId, pageNumber, 3);
  }
  product_list! : Observable<any>

  constructor(
    private clientService : ClientService
  ) { }

  ngOnInit(): void {
    this.clientService.getOwnProductsMaxPage(this.clientId,3).subscribe((res:number) =>
    { 
      let c = document.getElementById('reviewLastPage')
      if(c){
        c.setAttribute('id', 'reviewLastPage'.concat(res.toString()))
        c.addEventListener('click', () => this.changePage(res));
      }
      this.lastPage = res;
      this.changePage(1);
    });

    this.product_list = this.clientService.getOwnProducts(this.clientId, 1, 3);
    
  }

}
