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
import { HomeComponent } from './components/admin-body/home/home.component';
import { PortalComponent } from './components/admin-body/portal/portal.component';
import { OrderComponent } from './components/admin-body/order/order.component';
import { ProductComponent } from './components/admin-body/product/product.component';
import { MarketingComponent } from './components/admin-body/marketing/marketing.component';
import { FinanceComponent } from './components/admin-body/finance/finance.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    AdminBodyComponent,
    IndexComponent,
    DrawContainerComponent,
    HomeComponent,
    PortalComponent,
    OrderComponent,
    ProductComponent,
    MarketingComponent,
    FinanceComponent,
    PageNotFoundComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, FormsModule, MaterialModule],
})
export class AdminModule {}
