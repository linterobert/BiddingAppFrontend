import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { getProduct } from "src/interfaces/getProduct";
import { map } from "rxjs";
import { PostProductImage } from "src/interfaces/post-product-image";
import { loginToken } from "src/interfaces/loginToken";
@Injectable({
    providedIn : "root"
})

export class LoginService{
    constructor(private httpClient : HttpClient){}

    Login(username : string, password : string){
        return this.httpClient.post(`https://localhost:7045/api/users/login?userName=${username}&password=${password}`,"");
    }

    Auth(username : string, password : string){
        const options = {responseType: 'text' as 'json'};
        return this.httpClient.post(`https://localhost:7045/api/users/register?userName=${username}&password=${password}`,"",options);
    }
    SetRole(userName : string, role : string){
        const options = {responseType: 'text' as 'json'};
        return this.httpClient.post(`https://localhost:7045/api/users/assign-role?userName=${userName}&roleName=${role}`,"",options)
    }
}