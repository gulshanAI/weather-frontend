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

const CityFull = ({ weather }) => {
  return (
    <Card>
      <CardContent className="p-4 grid md:grid-cols-2 gap-y-2 md:gap-y-4 gap-x-10">
        <IconValue2
          Icon={Thermometer}
          value={`${weather.temp_c} °C`}
          title="Temp"
        />
        <IconValue2
          Icon={Wind}
          value={`${weather.wind_kph} km/h`}
          title="Wind"
        />
        <IconValue2
          Icon={Compass}
          value={`${weather.wind_degree} km/h`}
          title="Wind Degree"
        />
        <IconValue2
          Icon={Compass}
          value={`${weather.wind_dir}`}
          title="Direction"
        />
        <IconValue2
          Icon={Gauge}
          value={`${weather.pressure_in} inHg`}
          title="Pressure"
        />
        <IconValue2
          Icon={CloudCog}
          value={`${weather.precip_in} in`}
          title="Precipitation"
        />
        <IconValue2
          Icon={Droplet}
          value={`${weather.humidity}%`}
          title="Humidity"
        />
        <IconValue2 Icon={Cloud} value={`${weather.cloud}%`} title="Cloud" />
        <IconValue2
          Icon={SunSnow}
          value={`${weather.feelslike_c} °C`}
          title="Feels Like"
        />
        <IconValue2
          Icon={Fan}
          value={`${weather.windchill_c} °C`}
          title="Wind Chill"
        />
        <IconValue2
          Icon={Heater}
          value={`${weather.heatindex_c} °C`}
          title="Heat Index"
        />
        <IconValue2
          Icon={ThermometerSnowflake}
          value={`${weather.dewpoint_c} °C`}
          title="Dew Point"
        />
        <IconValue2 Icon={Eye} value={`${weather.vis_km} km`} title="Vision" />
        <IconValue2 Icon={AudioWaveform} value={`${weather.uv}`} title="U/V" />
        <IconValue2
          Icon={Wind}
          value={`${weather.gust_kph} km/h`}
          title="Guest"
        />
      </CardContent>
    </Card>
  );
};

export default CityFull;
