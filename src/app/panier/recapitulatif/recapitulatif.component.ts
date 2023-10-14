import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CategorieService} from "../../services/categorie.service";
import {CartItems} from "../../model/CartItems";

@Component({
  selector: 'app-recapitulatif',
  templateUrl: './recapitulatif.component.html',
  styleUrls: ['./recapitulatif.component.css']
})
export class RecapitulatifComponent implements OnInit{
  a:boolean=true;
  public cartItems:any;
  ngOnInit(): void {

    this.cartItems= this.categorieService.getCartItems();
  }

  constructor(private router:Router,public categorieService:CategorieService) {

  }
  handleValidationPanier() {
    this.router.navigate(['/validation'])
  }



  removeCart(cart: CartItems) {
    this.categorieService.removeFromCart(cart);
    if(this.cartItems===null){
      this.router.navigate(['panier']);
    }
  }
}
