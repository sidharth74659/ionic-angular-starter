import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AssignmentsPage } from './assignments.page';
import { ISampleFormPage } from './i-sample-form/i-sample-form.page';

const routes: Routes = [
  {
    path: '',
    component: AssignmentsPage,
  },
  {
    path: '1',
    component: ISampleFormPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssignmentsPageRoutingModule {}
