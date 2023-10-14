import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { CommandesComponent } from './commandes/commandes.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
// import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { PanierComponent } from './panier/panier.component';
import { RecapitulatifComponent } from './panier/recapitulatif/recapitulatif.component';
import { ValidationComponent } from './panier/validation/validation.component';
import { FamilleComponent } from './famille/famille.component';
import { ProductComponent } from './product/product.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {DatePipe} from "@angular/common";
import { EditCommandeComponent } from './edit-commande/edit-commande.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccueilComponent,
    AppHeaderComponent,
    CommandesComponent,
    ProductDetailComponent,
    // ProductComponent,
    FooterComponent,
    PanierComponent,
    RecapitulatifComponent,
    ValidationComponent,
    FamilleComponent,
    ProductComponent,
    ConfirmationDialogComponent,
    EditCommandeComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule, HttpClientModule,MatDialogModule, ReactiveFormsModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
