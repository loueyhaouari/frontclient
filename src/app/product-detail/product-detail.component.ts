import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CategorieService} from "../services/categorie.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{

product:any;
host2:any;
constructor(private router:Router,private categorieService:CategorieService) {
}
  ngOnInit(): void {
    this.host2=this.categorieService.host;

    this.getProduct();
  }

  getProduct(){
  this.categorieService.getProduct().subscribe({
    next:(data)=>{
      this.product=data;
    }
  })
  }
}
