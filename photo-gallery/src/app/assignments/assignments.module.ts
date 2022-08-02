import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssignmentsPageRoutingModule } from './assignments-routing.module';

import { AssignmentsPage } from './assignments.page';
import { ISampleFormPage } from './i-sample-form/i-sample-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssignmentsPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [AssignmentsPage, ISampleFormPage],
})
export class AssignmentsPageModule {}
