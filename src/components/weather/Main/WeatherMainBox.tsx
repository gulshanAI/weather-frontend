import CityWeather, { WeatherCard } from "./CityWeather";

export default function WeatherMainBox({
  weather,
}: {
  weather: {
    location: string;
    current: {
      temp_c: number;
      condition: string;
    };
  };
}) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <CityWeather
        // @ts-ignore
        location={weather.location}
        temp={weather.current.temp_c}
        // @ts-ignore
        condition={weather.current.condition}
      />
      {/* @ts-ignore */}
      <WeatherCard weather={weather.current} />
    </div>
  );
}
