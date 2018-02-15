import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { FormsModule } from '@angular/forms';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component'; // <-- NgModel lives here
import { RecipeService } from './recipe.service';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipeDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [
    RecipeService,
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }