import { Card, CardContent } from "@/components/ui/card";
import { convertReadableDateTime } from "@/lib/helper";
import {
  CompassIcon,
  DropletIcon,
  Rainbow,
  Snowflake,
  Thermometer,
  WindIcon,
} from "lucide-react";
import { IconValue2 } from "../IconValue";

const CityWeather = ({ temp, condition, location }) => {
  return (
    <Card>
      <CardContent className="p-4 flex flex-col justify-between gap-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-12">
              <img src={condition.icon} alt="" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">{location.name}</h3>
              <p className="text-muted-foreground">{location.country}</p>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold">{temp}°C</span>
            <span className="text-xs text-center">{condition.text}</span>
          </div>
        </div>

        <div className="text-center pt-2 border-t">
          {convertReadableDateTime(location.localtime)}
        </div>
      </CardContent>
    </Card>
  );
};

export const WeatherCard = ({ weather }) => {
  return (
    <Card className="w-full">
      <CardContent className="grid md:grid-cols-2 gap-y-2 md:gap-y-4 gap-x-8 p-4">
        <IconValue2
          Icon={WindIcon}
          title="Wind"
          value={`${weather.wind_kph} km/h`}
        />
        <IconValue2
          Icon={CompassIcon}
          title="Directoin"
          value={`${weather.wind_dir}`}
        />
        <IconValue2 Icon={Rainbow} title="U/V" value={`${weather.uv}`} />
        <IconValue2
          Icon={DropletIcon}
          title="Humidity"
          value={`${weather.humidity}%`}
        />
        <IconValue2
          Icon={Thermometer}
          title="Feels Like"
          value={`${weather.feelslike_c} °C`}
        />
        <IconValue2
          Icon={Snowflake}
          title="Chill"
          value={`${weather.windchill_c} °C`}
        />
      </CardContent>
    </Card>
  );
};
export default CityWeather;
