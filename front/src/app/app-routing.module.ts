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

const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch:'full'},
  {path:'categories',component:CategoryListComponent},
  {path:'items',component:ItemListComponent},
  {path:'categories/:categoryId/items',component:ItemListComponent},
  {path:'categories/:categoryId',component:CategoryFormComponent},
  {path:'items/:itemId',component:ItemFormComponent},
  {path:'items/reactive/:itemId',component:ItemReactiveFormComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'shop',component:ShopComponent},
  {path:'wishlist',component:FavoriteComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
