import {Component, OnInit} from '@angular/core';
import {CategorieService} from "../services/categorie.service";
import {Router} from "@angular/router";
import {Product} from "../model/Product";
import {Famille} from "../model/Famille";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CartItems} from "../model/CartItems";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
 public products:any;
 public familles:any;
 public host1:any;
  productFormGroup!:FormGroup;
  public cartItems:CartItems[]=[];
  index!:number;
public bool=true;
  constructor(private categorieService:CategorieService,private router:Router,private fb:FormBuilder) {
    this.productFormGroup=this.fb.group({
      qte:this.fb.control("",[Validators.required,Validators.min(1)])
    })
  }
  ngOnInit(): void {

    this.host1=this.categorieService.host;
    this.getFamilles()
  this.getProducts();
    this.cartItems= this.categorieService.getCartItems();

  }
  public getFamilles(){
    this.categorieService.getFamilles().subscribe({
      next:(data)=>{
        this.familles=data;

      }
    });
  }

  public clearp(){

    this.categorieService.clearCart();
    this.router.navigate(['famille'])

  }
public getProducts(){
    this.categorieService.getProducts().subscribe({
      next:(data)=>{
this.products=data;
      },error:(err)=>{
        console.log(err);
      }
    })
}
  removeCart(cart: CartItems) {
    this.categorieService.removeFromCart(cart);
  }

  handleProduct(product:Product) {
    this.categorieService.productId=product.id;
    this.categorieService.product1=product;
    this.router.navigate(['productdetail']);

  }
  handleFamille(f: Famille) {
    this.getFamilles();
    this.getProducts();
    this.categorieService.familleId=f.id;
    this.categorieService.nomFamille=f.nom;
    this.router.navigate(['/product'])
  }

  handleAddProduct(product:Product) {

const qte=this.productFormGroup.get('qte')?.value
    console.log(product.qte);
    this.categorieService.cartItems.map(p=>
    {
      this.index=this.categorieService.cartItems.indexOf(p);
      if(p.product.nom==product.nom){
        p.qte+=1;
      }
    })

  this.categorieService.cartItems.map(p=> {
  (p.product.nom==product.nom)?product:p
  p.qte+=1;

  });
    this.categorieService.addToCart(
      {product:product,qte:qte,nomFamille:this.categorieService.nomFamille,
        nomCategorie:this.categorieService.nomCategorie})
      this.categorieService.isPanier=true;
}



  handleCommande() {
    this.router.navigate(['/panier']);
  }
}
