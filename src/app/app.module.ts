import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MaterialModule} from "./core/utils/material.module";
import {registerLocaleData} from "@angular/common";
import en from "@angular/common/locales/en";
import {AlertComponent} from "./core/components/alert/alert.component";


registerLocaleData(en);
@NgModule({
	declarations: [AppComponent, AlertComponent],
	imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, FormsModule, HttpClientModule, MaterialModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
