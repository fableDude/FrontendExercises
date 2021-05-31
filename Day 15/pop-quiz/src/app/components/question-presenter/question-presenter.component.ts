import { Component, OnInit, Input } from '@angular/core';
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


  constructor() { 
  }
      

  ngOnInit(): void {
  }

}
