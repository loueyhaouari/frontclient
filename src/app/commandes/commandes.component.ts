import {Component, OnInit} from '@angular/core';
import {CategorieService} from "../services/categorie.service";
import {Commandes} from "../model/Commandes";
import {UUID} from "angular2-uuid";
import {DatePipe} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit{

  public cartItems:any;
  public commandes:Commandes[]=[];
 currentDate!:Date;

  constructor(public categorieService:CategorieService,private router:Router) {
    // this.categorieService.commandes.push({id:UUID.UUID(),cartItems:this.cartItems})
    // this.commandes=this.categorieService.commandes;

  }
  ngOnInit(): void {
    this.cartItems= this.categorieService.getCartItems();
    this.currentDate = new Date();


  }

  handleViewCommande(c: Commandes) {
    this.categorieService.commande=c;
    this.router.navigate(['edit']);
  }
}
