import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductComponent } from './products/product/product.component';
import { ClientProfilePageComponent } from './clientProfile/client-profile-page/client-profile-page.component';
import { CompanyProfilePageComponent } from './company-profile/company-profile-page/company-profile-page.component';
import { PostProductComponent } from './company-profile/post-product/post-product.component';
import { RegisterPageComponent } from './register/register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthGuard } from './guards/auth.guard';
import { ClientAuthGuard } from './guards/client-auth.guard';
import { CompanyAuthGuard } from './guards/company-auth.guard';

const routes: Routes = [
  { path : "products/:pageNumber", component: ProductListComponent },
  { path : "client-profile", component: ClientProfilePageComponent, canActivate: [ClientAuthGuard], },
  { path : "product/:id", component: ProductComponent },
  { path : 'company-profile', component: CompanyProfilePageComponent, canActivate: [CompanyAuthGuard] },
  { path : 'register', component: RegisterPageComponent},
  { path : 'login', component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
