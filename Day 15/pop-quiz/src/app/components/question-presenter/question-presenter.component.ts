import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from 'src/app/models/question';
import { QUESTIONS } from 'src/app/models/questions';


@Component({
  selector: 'app-question-presenter',
  templateUrl: './question-presenter.component.html',
  styleUrls: ['./question-presenter.component.css']
})
export class QuestionPresenterComponent implements OnInit {
//data
@Input () 
question : Question = QUESTIONS[0];

@Output()
answerChosen = new EventEmitter<string>();

  constructor() { 
  }
      

  ngOnInit(): void {
  }

  onSelectAnswer(answer:string){
      this.answerChosen.emit(answer);
  }

}
