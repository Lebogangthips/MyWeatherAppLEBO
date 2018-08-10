import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ForecastProvider } from '../../providers/forecast/forecast';



@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  eg ;
  p;
  searchQuery: string = '';
  items: string[];
  data:any;
  weather:any[];
  main;
  name;
  temp;
  icon;
  img ;
  weatherDAta;
  humidity;
  dt;

  main1;
  humidity1;

  city ;
 
  constructor(public navCtrl: NavController, public navParams: NavParams,  private provFore: ForecastProvider) {
    this.getWeather('Johannesburg');
  }

  getWeather(cityname){
    this.provFore.GetForecust(cityname)
    .then((data:any )=> {
      this.data = data;  
      console.log(data);
      this.weather = this.data.list;
      this.main = this.weather[0].main;
      this.weatherDAta = this.weather[0].weather;
      this.icon = this.weatherDAta[0].icon;
      this.humidity = this.main.humidity;
      this.name = data.city.name;
      this.p = this.weatherDAta[0].description;
      this.dt = this.weather[0].dt_txt.substr(0,10);


      this.main1 = this.weather[1].main;
      this.humidity1 = this.main1.humidity;

   
      


      

      console.log(   this.weather[0].clouds);

    //   this.eg =this.weather[0].id ;
    //   this.p =this.weather[0].description ;
    //   this.icon =this.weather2[0].icon ;
    //   this.main =this.weather2[0].humidity;
    //   this.name =this.weather2[0].name;
     this.temp =Math.round(this.main.temp) + "°c";


      
      if (this.icon === "01d") {
        this.img = '../../assets/imgs/sun.png';
        // alert('01')
        console.log(this.img + "2");

      } else if (this.icon === "10d") {
        this.img = '../../assets/imgs/rain.png';
        // alert('10')
        console.log(this.img + "2");

      } else if (this.icon === "02d") {
        this.img = '../../assets/imgs/clouds.png';
        // alert('10')
        console.log(this.img + "4");
      } else if (this.icon === "50d") {
        this.img = '../../assets//imgs/misty.png';
        // alert('10')
        console.log(this.img + "5");
      } else if (this.icon === "04d") {
        this.img = '../../assets//imgs//broken clouds.PNG';
        // alert('10')
        console.log(this.img + "3");
      } else if (this.icon === "09d") {
        this.img = '../../assets/imgs/09d.png';
        // alert('10')
        console.log(this.img + "3");
      }
    });
  }


  

  // initializeItems() {
  //   this.items =['Port Elizabeth','Pietermaritzburg','East London','Polokwane','Rustenburg','Welkom','Ladysmith','Potchefstroom','Richards Bay','Kimberley','Mahikeng','Klerksdorp','Paarl','Mthatha','Pinetown','Thohoyandou','Grahamstown','Borksburg',
  //   'Vereeniging','Sasolburg','Centurion','Upington','Oudtshoorn','Secunda','Uitenhage','Worcester','Krugersdorp','Benoni','Newcastle','Bellville','Khayelitsha','Graaff-Reinet','Ulundi','Tembisa','Bhisho','Johanneburg','Soweto'
  //   ];
    

  // }

  
  }
  // getItems(ev: any) {
  //   this.initializeItems();
  //   // set val to the value of the searchbar
  //   const val = ev.target.value;

  //   // if the value is an empty string don't filter the items
  //   if (val && val.trim() != '') {
  //     this.items = this.items.filter((item) => {
  //       return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
  //     })
  //   }
  // }

  // getCityWeather = function(cityname){
  //   this.provFore.getForecust(cityname)
  //   .then((data:any )=> {
  //     this.data = data;  
  //     this.weather = this.data.weather;
  //     console.log(this.data);

  //     this.eg =data.weather[0].id ;
  //     this.p =data.weather[0].description ;
  //     this.icon =data.weather[0].icon ;
  //     this.main =data.main.humidity;
  //     this.name =data.name;
  //     this.temp =data.main.temp;
  //   });
  // }



