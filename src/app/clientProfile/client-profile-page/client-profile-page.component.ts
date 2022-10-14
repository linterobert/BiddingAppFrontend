import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { Observable } from 'rxjs';
import { ClientService } from 'src/app/services/client.service';
import { AuthToken } from 'src/interfaces/token';

@Component({
  selector: 'app-client-profile-page',
  templateUrl: './client-profile-page.component.html',
  styleUrls: ['./client-profile-page.component.css']
})
export class ClientProfilePageComponent implements OnInit {

  notification = false
  client!: Observable<any>
  clientId = 0;

  public changeTheme() : void{
    console.log('a')
    var type = localStorage.getItem('Theme');
    var background = document.getElementsByTagName('button');
    if(type == 'White' || type == null){
      var body = document.getElementsByTagName('body');
      if(body){
        for(let i = 0; i < body.length; i++){
          var v = body[i]
          v.style.color = 'white'
          v.style.backgroundColor = 'black';
        }
      }
      if(background){
        for(let i = 0; i < background.length; i++){
          var button = background[i]
          button.style.color = 'white';
          button.style.backgroundColor = "#3A3B3C";
        }
      }
      var menu = document.getElementById('menu');
      if(menu){
        menu.style.backgroundColor = "#3A3B3C";
      }
      var footer = document.getElementsByTagName('footer') as HTMLCollectionOf<HTMLElement>;
      if(footer){
        for(let i = 0; i < footer.length; i++){
          var update = footer[i]
          update.style.color = 'white';
          update.style.backgroundColor = "#3A3B3C";
        }
      }
      var paginationTheme = document.getElementsByTagName('a');
      if(paginationTheme){
        for(let i = 0; i < paginationTheme.length; i++){
          var pagination = paginationTheme[i]
          pagination.style.color = 'white';
          pagination.style.backgroundColor = "#3A3B3C";
          pagination.style.borderRadius = '5px';
        }
      }
      var comenzi = document.getElementsByClassName('commands') as HTMLCollectionOf<HTMLElement>;
      if(comenzi){
        for(let i = 0; i < comenzi.length; i++){
          var update = comenzi[i]
          update.style.color = 'white';
          update.style.backgroundColor = "#3A3B3C";
        }
      }
      localStorage.setItem('Theme', 'Black')
    }
    else{
      var body = document.getElementsByTagName('body');
      if(body){
        for(let i = 0; i < body.length; i++){
          var v = body[i]
          v.style.color = 'black'
          v.style.backgroundColor = 'white';
        }
      }
      var comenzi = document.getElementsByClassName('commands') as HTMLCollectionOf<HTMLElement>;
      if(comenzi){
        for(let i = 0; i < comenzi.length; i++){
          var update = comenzi[i]
          update.style.color = 'white';
          update.style.backgroundColor = "darkgray";
        }
      }
      if(background){
        for(let i = 0; i < background.length; i++){
          var button = background[i]
          button.style.color = 'black';
          button.style.backgroundColor = "darkgray";
        }
      }
      var menu = document.getElementById('menu');
      if(menu){
        menu.style.backgroundColor = "darkgray";
      }
      var productsCard = document.getElementsByClassName('product') as HTMLCollectionOf<HTMLElement>;
      if(productsCard){
        for(let i = 0; i < productsCard.length; i++){
          var productCard = productsCard[i]
          productCard.style.color = 'black';
          productCard.style.backgroundColor = "gray";
        }
      }
      var footer = document.getElementsByTagName('footer') as HTMLCollectionOf<HTMLElement>;
      if(footer){
        for(let i = 0; i < footer.length; i++){
          var update = footer[i]
          update.style.color = 'black';
          update.style.backgroundColor = "silver";
        }
      }
      var paginationTheme = document.getElementsByTagName('a');
      if(paginationTheme){
        for(let i = 0; i < paginationTheme.length; i++){
          var pagination = paginationTheme[i]
          pagination.style.color = 'black';
          pagination.style.backgroundColor = "white";
          pagination.style.borderRadius = '5px';
        }
      }
      var notifications = document.getElementsByClassName('notification')
      for(let i = 0; i < notifications.length; i++){
        var notification = notifications[i] as HTMLElement
        notification.style.backgroundColor = 'darkgrey'
      }
      var bar = document.getElementById('notificationFooter');
      if(bar){
        bar.style.backgroundColor = 'darkgrey'
      }
      localStorage.setItem('Theme', 'White')
    }
  }

