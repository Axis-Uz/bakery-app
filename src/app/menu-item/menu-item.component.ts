import { Component, Input, OnInit } from '@angular/core';
import { meals } from '../meals';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  items = this.cartService.getItems();
  meals = [...meals]
  constructor(private cartService : CartService, private router: Router) { }

  ngOnInit(): void {
  }
  navigate() {
    this.router.navigate(['/cart']);
}
  
}
