import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from './btn/btn.component';
import { MaterialModule } from '../modules/material.module';



@NgModule({
  declarations: [BtnComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    BtnComponent
  ]
})
export class ComponentsModule { }
