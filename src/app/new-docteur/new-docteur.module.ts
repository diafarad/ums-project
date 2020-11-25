import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewDocteurPageRoutingModule } from './new-docteur-routing.module';

import { NewDocteurPage } from './new-docteur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewDocteurPageRoutingModule
  ],
  declarations: [NewDocteurPage]
})
export class NewDocteurPageModule {}
