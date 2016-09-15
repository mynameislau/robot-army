import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RobotCardComponent } from './robot-card.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    RobotCardComponent
  ],
  bootstrap: [AppComponent],
  providers: []
})

export class AppModule { }