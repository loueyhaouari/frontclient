import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit{
  currentRoute!:string;

  constructor(private router:Router) {
    this.currentRoute=this.router.url;
  }
  ngOnInit(): void {
  }

}
