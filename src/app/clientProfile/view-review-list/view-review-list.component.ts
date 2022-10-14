import { Component, OnInit } from '@angular/core';
import { ProductCard } from 'src/interfaces/product-card';
import { Input } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Observable } from 'rxjs';
import { th } from 'date-fns/locale';

@Component({
  selector: 'app-view-review-list',
  templateUrl: './view-review-list.component.html',
  styleUrls: ['./view-review-list.component.css']
})
export class ViewReviewListComponent implements OnInit {
  @Input() clientId = 0;
  public lastPage : number = 0;

  pageNumber = 1;
  observerPage! : any;
  constructor(
    private clientService : ClientService   
  ) {}


  ngOnInit(): void {


    this.clientService.getMaxPageReviews(this.clientId.toString(),"1").subscribe((res:number) =>
    { 
      let c = document.getElementById('reviewLastPage')
      if(c){
        c.setAttribute('id', 'reviewLastPage'.concat(res.toString()))
        c.addEventListener('click', () => this.changePage(res));
      }
      this.lastPage = res;
      this.changePage(1);
    });
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
  }
}
