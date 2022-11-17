import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrawingRoutingModule } from './drawing-routing.module';
import { HomeComponent } from './views/home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    DrawingRoutingModule
  ]
})
export class DrawingModule { }
