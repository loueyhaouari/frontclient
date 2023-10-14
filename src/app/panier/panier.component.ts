import {Component, OnInit} from '@angular/core';
import {CategorieService} from "../services/categorie.service";
import {CartItems} from "../model/CartItems";
import {Router} from "@angular/router";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit{
a:boolean=true;
public cartItems:any;
constructor(public categorieservice:CategorieService,private router:Router) {

  }
  ngOnInit(): void {
   this.cartItems= this.categorieservice.getCartItems();
  }

  removeCart(cart: CartItems) {
    this.categorieservice.removeFromCart(cart);
  }
}
