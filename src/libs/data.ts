import { env } from "@/env";
import { Forecast } from "@/intefaces/forecast";

export async function getForecast(): Promise<Forecast[]> {
  const url =
    "https://api.openweathermap.org/data/2.5/forecast?q=London,uk&APPID=" +
    env.WEATHER_API_KEY +
    "&units=metric";
  const res = await fetch(url);
  const data = await res.json();
  return data.list.map((item: any) => ({
    dt: item.dt,
    timestamp: new Date(item.dt * 1000),
    icon: item.weather[0].icon,
    weather: item.weather[0].main,
    feelsLike: item.main.feels_like,
    temp: item.main.temp,
    tempMin: item.main.temp_min,
    tempMax: item.main.temp_max,
    visibility: item.visibility,
    humidity: item.main.humidity,
    windSpeed: item.wind.speed,
  }));
}
