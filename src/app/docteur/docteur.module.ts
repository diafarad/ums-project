import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocteurPageRoutingModule } from './docteur-routing.module';

import { DocteurPage } from './docteur.page';
import {BarRatingModule} from 'ngx-bar-rating';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DocteurPageRoutingModule,
        BarRatingModule
    ],
  declarations: [DocteurPage]
})
export class DocteurPageModule {}
