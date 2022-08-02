import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamplePagePageRoutingModule } from './sample-page-routing.module';

import { SamplePagePage } from './sample-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamplePagePageRoutingModule
  ],
  declarations: [SamplePagePage]
})
export class SamplePagePageModule {}
