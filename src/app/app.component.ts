import { Component } from '@angular/core';
import { QuizServiceService } from './services/quiz-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angupscQuiz';
  questions:any;
  qdatas:any;
  
  constructor(){
    
    }
  
}
