import { Card, CardContent } from "@/components/ui/card";
import { IconValue2 } from "../IconValue";
import {
  AudioWaveform,
  Cloud,
  CloudCog,
  Compass,
  Droplet,
  Eye,
  Fan,
  Gauge,
  Heater,
  SunSnow,
  Thermometer,
  ThermometerSnowflake,
  Wind,
} from "lucide-react";

// @ts-ignore
const CityFull = ({ weather }) => {
  return (
    <Card>
      <CardContent className="p-4 grid md:grid-cols-2 gap-y-2 md:gap-y-4 gap-x-10">
        <IconValue2
          Icon={Thermometer}
          value={weather.temp_c}
          unit="°C"
          title="Temp"
        />
        <IconValue2
          Icon={Wind}
          value={weather.wind_kph}
          unit="km/h"
          title="Wind"
        />
        <IconValue2
          Icon={Compass}
          value={weather.wind_degree}
          unit="km/h"
          title="Wind Degree"
        />
        <IconValue2 Icon={Compass} value={weather.wind_dir} title="Direction" />
        <IconValue2
          Icon={Gauge}
          value={weather.pressure_in}
          title="Pressure"
          unit="inHg"
        />
        <IconValue2
          Icon={CloudCog}
          value={weather.precip_in}
          title="Precipitation"
          unit="in"
        />
        <IconValue2
          Icon={Droplet}
          value={weather.humidity}
          title="Humidity"
          unit="%"
        />
        <IconValue2 Icon={Cloud} value={weather.cloud} title="Cloud" unit="%" />
        <IconValue2
          Icon={SunSnow}
          value={weather.feelslike_c}
          title="Feels Like"
          unit="°C"
        />
        <IconValue2
          Icon={Fan}
          value={weather.windchill_c}
          title="Wind Chill"
          unit="°C"
        />
        <IconValue2
          Icon={Heater}
          value={weather.heatindex_c}
          title="Heat Index"
          unit="°C"
        />
        <IconValue2
          Icon={ThermometerSnowflake}
          value={weather.dewpoint_c}
          title="Dew Point"
          unit="°C"
        />
        <IconValue2
          Icon={Eye}
          value={weather.vis_km}
          title="Vision"
          unit="km"
        />
        <IconValue2 Icon={AudioWaveform} value={weather.uv} title="U/V" />
        <IconValue2
          Icon={Wind}
          value={weather.gust_kph}
          unit="km/h"
          title="Guest"
        />
      </CardContent>
    </Card>
  );
};

export default CityFull;
