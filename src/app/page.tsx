import { getForecast } from "@/libs/data";
import { ForecastDashboard } from "./forecast-dashboard";

export default async function HomePage() {
  const items = await getForecast();

  return <ForecastDashboard items={items} />;
}
