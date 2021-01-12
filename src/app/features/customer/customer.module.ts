import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { MaterialModule } from 'src/app/core/utils/material.module';
import { CustomerHeaderComponent } from './components/customer-header/customer-header.component';
import { CustomerBodyComponent } from './components/customer-body/customer-body.component';

@NgModule({
  declarations: [CustomerComponent, CustomerHeaderComponent, CustomerBodyComponent],
  imports: [CommonModule, CustomerRoutingModule, MaterialModule],
})
export class CustomerModule {}
