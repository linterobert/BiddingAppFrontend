import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CompanyService } from 'src/app/services/company.service';
import {FormGroupDirective} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, NgForm } from '@angular/forms';
import { UpdateCompany } from 'src/interfaces/update-company';
import { AngularFireStorage } from '@angular/fire/compat/storage';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {

  @Input() companyId!: number
  updateForm!: FormGroup
  company!: Observable<any>
  matcher = new MyErrorStateMatcher();
  path!: String
  images : any[] = [];
  url : any;
  updateComany: UpdateCompany = {
    companyBalance: 0,
    companyName: "",
    iban: "",
    profilePhotoURL: ""
  };

  constructor(
    private af: AngularFireStorage,
    private formBuilder: FormBuilder,
    private companyService: CompanyService
  ) { }

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
    this.updateComany.iban = this.updateForm.value['iban']
    if(this.images.length == 0){
      this.companyService.updateCompany(this.updateComany, this.companyId).subscribe(rez => window.location.reload());
    }
    else{
      this.path = this.images[0].image;
      this.af.upload("/clientPhoto"+ Math.random()+this.path, this.path).then(data => {
        data.ref.getDownloadURL().then(urlToReturn => {
            this.updateComany.profilePhotoURL = urlToReturn
            this.companyService.updateCompany(this.updateComany, this.companyId).subscribe(rez => window.location.reload());
        })})
    }
  }

  ngOnInit(): void {
    this.company = this.companyService.getCompanyById(this.companyId)
    this.company.subscribe(rez => {
      this.updateForm = this.formBuilder.group({
        iban: [rez.iban, Validators.required]
      })
      this.updateComany.companyName = rez.companyName,
      this.updateComany.companyBalance = rez.companyBalance,
      this.updateComany.iban = rez.iban,
      this.updateComany.profilePhotoURL = rez.profilePhotoURL
      console.log(this.updateComany)
    })
  }

}
