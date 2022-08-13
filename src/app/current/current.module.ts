import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CurrentRoutingModule } from './current-routing.module';
import { CurrentaffairsComponent } from './currentaffairs/currentaffairs.component';


@NgModule({
  declarations: [
    CurrentaffairsComponent
  ],
  imports: [
    CommonModule,
    CurrentRoutingModule,
    FormsModule
  ],
  exports:[
    CurrentaffairsComponent
  ]
})
export class CurrentModule { }
