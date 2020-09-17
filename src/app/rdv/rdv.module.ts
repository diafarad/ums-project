import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RdvPageRoutingModule } from './rdv-routing.module';

import { RdvPage } from './rdv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RdvPageRoutingModule
  ],
  declarations: [RdvPage]
})
export class RdvPageModule {}
