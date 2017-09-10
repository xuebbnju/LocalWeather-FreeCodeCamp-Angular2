import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Jsonp, URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
 declare var $:any;

@Injectable()
export class GetWeatherService {
 
   private api = "http://v.juhe.cn/weather/ip?format=2&key=";
   private APPKey = "78641112b005316c4cd7ee211d89267d&ip=";
   private cb = "&callback=?";
   private ipUrl="http://ipinfo.io/json";
	private times;
	constructor(private jsonp:Jsonp,private http:Http) { this.times=0; }
	
 getIP() {
 
     var params = new URLSearchParams();
     params.set('callback', `__ng_jsonp__.__req${this.times}.finished`);
       this.times=this.times+1;
      return this.jsonp.get(this.ipUrl, {search: params})
            .map(res=> res.json())
     
      }
  getData(ip:string){
      var params = new URLSearchParams();
    params.set('callback', 'JSONP_CALLBACK');
    return this.jsonp.get(this.api+this.APPKey+ip,{search: params})
            .map(res=> res.json())

  }
 
 
}