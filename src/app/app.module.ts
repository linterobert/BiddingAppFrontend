import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {provideStorage, getStorage} from '@angular/fire/storage'
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
import { ClientProfilePageComponent } from './clientProfile/client-profile-page/client-profile-page.component'
import { ProductInformationsComponent } from './products/product-informations/product-informations.component';
import { ProductImagesComponent } from './products/product-images/product-images.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductReviewListComponent } from './products/product-review-list/product-review-list.component';
import { NotificationsComponent } from './page/notifications/notifications.component';
import { CompanyProfilePageComponent } from './company-profile/company-profile-page/company-profile-page.component';
import { CompanyProfileComponent } from './company-profile/company-profile/company-profile.component';
import { SoldProductsComponent } from './company-profile/sold-products/sold-products.component';
import { SoldProductComponent } from './company-profile/sold-product/sold-product.component';
import { ViewReviewProductComponent } from './clientProfile/view-review-product/view-review-product.component';
import { PostProductComponent } from './company-profile/post-product/post-product.component';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import {AngularFireModule} from '@angular/fire/compat'
import {MatGridListModule} from '@angular/material/grid-list'
import { MatButtonModule } from '@angular/material/button'
import { MatInput } from '@angular/material/input';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { RegisterPageComponent } from './register/register-page/register-page.component';
import { LoginComponent } from './register/login/login.component';
import { RegisterComponent } from './register/register/register.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {MatDialog, MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import { RepostProductComponent } from './company-profile/repost-product/repost-product.component';
import {MatTableModule} from "@angular/material/table";

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
    NotificationsComponent,
    CompanyProfilePageComponent,
    CompanyProfileComponent,
    SoldProductsComponent,
    SoldProductComponent,
    ViewReviewProductComponent,
    PostProductComponent,
    RegisterPageComponent,
    LoginComponent,
    RegisterComponent,
    LoginPageComponent,
    RepostProductComponent
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
    CreditCardDirectivesModule,
    MatGridListModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyAwwv1epRlUwG0ezAq5OsTXepxjj8teOVc",
        authDomain: "biddingapp-dc295.firebaseapp.com",
        databaseURL: "https://biddingapp-dc295-default-rtdb.firebaseio.com",
        projectId: "biddingapp-dc295",
        storageBucket: "biddingapp-dc295.appspot.com",
        messagingSenderId: "405559062862",
        appId: "1:405559062862:web:19353b98fe4b5493566e1f",
        measurementId: "G-6JGKTTC16Z"
      }),
    AngularFireStorageModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  entryComponents: [RepostProductComponent, CompanyProfileComponent],
  exports: [
    MatBadgeModule,
    MatIconModule
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
