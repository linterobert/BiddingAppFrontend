import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-view-own-products',
  templateUrl: './view-own-products.component.html',
  styleUrls: ['./view-own-products.component.css']
})
export class ViewOwnProductsComponent implements OnInit {
  @Input() clientId = 0;
  pageNumber : number = 1;
  constructor(
    private clientService : ClientService
  ) { }


  ngOnInit(): void {
  }

}
