import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/*material*/
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
const MaterialModuleAdd = [
  MatButtonModule,
  MatInputModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatGridListModule,
  MatSelectModule,
  MatExpansionModule,
  MatCardModule,
  MatSlideToggleModule,

];
@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialModuleAdd],
  exports: [MaterialModuleAdd],
})
export class MaterialModule {}
