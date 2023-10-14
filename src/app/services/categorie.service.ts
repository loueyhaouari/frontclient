import {Injectable, OnInit} from '@angular/core';
import {Categorie} from "../model/Categorie";
import {Famille} from "../model/Famille";
import {Product} from "../model/Product";
import {identity, map, Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CartItems} from "../model/CartItems";
import {Commandes} from "../model/Commandes";

@Injectable({
  providedIn: 'root'
})
export class CategorieService implements OnInit{
  public host:string="http://localhost:8088"
  public categorieId!:string;
  public familleId!:number;
  public productId!:number;
  public product1!:any;
  public nomFamille!:string;
  public isPanier=false;
  public nomCategorie!:string;
  public commande:any;
  public a=false;
  public cartbool=true;
  public commandes:Commandes[]=[];
public verif!:string;
  produits!:Array<Product>;
  public cartItems: CartItems[] = [];
  public i=0;
  addToCart(cartItems: CartItems) {

      this.cartItems.push(cartItems);
      this.i=this.i+1;

  }



  removeFromCart(cartItems: CartItems) {
    const index = this.cartItems.indexOf(cartItems);

    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.i=this.i-1;

    }
  }
  getCartItems() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
    this.isPanier=false;
    this.getCartItems();
    this.i=0;
    return this.cartItems;
  }

  constructor(private http:HttpClient) {

  }
  // public saveCommande(commandes:Commandes[]):Observable<Array<Commandes>>{
  //   return this.http.post<Array<Commandes>>(this.host+"/commandes",commandes);
  // }
  public getCategories(){
return this.http.get(this.host+"/categories")
  }
  public getFamilles(){
    return this.http.get(this.host+"/familles/"+this.categorieId)
  }
  public getProducts(){
    return this.http.get(this.host+"/products/"+this.familleId);
  }
  public getProduct(){
    return this.http.get(this.host+"/product/"+this.productId)
  }
public getRessource(url:string){
   return  this.http.get(this.host+url)
}



  ngOnInit(): void {

  }

}
