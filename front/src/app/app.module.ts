import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './layouts/navbar/navbar.component';
import {FooterComponent} from './layouts/footer/footer.component';
import {CategoryListComponent} from './entities/category/category-list/category-list.component';
import {CategoryFormComponent} from './entities/category/category-form/category-form.component';
import {ItemListComponent} from './entities/item/item-list/item-list.component';
import {ItemFormComponent} from './entities/item/item-form/item-form.component';
import {ItemReactiveFormComponent} from './entities/item/item-reactive-form/item-reactive-form.component';
import {HttpRequestInterceptor} from "./config/interceptors/http-request-interceptor";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { ToastModule } from 'primeng/toast';

import { LoginComponent } from './entities/user/login/login.component';
import { RegisterComponent } from './entities/user/register/register.component';
import { ShopComponent } from './entities/shop/shop.component';
import { FavoriteComponent } from './entities/favorite/favorite.component';
import { ItemDetailComponent } from './entities/item/item-detail/item-detail.component';
import { CartComponent } from './entities/cart/cart.component';
import { OrderComponent } from './entities/order/order.component';
import {MessageService} from "primeng/api";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    CategoryListComponent,
    CategoryFormComponent,
    ItemListComponent,
    ItemFormComponent,
    ItemReactiveFormComponent,
    LoginComponent,
    RegisterComponent,
    ShopComponent,
    FavoriteComponent,
    ItemDetailComponent,
    CartComponent,
    OrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AutoCompleteModule,
    ToastModule,
    ButtonModule,
    RippleModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpRequestInterceptor,
    multi: true
  },MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