  public setTheme() : void{
    var type = localStorage.getItem('Theme');
    var background = document.getElementsByTagName('button');
    if(type == 'Black'){
      var body = document.getElementsByTagName('body');
      if(body){
        for(let i = 0; i < body.length; i++){
          var v = body[i]
          v.style.color = 'white'
          v.style.backgroundColor = 'black';
        }
      }
      if(background){
        for(let i = 0; i < background.length; i++){
          var button = background[i]
          button.style.color = 'white';
          button.style.backgroundColor = "#3A3B3C";
        }
      }
      var menu = document.getElementById('menu');
      if(menu){
        menu.style.backgroundColor = "#3A3B3C";
      }
      var footer = document.getElementsByTagName('footer') as HTMLCollectionOf<HTMLElement>;
      if(footer){
        for(let i = 0; i < footer.length; i++){
          var update = footer[i]
          update.style.color = 'white';
          update.style.backgroundColor = "#3A3B3C";
        }
      }
      var paginationTheme = document.getElementsByTagName('a');
      if(paginationTheme){
        for(let i = 0; i < paginationTheme.length; i++){
          var pagination = paginationTheme[i]
          pagination.style.color = 'white';
          pagination.style.backgroundColor = "#3A3B3C";
          pagination.style.borderRadius = '5px';
        }
      }
      var comenzi = document.getElementsByClassName('commands') as HTMLCollectionOf<HTMLElement>;
      if(comenzi){
        for(let i = 0; i < comenzi.length; i++){
          var update = comenzi[i]
          update.style.color = 'white';
          update.style.backgroundColor = "#3A3B3C";
        }
      }
    }
    else{
      var body = document.getElementsByTagName('body');
      if(body){
        for(let i = 0; i < body.length; i++){
          var v = body[i]
          v.style.color = 'black'
          v.style.backgroundColor = 'white';
        }
      }
      var comenzi = document.getElementsByClassName('commands') as HTMLCollectionOf<HTMLElement>;
      if(comenzi){
        for(let i = 0; i < comenzi.length; i++){
          var update = comenzi[i]
          update.style.color = 'white';
          update.style.backgroundColor = "darkgray";
        }
      }
      if(background){
        for(let i = 0; i < background.length; i++){
          var button = background[i]
          button.style.color = 'black';
          button.style.backgroundColor = "darkgray";
        }
      }
      var menu = document.getElementById('menu');
      if(menu){
        menu.style.backgroundColor = "darkgray";
      }
      var productsCard = document.getElementsByClassName('product') as HTMLCollectionOf<HTMLElement>;
      if(productsCard){
        for(let i = 0; i < productsCard.length; i++){
          var productCard = productsCard[i]
          productCard.style.color = 'black';
          productCard.style.backgroundColor = "gray";
        }
      }
      var footer = document.getElementsByTagName('footer') as HTMLCollectionOf<HTMLElement>;
      if(footer){
        for(let i = 0; i < footer.length; i++){
          var update = footer[i]
          update.style.color = 'black';
          update.style.backgroundColor = "silver";
        }
      }
      var paginationTheme = document.getElementsByTagName('a');
      if(paginationTheme){
        for(let i = 0; i < paginationTheme.length; i++){
          var pagination = paginationTheme[i]
          pagination.style.color = 'black';
          pagination.style.backgroundColor = "white";
          pagination.style.borderRadius = '5px';
        }
      }
    }
  }

  openNotifications(){
    this.notification = !this.notification;
  }

  constructor(
    private clientService : ClientService
  ) { }

  ngOnInit(): void {
    var not = document.getElementById('openNot');
    if(not){
      not.addEventListener('click', () => this.openNotifications());
    }

    document.getElementById("switch")?.addEventListener("click", this.changeTheme);
    var theme = localStorage.getItem('Theme');
    if(theme == 'Black'){
      var button = document.getElementById('check') as HTMLInputElement
      button.checked = true
      setTimeout(() => this.setTheme(), 100)
    }

    var token = localStorage.getItem('token');
    if(token != null){

      var decode = jwt_decode<AuthToken>(token.toString())
      
      this.client = this.clientService.getClientByName(decode['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'])
      this.client.subscribe(rez => this.clientId = rez.clientProfileId)
    }
  }

}
