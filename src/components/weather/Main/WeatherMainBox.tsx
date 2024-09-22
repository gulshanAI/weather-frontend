import CityWeather, { WeatherCard } from "./CityWeather";

export default function WeatherMainBox({ weather, changeCity }) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <CityWeather
        location={weather.location}
        temp={weather.current.temp_c}
        condition={weather.current.condition}
        changeCity={changeCity}
      />
      <WeatherCard weather={weather.current} />
    </div>
  );
}
