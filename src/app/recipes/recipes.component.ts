import { Component, OnInit } from '@angular/core';
import { Recipes } from '../recipes';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  hero: Recipes = {
    id: 1,
    name: 'Aseed'
  };

  constructor() { }

  ngOnInit() {
  }

}