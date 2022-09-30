import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { getProduct } from "src/interfaces/getProduct";
import { map } from "rxjs";
import { CreateCard } from "src/interfaces/create-card";
import { GetClientReview } from "src/interfaces/getClientReview";
import { UpdateReview } from "src/interfaces/updateReview";
@Injectable({
    providedIn : "root"
})

export class ClientService{
    constructor(private httpClient : HttpClient){}

    addCard(card : CreateCard){
        return this.httpClient.post<CreateCard>("https://localhost:7045/api/Card", card);
    }
    cashOut(card : any, cardNumber : string, clientId : number){
        return this.httpClient.put<CreateCard>(`https://localhost:7045/api/ClientProfile/${clientId}/funds/${cardNumber}`, card);
    }
    getMaxPageReviews(clientId : string, index : string){
        return this.httpClient.get<number>(`https://localhost:7045/api/ClientProfile/${clientId}/reviews/max-page-number/count/${index}`)
    }
    getReviews(clientId : number,pageNumber : number, index : number){
        return this.httpClient.get<GetClientReview>(`https://localhost:7045/api/ClientProfile/${clientId}/reviews/page-number/${pageNumber}/count/${index}`)
    }
    updateReview(review : UpdateReview, reviewId : number){
        return this.httpClient.put<GetClientReview>(`https://localhost:7045/api/Review/${reviewId}`, review);
    }
}