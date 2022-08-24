import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartNewComponent } from './cart-new/cart-new.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { MealDetailsComponent } from './meal-details/meal-details.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  
  { path: '', component: HomeComponent, pathMatch: "full"},
  { path: 'menuItems', component: MenuComponent },
  { path: 'menuItems/:mealId', component: MealDetailsComponent },
  { path: 'cart', component: CartNewComponent },
  { path : 'checkout', component: FormComponent},
  { path: '**', component: ErrorpageComponent},
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
