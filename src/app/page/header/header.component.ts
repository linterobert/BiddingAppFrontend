import { Conditional } from '@angular/compiler';
import { Component, NgModule, OnInit } from '@angular/core';
import { MatBadgeModule } from "@angular/material/badge";



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
