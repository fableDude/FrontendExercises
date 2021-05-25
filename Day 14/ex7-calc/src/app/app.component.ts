import { Component } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //data
    num1: number = 0;
    num2: number = 0;
    calculated: boolean = false;
    results: string[] = [];
  //methods
  setnum1(num:string){
    this.calculated = false;
    this.num1=Number(num);
  }

  setnum2(num:string){
    this.calculated = false;
    this.num2=Number(num);
  }
  
  calc():void{
    this.calculated = true;
    //this.results = [
    //    `${this.num1}+${this.num2}=${this.add()}`,
    //    `${this.num1}-${this.num2}=${this.dif()}`,
    //    `${this.num1}*${this.num2}=${this.mul()}`
    //]
  }
  add():number{
    return this.num1+this.num2;
  }
  dif():number{
    return this.num1-this.num2;
  }
  mul():number{
    return this.num1*this.num2;
  }

  
}
