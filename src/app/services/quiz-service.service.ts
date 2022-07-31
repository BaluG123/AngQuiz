import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {
  url="http://localhost:8000/quiz/upscapi/"
  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get(this.url)
  }
}
