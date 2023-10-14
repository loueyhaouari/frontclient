import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "./accueil/accueil.component";
import {CommandesComponent} from "./commandes/commandes.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {PanierComponent} from "./panier/panier.component";
import {ValidationComponent} from "./panier/validation/validation.component";
import {FamilleComponent} from "./famille/famille.component";
import {ProductComponent} from "./product/product.component";
import {EditCommandeComponent} from "./edit-commande/edit-commande.component";

const routes: Routes = [
  {path:"",component:AccueilComponent},
  {path:"productdetail",component:ProductDetailComponent},
{path:"acceuil",component:AccueilComponent},
  {path:"famille",component:FamilleComponent},
  {path:"commandes",component:CommandesComponent},
  {path:"panier",component:PanierComponent},
  {path:"validation",component:ValidationComponent},
  {path:"product",component:ProductComponent},
  {path:"edit",component:EditCommandeComponent}
  ];

  @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
