import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatListModule} from '@angular/material/list';
import { MatMenuModule} from '@angular/material/menu';
import { ClientProfileComponent } from './clientProfile/client-profile/client-profile.component';
import { ProductComponent } from './products/product/product.component';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { ProductCardListComponent } from './products/product-card-list/product-card-list.component';
import { CountDownPipe } from 'src/pipes/countdown';
import { CountdownComponent } from 'ngx-countdown';
import { HeaderComponent } from './page/header/header.component';
import { FooterComponent } from './page/footer/footer.component';
import { AddFundsComponent } from './clientProfile/add-funds/add-funds.component';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import { CreditCardDirectivesModule } from 'angular-cc-library';
import { CashOutComponent } from './clientProfile/cash-out/cash-out.component';
import { AddCardComponent } from './clientProfile/add-card/add-card.component';
import { ViewOwnProductsComponent } from './clientProfile/view-own-products/view-own-products.component';
import { ViewProductsListComponent } from './clientProfile/view-products-list/view-products-list.component';
import { ViewProductComponent } from './clientProfile/view-product/view-product.component';
import { ViewReviewComponent } from './clientProfile/view-review/view-review.component';
import { ViewReviewListComponent } from './clientProfile/view-review-list/view-review-list.component';
import { ClientProfilePageComponent } from './clientProfile/client-profile-page/client-profile-page.component';
import { ClientService } from './services/client.service';
import { ProductInformationsComponent } from './products/product-informations/product-informations.component';
import { ProductImagesComponent } from './products/product-images/product-images.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductReviewListComponent } from './products/product-review-list/product-review-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ClientProfileComponent,
    ProductComponent,
    ProductCardComponent,
    ProductCardListComponent,
    CountDownPipe,
    HeaderComponent,
    FooterComponent,
    AddFundsComponent,
    CashOutComponent,
    AddCardComponent,
    ViewOwnProductsComponent,
    ViewProductsListComponent,
    ViewProductComponent,
    ViewReviewComponent,
    ViewReviewListComponent,
    ClientProfilePageComponent,
    ProductInformationsComponent,
    ProductImagesComponent,
    ProductDetailsComponent,
    ProductReviewListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatBadgeModule,
    MatListModule,
    MatMenuModule,
    CountdownComponent,
    MatInputModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    CreditCardDirectivesModule
  ],
  exports: [
    MatBadgeModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
