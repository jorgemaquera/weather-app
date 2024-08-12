export interface Forecast {
  dt: number;
  timestamp: Date;
  icon: string;
  weather: string;
  temp: number;
  tempMin: number;
  tempMax: number;
  visibility: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
}
