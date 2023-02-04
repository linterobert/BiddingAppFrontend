import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-view-cards',
  templateUrl: './view-cards.component.html',
  styleUrls: ['./view-cards.component.css']
})
export class ViewCardsComponent implements OnInit {

  @Input() clientId = 0
  cards!: Observable<any>

  constructor(
    private clientService: ClientService
  ) { }

  ngOnInit(): void {
    this.cards = this.clientService.getClientCard(this.clientId);
    this.cards.subscribe(rez => console.log(rez))
  }

}
