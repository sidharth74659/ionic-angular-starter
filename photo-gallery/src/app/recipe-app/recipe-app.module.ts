import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipeAppPageRoutingModule } from './recipe-app-routing.module';

import { RecipeAppPage } from './recipe-app.page';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RecipeAppPageRoutingModule],
  declarations: [RecipeAppPage, RecipeItemComponent],
})
export class RecipeAppPageModule {}
