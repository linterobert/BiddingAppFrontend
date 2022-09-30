import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductComponent } from './products/product/product.component';
import { ClientProfilePageComponent } from './clientProfile/client-profile-page/client-profile-page.component';

const routes: Routes = [
  { path : "products/:index/:id", component: ProductListComponent },
  { path : "client-profile", component: ClientProfilePageComponent },
  { path: "product", component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
