import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RdvTabsPageRoutingModule } from './rdv-tabs-routing.module';

import { RdvTabsPage } from './rdv-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RdvTabsPageRoutingModule
  ],
  declarations: [RdvTabsPage]
})
export class RdvTabsPageModule {}
