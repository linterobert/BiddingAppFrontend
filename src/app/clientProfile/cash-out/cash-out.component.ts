import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators, FormBuilder} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { CreateCard } from 'src/interfaces/create-card';
import { CashOut } from 'src/interfaces/cash-out';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-cash-out',
  templateUrl: './cash-out.component.html',
  styleUrls: ['./cash-out.component.css']
})
export class CashOutComponent implements OnInit {

  registerForm! : FormGroup;
  submitted = false;
  isSuccessful! : boolean;
  error = false;
  constructor(
    private formBuilder : FormBuilder,
    private clientService : ClientService
  ) { }


  ngOnInit(): void {
    
    this.registerForm = this.formBuilder.group({
      sold: ['', [Validators.required, Validators.min(0)]],
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
    var card : CashOut = {
      sum : this.registerForm.value['sold']*(-1),
      cvc : this.registerForm.value['cvc'],
      pin : this.registerForm.value['pin']
    }

    this.clientService.cashOut(card, this.registerForm.value['cardNumber'], 1).subscribe(res => {
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
