import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { getProduct } from "src/interfaces/getProduct";
import { map } from "rxjs";
@Injectable({
    providedIn : "root"
})

export class ProductServce{
    constructor(private httpClient : HttpClient){}

    getProducts(){
        return this.httpClient.get<any>("https://localhost:7045/api/Product");
    }
    getProductRating(id : string){
        return this.httpClient.get<number>(`https://localhost:7045/api/Product/${id}/rating`);
    }
}