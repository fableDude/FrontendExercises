import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {
private red : number = 0;
green : number = 0;
blue : number = 0;
randomColor : [number,number,number] = [0,0,0] ;

red$ = new BehaviorSubject<number>(this.red);
green$ = new BehaviorSubject<number>(this.green);
blue$ = new BehaviorSubject<number>(this.blue);
randomColor$ = new BehaviorSubject<[number,number,number]>(this.randomColor);
  
constructor() { }

  GetRed():Observable<number>{
    return this.red$.asObservable();
  }

  GetGreen():Observable<number>{
    return this.green$.asObservable();
  }

  GetBlue():Observable<number>{
    return this.blue$.asObservable();
  }

  GetComputerColor():Observable<[number,number,number]>{
    return this.randomColor$.asObservable();
  }

  SetRed(value:number):void{
      this.red = value;
      this.red$.next(this.red);
  }

  SetGreen(value:number):void{
    this.green = value;
    this.green$.next(this.green);
    }

    SetBlue(value:number):void{
        this.blue = value;
        this.blue$.next(this.blue);
    }

    RandomizeColor(){
        this.randomColor = [Math.floor(Math.random() * 255),
            Math.floor(Math.random() * 255),
            Math.floor(Math.random() * 255)
        ]
        this.randomColor$.next(this.randomColor);
    }
}
