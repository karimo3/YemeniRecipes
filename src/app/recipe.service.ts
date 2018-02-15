import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import {Recipe} from './recipe';
import {RECIPES} from './mock-recipes';
import {MessageService} from './message.service';

@Injectable()
export class RecipeService {


  // getRecipes(): Recipe[]{
  //   return RECIPES;
  // }
  constructor(private messageService: MessageService) { }

  getRecipes(): Observable<Recipe[]> {
    //Todo: send the message _after_ fetching the recipes

  this.messageService.add('RecipeService: fetched recipes');
  return of(RECIPES);

  }

}
