import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CategorieService} from "../../services/categorie.service";
import {CartItems} from "../../model/CartItems";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationDialogComponent} from "../../confirmation-dialog/confirmation-dialog.component";

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit{

  a:boolean=true;
  public cartItems:any;
  ngOnInit(): void {

    this.cartItems= this.categorieService.getCartItems();
  }

  constructor(private router:Router,public categorieService:CategorieService,private dialog: MatDialog) {

  }
  openConfirmationDialog(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.categorieService.a=true;
        // User confirmed the action, perform your desired action here
        // For example, call a function to confirm the order
        this.router.navigate(['commandes'])
        this.confirmOrder();
      } else {
        // User canceled the action
      }
    });
  }

  confirmOrder(): void {
    // Add your code to confirm the order here
    // This function will be called when the user confirms the action in the dialog
  }
  handleValidationPanier() {
    this.router.navigate(['/validation'])
  }



  removeCart(cart: CartItems) {
    this.categorieService.removeFromCart(cart);
    if(this.cartItems===null){
      this.router.navigate(['panier']);
    }
  }
}
