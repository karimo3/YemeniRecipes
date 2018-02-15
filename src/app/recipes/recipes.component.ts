import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import {RecipeService} from '../recipe.service'
// import { RECIPES } from '../mock-recipes';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})

export class RecipesComponent implements OnInit {

  selectedRecipe: Recipe;

  recipes: Recipe[];

//   onSelect(recipe: Recipe): void {
//   this.selectedRecipe = recipe;
// }

  // recipe: Recipe = {
  //    id: 1,
  //   name: 'Aseed'
  // };


  // getRecipes(): void {
  //   this.recipes = this.recipeService.getRecipes();
  // }

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {

    this.getRecipes();
  }

  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }

  getRecipes(): void {
    this.recipeService.getRecipes()
        .subscribe(recipes => this.recipes = recipes);
  }

}