import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { FormsModule } from '@angular/forms';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component'; // <-- NgModel lives here
import { RecipeService } from './recipe.service';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipeDetailComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [
    RecipeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }