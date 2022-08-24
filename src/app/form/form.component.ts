import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  items = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({name: '', address: ''})

  constructor(private cartService : CartService, private formBuilder : FormBuilder, private router : Router) { }
  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    window.alert('Your order has been submitted');
    this.checkoutForm.reset();
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
  }

}
