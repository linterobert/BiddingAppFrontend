import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { getProduct } from "src/interfaces/getProduct";
import { map } from "rxjs";
import { PostProductImage } from "src/interfaces/post-product-image";
@Injectable({
    providedIn : "root"
})

export class ProductServce{
    constructor(private httpClient : HttpClient){}

    updateProduct(product : any, productId : number){
        return this.httpClient.put<any>(`https://localhost:7045/api/Product/${productId}`, product)
    }
    getProducts(){
        return this.httpClient.get<any>("https://localhost:7045/api/Product");
    }
    getProductRating(id : string){
        return this.httpClient.get<number>(`https://localhost:7045/api/Product/${id}/rating`);
    }

    getProductByID(id : number) : Observable<any>{
        return this.httpClient.get<getProduct>(`https://localhost:7045/api/Product/${id}`)
    }
    addProductImage(image : PostProductImage){
        return this.httpClient.post<any>(`https://localhost:7045/api/ProductImage`, image);
    }
    postProduct(product : any){
        return this.httpClient.post<any>(`https://localhost:7045/api/Product`, product)
    }
}