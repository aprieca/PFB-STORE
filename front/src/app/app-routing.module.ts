import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CategoryListComponent} from "./entities/category/category-list/category-list.component";
import {ItemListComponent} from "./entities/item/item-list/item-list.component";
import {ItemFormComponent} from "./entities/item/item-form/item-form.component";
import {ItemReactiveFormComponent} from "./entities/item/item-reactive-form/item-reactive-form.component";
import {CategoryFormComponent} from "./entities/category/category-form/category-form.component";
import {LoginComponent} from "./entities/user/login/login.component";
import {RegisterComponent} from "./entities/user/register/register.component";
import {ShopComponent} from "./entities/shop/shop.component";
import {FavoriteComponent} from "./entities/favorite/favorite.component";
import {ItemDetailComponent} from "./entities/item/item-detail/item-detail.component";
import {CartComponent} from "./entities/cart/cart.component";
import {OrderComponent} from "./entities/order/order.component";
import {AuthLogin} from "./config/services/auth-guards/login/login.guard";
import {AuthRole} from "./config/services/auth-guards/role/role.guard";

const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch:'full'},
  {path:'categories',canActivate:[AuthLogin,AuthRole],component:CategoryListComponent},
  {path:'items',canActivate:[AuthLogin,AuthRole],component:ItemListComponent},
  {path:'categories/:categoryId/items',canActivate:[AuthLogin,AuthRole],component:ItemListComponent},
  {path:'categories/:categoryId',canActivate:[AuthLogin,AuthRole],component:CategoryFormComponent},
  {path:'items/:itemId',canActivate:[AuthLogin,AuthRole],component:ItemFormComponent},
  {path:'items/reactive/:itemId',canActivate:[AuthLogin,AuthRole],component:ItemReactiveFormComponent},
  {path:'product/:itemId',component:ItemDetailComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'shop',component:ShopComponent},
  {path:'wishlist',canActivate:[AuthLogin],component:FavoriteComponent},
  {path:'cart',canActivate:[AuthLogin],component:CartComponent},
  {path:'order',canActivate:[AuthLogin],component:OrderComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
