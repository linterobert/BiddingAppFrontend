import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyService } from 'src/app/services/company.service';
import { SimpleChange } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  pageNumber : number = 1
  notifications! : Observable<any>
  maxPage! : Observable<any>
  @Input() userId = 0;
  @Input() userType!: string

  constructor(
    private companyService : CompanyService,
    private clientService : ClientService
  ) { }

  changePage(semn : string){
    if(this.userType == 'Company'){
      if(semn == '+'){
        this.pageNumber += 1;
        this.notifications = this.companyService.getCompanyNotificationsByPage(this.userId, this.pageNumber, 6)
      }
      else{
        this.pageNumber -= 1;
        this.notifications = this.companyService.getCompanyNotificationsByPage(this.userId, this.pageNumber, 6)
      }
    }
    if(this.userType == 'Client'){
      if(semn == '+'){
        this.pageNumber += 1;
        this.notifications = this.clientService.getClientNotificationsByPage(this.userId, this.pageNumber, 6)
      }
      else{
        this.pageNumber -= 1;
        this.notifications = this.clientService.getClientNotificationsByPage(this.userId, this.pageNumber, 6)
      }
    }
  }
  deleteNotification(notification : number){
    if(this.userType == 'Company'){
      this.companyService.deleteCompanyNotifications(notification).subscribe(
        rez => {
          this.notifications = this.companyService.getCompanyNotificationsByPage(this.userId, this.pageNumber, 6)
          this.maxPage = this.companyService.getCompanyNotificationsMaxPage(this.userId, 6);
        }
      );

    }
    if(this.userType == 'Client'){
      this.clientService.deleteClientNotifications(notification).subscribe(rez => {
        this.notifications = this.clientService.getClientNotificationsByPage(this.userId, this.pageNumber, 6)
        this.maxPage = this.clientService.getClientNotificationsMaxPage(this.userId, 6)
      });
    }
  }
  setTheme(){
    var theme = localStorage.getItem('Theme');
    if(theme == 'Black'){
      var notifications = document.getElementsByClassName('notification')
      for(let i = 0; i < notifications.length; i++){
        var notification = notifications[i] as HTMLElement
        notification.style.backgroundColor = '#3A3B3C'
      }
      var bar = document.getElementById('notificationFooter');
      if(bar){
        bar.style.backgroundColor = '#3A3B3C'
      }
    }
  }

  ngOnInit(): void {
    if(this.userType == 'Company'){
      this.notifications = this.companyService.getCompanyNotificationsByPage(this.userId, this.pageNumber, 6)
      this.maxPage = this.companyService.getCompanyNotificationsMaxPage(this.userId, 6);
    }
    if(this.userType == 'Client'){
      this.notifications = this.clientService.getClientNotificationsByPage(this.userId, this.pageNumber, 6)
      this.maxPage = this.clientService.getClientNotificationsMaxPage(this.userId, 6);
    }
    setInterval(()=> this.setTheme(), 10 )
  }
  ngOnChanges(change : SimpleChange){
  }


}
