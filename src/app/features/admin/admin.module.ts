import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/core/utils/material.module';
import { DrawContainerComponent } from './components/draw-container/draw-container.component';
import { IndexComponent } from './components/admin-body/index/index.component';
import { AdminBodyComponent } from './components/admin-body/admin-body.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    AdminBodyComponent,
    IndexComponent,
    DrawContainerComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, FormsModule, MaterialModule],
})
export class AdminModule {}
