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

    getClientNotificationsByPage(clientId: number, pageNumber: number, count: number){
        return this.httpClient.get<any>(`https://localhost:7045/api/ClientProfile/${clientId}/notifications/page-number/${pageNumber}/count/${count}`)
    }
    getClientNotificationsMaxPage(clientId: number, count: number){
        return this.httpClient.get<any>(`https://localhost:7045/api/ClientProfile/${clientId}/notifications/max-page-number/count/${count}`)
    }
    postClient(clientPost : any){
        return this.httpClient.post<any>("https://localhost:7045/api/ClientProfile", clientPost);
    }
    getClientByName(name : string){
        return this.httpClient.get<any>(`https://localhost:7045/name/${name}`)
    }
    addCard(card : CreateCard){
        return this.httpClient.post<CreateCard>("https://localhost:7045/api/Card", card);
    }
    cashOut(card : any, cardNumber : string, clientId : number){
        return this.httpClient.put<any>(`https://localhost:7045/api/ClientProfile/${clientId}/funds/${cardNumber}`, card);
    }
    getMaxPageReviews(clientId : string, index : string){
        return this.httpClient.get<number>(`https://localhost:7045/api/ClientProfile/${clientId}/reviews/max-page-number/count/${index}`)
    }
    getReviews(clientId : number,pageNumber : number, index : number){
        return this.httpClient.get<any>(`https://localhost:7045/api/ClientProfile/${clientId}/reviews/page-number/${pageNumber}/count/${index}`)
    }
    updateReview(review : UpdateReview, reviewId : number){
        return this.httpClient.put<GetClientReview>(`https://localhost:7045/api/Review/${reviewId}`, review);
    }
    getClientByID(id : string){
        return this.httpClient.get<any>(`https://localhost:7045/api/ClientProfile/${id}`)
    }
    makeOffer(clientId : number, productId : number, sum : number){
        var body = ''
        return this.httpClient.put<any>(`https://localhost:7045/api/ClientProfile/${clientId}/product/${productId}/offer/${sum}`, body)
    }
    postReview(review : any){
        return this.httpClient.post<any>('https://localhost:7045/api/Review', review)
    }
    deleteReview(reviewId : number){
        return this.httpClient.delete<any>(`https://localhost:7045/api/Review/${reviewId}`)
    }
    getOwnProducts(clientId : number, pageNumber : number, count : number){
        return this.httpClient.get<any>(`https://localhost:7045/api/ClientProfile/${clientId}/products-own/page-number/${pageNumber}/count/${count}`)
    }
    getOwnProductsMaxPage(companyId : number, count : number){
        return this.httpClient.get<number>(`https://localhost:7045/api/ClientProfile/${companyId}/products-own/max-page-number/count/${count}`);
    }
    deleteClientNotifications(notificationID : number){
        return this.httpClient.delete<any>(`https://localhost:7045/api/ClientNotification/${notificationID}`)
    }
}