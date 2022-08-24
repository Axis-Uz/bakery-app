import { Injectable } from '@angular/core';
import { Meal, meals } from './meals';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items : Meal[] = [];
  addToCart(meal: Meal) {
    this.items.push(meal);
    console.log(this.items)
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
