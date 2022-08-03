import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'recipe-app',
  templateUrl: './recipe-app.page.html',
  styleUrls: ['./recipe-app.page.scss'],
})
export class RecipeAppPage implements OnInit {
  recipes: Recipe[];

  constructor(
    private recipeService: RecipeService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.recipes = this.recipeService.getAllRecipes();
  }

  deleteRecipe(recipeId: number) {
    console.log('delete mode of : ' + recipeId);
    this.recipeService.deleteRecipe(recipeId);
    this.recipes = this.recipeService.getAllRecipes();
  }

  async confirmDelete(recipeName: string, recipeId: number) {
    const alert = await this.alertController.create({
      header: `Are you sure you want to delete ${recipeName}?`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.deleteRecipe(recipeId);
          },
        },
      ],
    });

    await alert.present();
  }
}
