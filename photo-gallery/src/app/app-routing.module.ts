import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'recipe-app',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'assignments',
    loadChildren: () =>
      import('./assignments/assignments.module').then(
        (m) => m.AssignmentsPageModule
      ),
  },
  {
    path: 'recipe-app',
    loadChildren: () =>
      import('./recipe-app/recipe-app.module').then(
        (m) => m.RecipeAppPageModule
      ),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
