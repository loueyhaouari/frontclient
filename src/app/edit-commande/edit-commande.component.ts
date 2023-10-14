import {Component, OnInit} from '@angular/core';
import {CategorieService} from "../services/categorie.service";

@Component({
  selector: 'app-edit-commande',
  templateUrl: './edit-commande.component.html',
  styleUrls: ['./edit-commande.component.css']
})
export class EditCommandeComponent implements OnInit{
  constructor(public categorieService:CategorieService) {
  }
  ngOnInit(): void {
  }

}
