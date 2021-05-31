import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ColorPresenterComponent } from './components/color-presenter/color-presenter.component';
import { RgbInputComponent } from './components/rgb-input/rgb-input.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorPresenterComponent,
    RgbInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
