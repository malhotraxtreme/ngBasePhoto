import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';

const exportArray = [
  MatButtonModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatStepperModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatExpansionModule
];

@NgModule({
  imports:  [ exportArray ],
  exports:  [ exportArray ]
})
export class MaterialImportModule { }
