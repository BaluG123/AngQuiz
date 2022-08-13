import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Class8Component } from './class8/class8.component';
import { MathematicsComponent } from './mathematics/mathematics.component';
import { ScienceComponent } from './science/science.component';
import { SocialscienceComponent } from './socialscience/socialscience.component';

const routes: Routes = [
  {
    path:'ScienceQuiz',
    component:ScienceComponent
  },
  {
    path:'SocialScienceQuiz',
    component:SocialscienceComponent
  },
  {
    path:'MathematicsQuiz',
    component:MathematicsComponent
  },
  {
    path:'',
    component:Class8Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Class8RoutingModule { }
