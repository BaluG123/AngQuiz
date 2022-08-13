import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Class6RoutingModule } from './class6-routing.module';
import { ScienceComponent } from './science/science.component';
import { SocialscienceComponent } from './socialscience/socialscience.component';
import { MathematicsComponent } from './mathematics/mathematics.component';
import { Class6Component } from './class6/class6.component';



@NgModule({
  declarations: [
    ScienceComponent,
    SocialscienceComponent,
    MathematicsComponent,
    Class6Component
  ],
  imports: [
    CommonModule,
    Class6RoutingModule,
    FormsModule,
  ]
})
export class Class6Module { }
