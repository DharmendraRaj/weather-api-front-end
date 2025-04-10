import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html'
})
export class WeatherComponent {
  city: string = '';
  weather: any;

  constructor(private weatherService: WeatherService) {}

  fetchWeather() {
    this.weatherService.fetchWeather(this.city).subscribe(data => {
      this.weather = data;
    });
  }

}

