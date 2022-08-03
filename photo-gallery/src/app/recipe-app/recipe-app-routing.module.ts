import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeAppPage } from './recipe-app.page';

const routes: Routes = [
  {
    path: '',
    component: RecipeAppPage,
  },
  {
    path: ':recipeId',
    loadChildren: () =>
      import('./recipe-detail/recipe-detail.module').then(
        (m) => m.RecipeDetailPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeAppPageRoutingModule {}
