import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';
import { robotsReducer } from '../reducers/robots-reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';

import { AppComponent } from './app.component';
import { RobotCardComponent } from './robot-card.component';
import { RobotDetailsComponent } from './robot-details.component';
import { RobotsService } from '../services/robots.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.provideStore({ robots: robotsReducer }),
    StoreDevtoolsModule.instrumentStore({
      monitor: useLogMonitor({
        visible: false,
        position: 'bottom'
      })
    }),
    StoreLogMonitorModule
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
