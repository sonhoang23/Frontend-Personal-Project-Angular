import { MaterialModule } from "src/app/core/utils/material.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./login.component";
import {MatSlideToggleComponent} from"../../../../core/components/mat-slide-toggle/mat-slide-toggle.component";
import { FormsModule } from "@angular/forms";
import { LoginBodyComponent } from "./components/login-body/login-body.component";
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [LoginComponent, LoginBodyComponent,MatSlideToggleComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
})
export class LoginModule {}
