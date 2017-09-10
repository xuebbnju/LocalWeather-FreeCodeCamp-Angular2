import { Component } from '@angular/core';
import {GetWeatherService} from './getweather.service'
import { OnInit } from '@angular/core';
 declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	Data;
	items;
	ip;
	isActive=false;
	constructor(private getWeather:GetWeatherService){}
  ngOnInit(){
  	
    this.getWeather.getIP().subscribe(res=>{
         this.getWeather.getData(res.ip).subscribe(data=>{
                  this.Data = data.result;
                  this.items= data.result.future;
                
                   this.isActive=true;
                    console.log(this.items[1]["week"]);
         });

    });
  }
}
