import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RECIPES } from '../mock-recipes';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})

export class RecipesComponent implements OnInit {
  recipes = RECIPES;

  selectedRecipe: Recipe;

  onSelect(recipe: Recipe): void {
  this.selectedRecipe = recipe;
}

  recipe: Recipe = {
     id: 1,
    name: 'Aseed'
  };

  constructor() { }

  ngOnInit() {
  }

}