import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.css']
})
export class CartButtonComponent implements OnInit {

  constructor(private router: Router) { 
   
}
    
  ngOnInit(): void {
  }

  navigate() {
    this.router.navigate(['/menuItems']);
}

}
