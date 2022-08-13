import { Component, OnInit } from '@angular/core';
import { QuizServiceService } from 'src/app/services/quiz-service.service';

@Component({
  selector: 'app-mathematics',
  templateUrl: './mathematics.component.html',
  styleUrls: ['./mathematics.component.css']
})
export class MathematicsComponent implements OnInit {
  SixData:any;
  constructor(private sixdata:QuizServiceService) { 
     this.sixdata.getSixData().subscribe((result)=>{
      this.SixData=result;
     })
  }

  ngOnInit(): void {
  }
  qdatas:any;
  getValue(data:any, question: { answer: any; }){
    this.qdatas=data
    console.log(data.rb == question.answer)
 }
}
