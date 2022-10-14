import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn : "root"
})

export class CompanyService{
    constructor(private httpClient : HttpClient){}

    getCompanyByName(name : string){
        return this.httpClient.get<any>(`https://localhost:7045/api/CompanyProfile/name/${name}`)
    }
    postCompany(company:any){
        return this.httpClient.post<any>(`https://localhost:7045/api/CompanyProfile`, company);
    }

    getOwnProductsMaxPage(companyId : number, count : number){
        return this.httpClient.get<number>(`https://localhost:7045/api/CompanyProfile/${companyId}/products-own/max-page-number/count/${count}`);
    }
    getOwnProducts(companyId : number, pageNumber : number, count : number){
        return this.httpClient.get<any>(`https://localhost:7045/api/CompanyProfile/${companyId}/products-own/page-number/${pageNumber}/count/${count}`)
    }
    cashOutProduct(companyId : number, productId : number){
        var body = ''
        return this.httpClient.put<any>(`https://localhost:7045/api/CompanyProfile/${companyId}/CashOutProduct/${productId}`, body)
    }
    getCompanyById(companyId : number){
        return this.httpClient.get<any>(`https://localhost:7045/api/CompanyProfile/${companyId}`)
    }
    getCompanyNotificationsByPage(companyId : number, pageNumber : number, count : number){
        return this.httpClient.get<any>(`https://localhost:7045/api/CompanyProfile/${companyId}/notifications/page-number/${pageNumber}/count/${count}`)
    }
    getCompanyNotificationsMaxPage(companyId : number, index : number){
        return this.httpClient.get<number>(`https://localhost:7045/api/CompanyProfile/${companyId}/notifications/max-page-number/count/${index}`)
    }
    deleteCompanyNotifications(notificationID : number){
        return this.httpClient.delete<any>(`https://localhost:7045/api/CompanyNotification/${notificationID}`)
    }
}