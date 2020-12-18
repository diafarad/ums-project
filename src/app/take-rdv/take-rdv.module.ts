import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TakeRDVPageRoutingModule } from './take-rdv-routing.module';
import { TakeRDVPage } from './take-rdv.page';
import {CalendarModule} from "ion2-calendar";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TakeRDVPageRoutingModule,
    CalendarModule
  ],
  declarations: [TakeRDVPage]
})
export class TakeRDVPageModule {}
