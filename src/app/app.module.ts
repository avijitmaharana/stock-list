import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MatProgressBarModule } from '@angular/material/progress-bar';


import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatProgressBarModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
