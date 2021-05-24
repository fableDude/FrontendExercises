import { Question } from "./Question";

export class Exam{
    /**
     *
     */
    constructor(
        public questions:Question[]
        ) {}

    addQuestion(question:Question):void{
        this.questions.push(question);
    }
    
    print():void{
        this.questions.forEach((question,index) => {
            console.log(`question${index+1}:${question.caption}`)
            question.answers.forEach((answer,index) => {
                console.log(`${index+1}.${answer}`)
            });
        });
    }

    grade(answers:number[]):number{
        let grade:number = 0;
        answers.forEach((answer,index) => {
            if(this.questions[index].correctIndex == answer){
                grade++;
            }
            grade = (100/this.questions.length)*grade;
        });
        return grade;

    }
}