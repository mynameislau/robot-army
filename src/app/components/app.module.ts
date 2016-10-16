import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RobotCardComponent } from './robot-card.component';
import { RobotDetailsComponent } from './robot-details.component';
import { RobotsService } from '../services/robots.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    RobotCardComponent,
    RobotDetailsComponent
  ],
  bootstrap: [AppComponent],
  providers: [RobotsService]
})

export class AppModule { }
