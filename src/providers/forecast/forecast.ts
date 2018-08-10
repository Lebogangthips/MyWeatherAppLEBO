import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ForecastProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ForecastProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ForecastProvider Provider');
  }


  GetForecust(cityname){

    let apikey = 'http://api.openweathermap.org/data/2.5/forecast?q='+ cityname + ',' +'southafrica&units=metric&APPID=93fdd31e72b24b0f641af6d896e8507a' ;


    return new Promise ((resolve, reject) => {
      this.http.get(apikey).subscribe(data =>{
         resolve(data);
      })
    
    
   });



  }



}
