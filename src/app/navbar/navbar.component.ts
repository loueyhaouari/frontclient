import {Component, OnInit} from '@angular/core';
import {CategorieService} from "../services/categorie.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  constructor(public categorieService:CategorieService) {
  }
  ngOnInit(): void {
  }

}
