import { Component } from '@angular/core';
import { Question } from './models/question';
import { QUESTIONS } from './models/questions';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   //data 
  currentQuestion: Question;
  currentQuestionIndex: number;
  summery: Question[];
  isQuizOver: boolean;

  constructor() {
    this.currentQuestionIndex = 0;
    this.currentQuestion = QUESTIONS[this.currentQuestionIndex];
    this.summery = [];
    this.isQuizOver = false;
  }


  //methods
  userSelectAnswer(answer:string){
      if(!this.isQuizOver){
        let answerIndex = this.currentQuestion.answers.indexOf(answer);
        this.currentQuestion.userAnswer = answerIndex;

        this.summery.push(this.currentQuestion);
        this.currentQuestionIndex ++;
        this.currentQuestion = QUESTIONS[this.currentQuestionIndex];
        this.isQuizOver = !(this.currentQuestion);
      }
  }
}
