import { Component, OnInit } from '@angular/core';
import { QuizServiceService } from 'src/app/services/quiz-service.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {
  SixData:any;
  constructor(private sixdata:QuizServiceService) {
     this.sixdata.getSixData().subscribe((result)=>{
      this.SixData=result;
     })
  }

  ngOnInit(): void {
  }
  qdatas:any;
  getValue(data:NgForm, question: { answer: any; }){
    this.qdatas=data
    console.log(data == question.answer)
 }
}
