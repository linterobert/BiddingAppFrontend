import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { ClientService } from 'src/app/services/client.service';
import { UpdateClient } from 'src/interfaces/updateClient';


@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {

  @Input() clientId!: number

  path!: String
  images : any[] = [];
  url : any;
  updateClient: UpdateClient = {
    clientName: '',
    balance: 0,
    profilePhotoURL: ''
  }

  removeImage(image : any){
    this.images = this.images.filter(obj => obj.photo !== image.photo);
  }
  onFileSelected($event : any){
    var file = new FileReader();
    file.readAsDataURL($event.target.files[0])
    file.onload=(event:any) =>{
      this.images = [];
      this.images.push({photo: event.target.result, image: $event.target.files[0]})
    }
    this.path = $event.target.files[0];
  }
  addData(productId : number){
    for(let image of this.images){
      this.path = image.image;
      this.af.upload("/productImages"+ Math.random()+this.path, this.path).then(data => {
        })
    }
  }

  onSubmit(){
    if(this.images.length != 0){
      this.path = this.images[0].image;
      this.af.upload("/clientPhoto"+ Math.random()+this.path, this.path).then(data => {
        data.ref.getDownloadURL().then(urlToReturn => {
            this.updateClient.profilePhotoURL = urlToReturn
            this.clientService.updateClient(this.updateClient, this.clientId).subscribe(rez => window.location.reload());
        })})
    }
  }

  constructor(
    private af: AngularFireStorage,
    private clientService: ClientService
  ) { }

  ngOnInit(): void {
    this.clientService.getClientByID(this.clientId.toString()).subscribe(rez => {
      this.updateClient.clientName = rez.clientName,
      this.updateClient.balance = rez.balance,
      this.updateClient.profilePhotoURL = rez.profilePhotoURL
    })
  }

}
