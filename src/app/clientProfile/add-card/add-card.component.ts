import { Component, Input, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators, FormBuilder} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { CreateCard } from 'src/interfaces/create-card';
import { ClientService } from 'src/app/services/client.service';
import {FormGroupDirective} from '@angular/forms';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {
  @Input() clientId = 0;
  registerForm! : FormGroup;
  submitted = false;
  error = false
  matcher = new MyErrorStateMatcher();
  date = new Date()
  constructor(
    private formBuilder : FormBuilder,
    private clientServie : ClientService
  ) { }
  isSuccessful! : boolean;
  isSignUpFailed! : boolean;

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      cardNumber: ['', [Validators.required, Validators.minLength(19), Validators.maxLength(19)]],
      cvc: ['', [Validators.required, Validators.min(100), Validators.max(999)]],
      pin: ['', [Validators.required, Validators.min(1000), Validators.max(9999)]],
      expireDate: ['', Validators.required]
    })
  }
  onSubmit(){
    this.error = true;
    if(this.registerForm.invalid){
      return
    }
    this.submitted = true;
    var card : CreateCard = {
      cardNumber : this.registerForm.value['cardNumber'],
      clientId : this.clientId,
      cvc : this.registerForm.value['cvc'],
      pin : this.registerForm.value['pin'],
      expireDate : this.registerForm.value['expireDate'],
    }
    this.clientServie.addCard(card).subscribe(res => {
      console.log("Registration successful");
      this.isSuccessful = true;
      },
      err => {
          console.error("Registration failed: " + err);
          this.isSuccessful = false;
      }
    );
  }
}
