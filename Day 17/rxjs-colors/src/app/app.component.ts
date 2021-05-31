import { Component, OnInit } from '@angular/core';
import { GameServiceService } from './services/game-service.service';
import { Observable, combineLatest } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
    
    randomColor! : Observable<[number, number, number]>;
    userColor! : Observable<[number, number, number]>;
    red! : Observable<number>;
    green! : Observable<number>;
    blue! : Observable<number>;

    constructor(private service : GameServiceService) {
    }

    ngOnInit(): void {
        this.randomColor = this.service.GetComputerColor();
        this.red = this.service.GetRed()
        this.green = this.service.GetGreen();
        this.blue = this.service.GetBlue();
        this.userColor = combineLatest([this.service.GetRed,
            this.service.GetGreen,
            this.service.GetBlue
        ]);
    }

    setRed(value:string){
        this.service.SetRed(Number(value));
        this.red = this.service.GetRed();
    }

    setGreen(value:string){
        this.service.SetGreen(Number(value));
        this.green = this.service.GetGreen();
    }

    setBlue(value:string){
        this.service.SetBlue(Number(value));
        this.blue = this.service.GetBlue();
    }

    getRandomColor(){
        this.service.RandomizeColor();
        this.randomColor = this.service.GetComputerColor();
        return  this.randomColor;
    }

}
