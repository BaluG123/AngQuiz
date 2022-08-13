import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Class9RoutingModule } from './class9-routing.module';
import { ScienceComponent } from './science/science.component';
import { SocialscienceComponent } from './socialscience/socialscience.component';
import { MathematicsComponent } from './mathematics/mathematics.component';
import { Class9Component } from './class9/class9.component';


@NgModule({
  declarations: [
    ScienceComponent,
    SocialscienceComponent,
    MathematicsComponent,
    Class9Component
  ],
  imports: [
    CommonModule,
    Class9RoutingModule,
    FormsModule
  ]
})
export class Class9Module { }
