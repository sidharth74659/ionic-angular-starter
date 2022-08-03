import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipes: Recipe[] = [
    {
      id: 1,
      title: 'Saffron-Chutney',
      imageUrl:
        'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/saffron-chutney.jpg',
      ingredients: [
        { name: 'Saffron', amount: 1 },
        { name: 'Onion', amount: 1 },
      ],
    },
    {
      id: 2,
      title: 'Paneer Tikka',
      imageUrl:
        'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/paneer-tikka.jpg',
      ingredients: [
        { name: 'Paneer', amount: 1 },
        { name: 'Onion', amount: 1 },
      ],
    },
  ];

  constructor() {}

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: number) {
    return {
      ...this.recipes.find((recipe) => recipe.id === recipeId),
    };
  }

  deleteRecipe(recipeId: number) {
    this.recipes = this.recipes.filter((recipe) => recipe.id !== recipeId);
  }
}
