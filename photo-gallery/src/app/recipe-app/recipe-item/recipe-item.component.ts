import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  @Output() view: EventEmitter<number> = new EventEmitter();
  @Output() delete: EventEmitter<null> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  deleteRecipe(recipeId: number) {
    this.delete.emit();
  }
}
