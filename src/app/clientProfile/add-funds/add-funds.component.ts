import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators, FormBuilder} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { CreateCard } from 'src/interfaces/create-card';
import { CashOut } from 'src/interfaces/cash-out';
import { ClientService } from 'src/app/services/client.service';
import {FormGroupDirective} from '@angular/forms';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-add-funds',
  templateUrl: './add-funds.component.html',
  styleUrls: ['./add-funds.component.css']
})


export class AddFundsComponent{

  @Input() clientId = 0;
  registerForm! : FormGroup;
  submitted = false;
  isSuccessful! : boolean;
  error = false;
  matcher = new MyErrorStateMatcher();
  constructor(
    private formBuilder : FormBuilder,
    private clientService : ClientService
  ) { }


  ngOnInit(): void {
    
    this.registerForm = this.formBuilder.group({
      sold: ['', [Validators.required, Validators.min(0)]],
      cardNumber: ['', [Validators.required, Validators.minLength(19), Validators.maxLength(19)]],
      cvc: ['', [Validators.required, Validators.min(100), Validators.max(999)]],
      pin: ['', [Validators.required, Validators.min(1000), Validators.max(9999)]]
    })
  }
  onSubmit2(){
    
    this.error = true;
    console.log(this.registerForm)
    if(this.registerForm.invalid){
      return
    }
    this.submitted = true;
    var card : CashOut = {
      sum : this.registerForm.value['sold'],
      cvc : this.registerForm.value['cvc'].toString(),
      pin : this.registerForm.value['pin'].toString()
    }
    console.log(this.registerForm.value['cardNumber'].toString())
    this.clientService.cashOut(card, this.registerForm.value['cardNumber'], this.clientId).subscribe(res => {
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
