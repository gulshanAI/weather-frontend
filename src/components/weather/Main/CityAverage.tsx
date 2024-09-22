import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IconValue2 } from "../IconValue";
import {
  AudioWaveform,
  Cloud,
  CloudCog,
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

const CityAverage = ({ average }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Average Report</CardTitle>
        <CardDescription>
          Average Weather Report for last 24 hours
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 grid md:grid-cols-2 gap-y-2 md:gap-y-4 gap-x-10">
        <IconValue2
          Icon={Thermometer}
          value={`${average.temperature} °C`}
          title="Temp"
        />
        <IconValue2
          Icon={Wind}
          value={`${average.windSpeed} km/h`}
          title="Wind"
        />
        <IconValue2
          Icon={Gauge}
          value={`${average.pressure} inHg`}
          title="Pressure"
        />
        <IconValue2
          Icon={CloudCog}
          value={`${average.precipitation} in`}
          title="Precipitation"
        />
        <IconValue2
          Icon={Droplet}
          value={`${average.humidity}%`}
          title="Humidity"
        />
        <IconValue2 Icon={Cloud} value={`${average.cloud}%`} title="Cloud" />
        <IconValue2
          Icon={SunSnow}
          value={`${average.feelsLike} °C`}
          title="Feels Like"
        />
        <IconValue2
          Icon={Fan}
          value={`${average.windChill} °C`}
          title="Wind Chill"
        />
        <IconValue2
          Icon={Heater}
          value={`${average.heatIndex} °C`}
          title="Heat Index"
        />
        <IconValue2
          Icon={ThermometerSnowflake}
          value={`${average.dewPoint} °C`}
          title="Dew Point"
        />
        <IconValue2
          Icon={Eye}
          value={`${average.visibility} km`}
          title="Vision"
        />
        <IconValue2 Icon={AudioWaveform} value={`${average.uv}`} title="U/V" />
      </CardContent>
    </Card>
  );
};

export default CityAverage;
