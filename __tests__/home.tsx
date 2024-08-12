import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ForecastDashboard } from "@/app/forecast-dashboard";

describe("ForecastDashboard", () => {
  it("render weather", () => {
    const items = [
      {
        dt: 1723420800,
        timestamp: new Date(),
        icon: "03n",
        weather: "Clouds",
        temp: 19.94,
        tempMin: 19.94,
        tempMax: 20,
        visibility: 10000,
        feelsLike: 20.16,
        humidity: 83,
        windSpeed: 4.51,
      },
    ];

    render(<ForecastDashboard items={items} />);

    const weather = screen.getByText("Clouds");

    expect(weather).toBeInTheDocument();
  });
});
