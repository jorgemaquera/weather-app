"use client";

import { Forecast } from "@/intefaces/forecast";
import { cn } from "@/libs/utils";
import Image from "next/image";
import { useState } from "react";

export function ForecastDashboard({ items }: { items: Forecast[] }) {
  const [selectedForecast, setSelectedForecast] = useState(items[0]);

  return (
    <div className="m-auto flex max-w-md flex-col gap-4 px-8 pt-16 md:max-w-xl lg:max-w-3xl">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl">London</h2>
        <span className="text-orange text-xs font-medium uppercase">
          England
        </span>
        <span className="text-6xl font-light">
          {selectedForecast?.temp.toFixed(0) + "º"}
        </span>
        <span className="text-sm">{selectedForecast?.weather}</span>
        <div className="text-sm">
          <span>Maximum: {selectedForecast?.tempMax.toFixed(0) + "º"}</span>{" "}
          <span>Minimum: {selectedForecast?.tempMin.toFixed(0) + "º"}</span>
        </div>
      </div>
      <div className="no-scrollbar flex items-center gap-4 overflow-auto rounded-lg bg-[#c7cac6] p-2">
        {items.map((forecast: Forecast) => (
          <div
            onClick={() => {
              setSelectedForecast(forecast);
            }}
            key={forecast.dt}
            className={cn(
              "flex min-w-16 cursor-pointer flex-col items-center hover:font-medium",
              forecast.dt === selectedForecast?.dt && "text-orange",
            )}
          >
            <span className="text-sm">
              {forecast.timestamp.toLocaleTimeString("en-GB", {
                timeZone: "Europe/London",
                hour: "numeric",
                hour12: true,
              })}
            </span>
            <Image
              width={40}
              height={40}
              alt="weather icon"
              src={`https://openweathermap.org/img/wn/${forecast.icon}@2x.png`}
            ></Image>{" "}
            <span className="text-sm">{forecast.temp.toFixed(0) + "º"}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-flow-row grid-cols-2 gap-4 lg:grid-cols-4">
        <div className="border-gray flex flex-col rounded-lg border p-4">
          <span className="text-orange text-xs font-medium">VISIBILITY</span>
          <span className="text-xl">
            {selectedForecast!.visibility / 1000 + " km"}
          </span>
        </div>
        <div className="border-gray flex flex-col rounded-lg border p-4">
          <span className="text-orange text-xs font-medium">FEELS LIKE</span>
          <span className="text-xl">
            {selectedForecast?.feelsLike.toFixed(0) + "º"}
          </span>
        </div>
        <div className="border-gray flex flex-col rounded-lg border p-4">
          <span className="text-orange text-xs font-medium">HUMEDITY</span>
          <span className="text-xl">{selectedForecast?.humidity + "%"}</span>
        </div>
        <div className="border-gray flex flex-col rounded-lg border p-4">
          <span className="text-orange text-xs font-medium">WIND</span>
          <span className="text-xl">
            {selectedForecast?.windSpeed.toPrecision(2) + "m/s"}
          </span>
        </div>
      </div>
    </div>
  );
}
