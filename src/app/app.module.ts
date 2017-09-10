import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {JsonpModule} from "@angular/http";
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {GetWeatherService} from './getweather.service'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JsonpModule,
    HttpModule 
  ],
  providers: [GetWeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
