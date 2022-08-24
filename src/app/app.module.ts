import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartButtonComponent } from './cart-button/cart-button.component';
import { PastrySummaryComponent } from './pastry-summary/pastry-summary.component';
import { BodyComponent } from './body/body.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { FoodItemComponent } from './food-item/food-item.component';
import { HomeComponent } from './home/home.component';
import { MealDetailsComponent } from './meal-details/meal-details.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { CartNewComponent } from './cart-new/cart-new.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CartButtonComponent,
    PastrySummaryComponent,
    BodyComponent,
    MenuComponent,
    MenuItemComponent,
    FoodItemComponent,
    HomeComponent,
    MealDetailsComponent,
    Navbar2Component,
    ErrorpageComponent,
    CartNewComponent,
    FormComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
