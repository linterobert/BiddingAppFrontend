import { Component, OnInit } from '@angular/core';
import {AngularFireStorage} from '@angular/fire/compat/storage'
import { getStorage, ref, getMetadata } from "firebase/storage";
import { ProductServce } from 'src/app/services/product.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PostProductImage } from 'src/interfaces/post-product-image';
import { Validators } from '@angular/forms';
import { Input } from '@angular/core';


@Component({
  selector: 'app-post-product',
  templateUrl: './post-product.component.html',
  styleUrls: ['./post-product.component.css']
})
export class PostProductComponent implements OnInit {
  
  @Input() companyId = 0;
  path!: String
  images : any[] = [];
  url : any;
  registerForm! : FormGroup;
  submitted = false;
  isSuccessful! : boolean;
  error = false;

  constructor(
    private af: AngularFireStorage,
    private productService : ProductServce,
    private formBuilder : FormBuilder
  ) { }

  onSubmit3(){
    this.error = true;
    if(this.registerForm.invalid){
      return
    }
    this.submitted = true;
    var postProduct = {
      productName:  this.registerForm.value['productName'],
      startPrice: this.registerForm.value['startingPrice'],
      finalTime: this.registerForm.value['expireDate'],
      companyId: this.companyId
    }
    console.log(postProduct)
    this.productService.postProduct(postProduct).subscribe(rez => {
      this.addData(rez.productId)}
      )
  }
  onFileSelected($event : any){
    var file = new FileReader();
    file.readAsDataURL($event.target.files[0])
    file.onload=(event:any) =>{
      this.images.push({photo: event.target.result, image: $event.target.files[0]})
    }
    this.path = $event.target.files[0];
  }
  removeImage(image : any){
    this.images = this.images.filter(obj => obj.photo !== image.photo);
  }
  addData(productId : number){
    for(let image of this.images){
      this.path = image.image;
      this.af.upload("/productImages"+ Math.random()+this.path, this.path).then(data => {
        data.ref.getDownloadURL().then(urlToReturn => {
            var image : PostProductImage = {
              title: "string",
              url: urlToReturn,
              description: "string",
              productId: productId
            }
            this.productService.addProductImage(image).subscribe(rez => window.location.href = `http://localhost:4200/product/${productId}`)
        })})
    }
  }
  ngOnInit(): void {
    console.log(this.companyId)
    this.registerForm = this.formBuilder.group({
      productName: ['', Validators.required],
      startingPrice: ['', Validators.required],
      expireDate: ['', Validators.required]
    })
  }

}
