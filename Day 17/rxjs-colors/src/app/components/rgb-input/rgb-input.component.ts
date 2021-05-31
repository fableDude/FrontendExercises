import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rgb-input',
  templateUrl: './rgb-input.component.html',
  styleUrls: ['./rgb-input.component.css']
})
export class RgbInputComponent implements OnInit {
   
  
    //data
    @Input()
    colorName!: string;
    value: string;

    constructor() { 
        this.value="";
      }
      ngOnInit(): void {
    }
    
    setValue(userInput:string){
        console.log(userInput);
        this.value=userInput;
    }

  
}
