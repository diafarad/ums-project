import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AgmCoreModule } from '@agm/core';
import { UrgencePageRoutingModule } from './urgence-routing.module';
import { UrgencePage } from './urgence.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UrgencePageRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDPuNARpuLU1nxDERFaHd16ySqcjnO-bvw'
    })
  ],
  declarations: [UrgencePage]
})
export class UrgencePageModule {}
