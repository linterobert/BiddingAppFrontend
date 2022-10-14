import { Component, Input, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-product-informations',
  templateUrl: './product-informations.component.html',
  styleUrls: ['./product-informations.component.css']
})
export class ProductInformationsComponent implements OnInit {

  @Input() product! : any;
  @Input() username! : any;
  @Input() usertype! : any;

  constructor(
    private clientService : ClientService
  ) { }

  ngOnInit(): void {
  }

}
