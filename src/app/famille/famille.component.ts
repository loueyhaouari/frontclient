import {Component, OnInit} from '@angular/core';
import {Famille} from "../model/Famille";
import {Product} from "../model/Product";
import {Router} from "@angular/router";
import {CategorieService} from "../services/categorie.service";
import {CartItems} from "../model/CartItems";

@Component({
  selector: 'app-famille',
  templateUrl: './famille.component.html',
  styleUrls: ['./famille.component.css']
})
export class FamilleComponent implements OnInit{
  currentRoute!:string;
  familles:any;
  public cartItems:any;

  products!:Array<Product>;
  constructor(private router:Router,public categorieService:CategorieService) {
    this.currentRoute=this.router.url;
  }
  ngOnInit(): void {
this.getFamilles();
    this.cartItems= this.categorieService.getCartItems();

  }

  public getFamilles(){
    this.categorieService.getFamilles().subscribe({
      next:(data)=>{
        this.familles=data;

      }
    });
  }
  handleProduct() {
    this.router.navigate(['/product']);
  }


  handleFamille(f: Famille) {
    this.categorieService.familleId=f.id;
    this.categorieService.nomFamille=f.nom;
    this.router.navigate(['/product'])
  }
  removeCart(cart: CartItems) {
    this.categorieService.removeFromCart(cart);
  }
}
