import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { interval } from 'rxjs';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.scss']
})
export class ShowDataComponent implements OnInit {
  fromCurrency;
  toCurrency;
  exchangeRate;
  apiData;
  value:number;  
  
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apicall();
    /* APICALL */
    const secondsCounter = interval(60000);
    secondsCounter.subscribe(n => this.apicall());
  }

  apicall(){
    var _this = this;

      this.apiService.getApiData().subscribe((data)=>{
        console.log(data["Realtime Currency Exchange Rate"]);
        this.apiData = data["Realtime Currency Exchange Rate"];
        this.fromCurrency = data["Realtime Currency Exchange Rate"]["2. From_Currency Name"];
        this.toCurrency = data["Realtime Currency Exchange Rate"]["3. To_Currency Code"];
        this.exchangeRate = data["Realtime Currency Exchange Rate"]["5. Exchange Rate"];

        const progCounter = interval(600);
        this.value = 0;
        
        progCounter.subscribe(function(){
          // increase value with 1 every second
          _this.progressbar(); // restart the progressbar
        });
       
        
        
      });  
  }

  progressbar(){
    // value of progressbar 0. 
    if(this.value < 100){
      this.value += 1,666666666666667;
    }
  }

}
