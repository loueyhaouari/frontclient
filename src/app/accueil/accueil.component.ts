import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Categorie} from "../model/Categorie";
import {CategorieService} from "../services/categorie.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {CartItems} from "../model/CartItems";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit{

  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,12,13,14,15,16,17,18,19,20,21,22,23,24];
 public categories:any;
public cartItems:any;

  constructor(private router:Router,private categorieService:CategorieService) {

  }
  ngOnInit(): void {
this.getCategoriees();
    this.cartItems= this.categorieService.getCartItems();

  }
  private getCategoriees(){
    this.categorieService.getCategories().subscribe({
      next:(data)=>{
      this.categories=data;
      },error:err => {
        console.log("err");
      }
    })
  }
 public handleDetail():void{
    this.router.navigate(["/productdetail"]);
  }

  handleCategorie(cat:Categorie) {
this.categorieService.categorieId=cat.id;
this.categorieService.nomCategorie=cat.nom;
console.log(cat.id)
    this.router.navigate(['/famille']);


  }
  removeCart(cart: CartItems) {
    this.categorieService.removeFromCart(cart);
  }
  clear(){
    this.categorieService.clearCart();

    this.categorieService.isPanier=false;
  }
}
