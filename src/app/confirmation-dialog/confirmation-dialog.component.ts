// @ts-ignore

import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {CategorieService} from "../services/categorie.service";

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmationDialogComponent>,private categorieService:CategorieService) {}

  onConfirmClick(): void {
    // this.categorieService.saveCommande(this.categorieService.commandes).subscribe({
    //   next:data=>{
    //     alert("this commandes was saved in database")
    //   },error:err => {
    //     console.log(err);
    //   }    })
    this.dialogRef.close(true);
  }

  onCancelClick(): void {
    this.dialogRef.close(false);
  }
}
