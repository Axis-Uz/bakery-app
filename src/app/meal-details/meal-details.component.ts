import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meal, meals } from '../meals'
import { CartService } from '../cart.service';

@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrls: ['./meal-details.component.css']
})
export class MealDetailsComponent implements OnInit{

  meal: Meal | undefined;

  constructor(private route: ActivatedRoute, private cartService : CartService) {
    
    
   }

   addToCart(meal: Meal) {
    this.cartService.addToCart(meal);
    window.alert('Your product has been added to the cart!');
  }

   ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const mealIdFromRoute = Number(routeParams.get('mealId'));
  
    // Find the product that correspond with the id provided in route.
    this.meal = meals.find(meal => meal.id === mealIdFromRoute);
  }

}
