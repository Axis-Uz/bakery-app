import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart-new',
  templateUrl: './cart-new.component.html',
  styleUrls: ['./cart-new.component.css']
})
export class CartNewComponent implements OnInit {

  items = this.cartService.getItems();

  constructor(private cartService : CartService, private router : Router) { }

  ngOnInit(): void {
  }

  navigate() {
    this.router.navigate(['/checkout']);
}
}
