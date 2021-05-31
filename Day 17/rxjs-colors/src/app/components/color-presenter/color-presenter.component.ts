import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameServiceService } from 'src/app/services/game-service.service';

@Component({
  selector: 'app-color-presenter',
  templateUrl: './color-presenter.component.html',
  styleUrls: ['./color-presenter.component.css']
})
export class ColorPresenterComponent implements OnInit {
//data

  constructor(private service:GameServiceService) { }
color : Observable<num>;
  ngOnInit(): void {
    this.color=this.service
  }

}
