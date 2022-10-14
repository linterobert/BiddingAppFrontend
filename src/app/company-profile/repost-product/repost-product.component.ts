import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { UpdateProduct } from 'src/interfaces/update-product';

@Component({
  selector: 'app-repost-product',
  templateUrl: './repost-product.component.html',
  styleUrls: ['./repost-product.component.css']
})
export class RepostProductComponent implements OnInit {

  updateForm! : FormGroup;

  constructor(
    private formBuilder : FormBuilder
  ) { }

  returnObject(){
      /*productPrice: this.updateForm.value['productPrice'], 
      finalTime: this.updateForm.value['finalTime']*/
    return this.updateForm.value['productPrice'].toString().concat('*').concat(this.updateForm.value['finalTime']);
  }

  ngOnInit(): void {
    this.updateForm = this.formBuilder.group({
      productPrice: ['', Validators.required],
      finalTime: ['', Validators.required]
    })
  }

}
