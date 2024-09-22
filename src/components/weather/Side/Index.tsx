import { Card } from "@/components/ui/card";
import useFetch from "@/hooks/useFetchFilter";
import { Compass, Droplet, Loader, Wind } from "lucide-react";
import { IconValue } from "../IconValue";
import { useState } from "react";

const CityWeather = ({ city, changeCity }: CityWeatherProps) => {
  return (
    <Card
      className="w-full p-6 grid gap-6 hover:bg-gray-200 cursor-pointer transition-all duration-300 ease-in-out"
      onClick={() => {
        changeCity(city.name);
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-12">
            <img src={city.lastWeatherInfo.icon} alt="" />
          </div>
          <div>
            <h3 className="text-base font-semibold">{city.name}</h3>
            <p className="text-muted-foreground">{city.country}</p>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold text-right">
            {city.lastWeatherInfo.temperature}°
          </span>
          <span className="text-xs text-right">
            {city.lastWeatherInfo.condition}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <IconValue
          Icon={Wind}
          value={`${city.lastWeatherInfo.windSpeed} km/h`}
        />
        <IconValue Icon={Droplet} value={`${city.lastWeatherInfo.humidity}%`} />
        <IconValue Icon={Compass} value={city.lastWeatherInfo.windDir} />
      </div>
    </Card>
  );
};

const Index = ({ changeCity }: SideIndexProps) => {
  const [filter] = useState({});
  const { data, loading } = useFetch<
    {
      name: string;
      lastWeatherInfo: {
        icon: string;
        temperature: number;
        condition: string;
        windSpeed: number;
        humidity: number;
        windDir: string;
      };
      country: string;
    }[]
  >("city", filter);
  return (
    <section className="mb-8 p-2">
      <h2 className="text-xl font-bold mb-4 border-b pb-2">Top Cities</h2>
      {loading ? (
        <div className="flex items-center justify-center px-4 py-12">
          <Loader className="animate-spin text-center" />
        </div>
      ) : (
        <div className="flex flex-col gap-y-2">
          {data?.map((city, index) => (
            <CityWeather key={index} city={city} changeCity={changeCity} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Index;
