import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { MaterialModule } from 'src/app/core/utils/material.module';
import { CustomerHeaderComponent } from './components/customer-header/customer-header.component';

@NgModule({
  declarations: [CustomerComponent, CustomerHeaderComponent],
  imports: [CommonModule, CustomerRoutingModule, MaterialModule],
})
export class CustomerModule {}
