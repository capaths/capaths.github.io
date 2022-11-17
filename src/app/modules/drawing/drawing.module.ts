import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrawingRoutingModule } from './drawing-routing.module';
import { HomeComponent } from './views/home/home.component';
import { JoinComponent } from './views/join/join.component';


@NgModule({
  declarations: [
    HomeComponent,
    JoinComponent
  ],
  imports: [
    CommonModule,
    DrawingRoutingModule
  ]
})
export class DrawingModule { }
