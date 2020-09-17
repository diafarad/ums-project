import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UrgTabsPageRoutingModule } from './urg-tabs-routing.module';

import { UrgTabsPage } from './urg-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UrgTabsPageRoutingModule
  ],
  declarations: [UrgTabsPage]
})
export class UrgTabsPageModule {}
