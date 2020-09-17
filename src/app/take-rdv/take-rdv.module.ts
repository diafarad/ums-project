import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TakeRDVPageRoutingModule } from './take-rdv-routing.module';

import { TakeRDVPage } from './take-rdv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TakeRDVPageRoutingModule
  ],
  declarations: [TakeRDVPage]
})
export class TakeRDVPageModule {}
