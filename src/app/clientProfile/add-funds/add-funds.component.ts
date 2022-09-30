import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators, FormBuilder} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { CreateCard } from 'src/interfaces/create-card';

@Component({
  selector: 'app-add-funds',
  templateUrl: './add-funds.component.html',
  styleUrls: ['./add-funds.component.css']
})


export class AddFundsComponent{

  public createCardForm : CreateCard = {
    cardNumber : "1111 1111 1111 1111",
    cvc : "111",
    pin : "111",
    expireDate : new Date(),
    clientId : 2
  };
  registerForm! : FormGroup;
  submitted = false;
  constructor(
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      sold: ['', [Validators.required, Validators.min(0)]],
      cardNumber: ['', [Validators.required, Validators.minLength(19), Validators.maxLength(19)]],
      cvc: ['', [Validators.required, Validators.min(100), Validators.max(999)]],
      pin: ['', [Validators.required, Validators.min(100), Validators.max(999)]],
      expireDate: ['', Validators.required]
    })
  }
  onSubmit(){
    this.submitted = true;
    if(this.registerForm.invalid){
      return
    }
    alert("Success");
  }
}
