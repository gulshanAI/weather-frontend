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

// @ts-ignore
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
          value={average.temperature}
          title="Temp"
          unit="°C"
        />
        <IconValue2
          Icon={Wind}
          value={average.windSpeed}
          title="Wind"
          unit="km/h"
        />
        <IconValue2
          Icon={Gauge}
          value={average.pressure}
          title="Pressure"
          unit="inHg"
        />
        <IconValue2
          Icon={CloudCog}
          value={average.precipitation}
          title="Precipitation"
          unit="in"
        />
        <IconValue2
          Icon={Droplet}
          value={average.humidity}
          title="Humidity"
          unit="%"
        />
        <IconValue2 Icon={Cloud} value={average.cloud} title="Cloud" unit="%" />
        <IconValue2
          Icon={SunSnow}
          value={average.feelsLike}
          title="Feels Like"
          unit="°C"
        />
        <IconValue2
          Icon={Fan}
          value={average.windChill}
          title="Wind Chill"
          unit="°C"
        />
        <IconValue2
          Icon={Heater}
          value={average.heatIndex}
          title="Heat Index"
          unit="°C"
        />
        <IconValue2
          Icon={ThermometerSnowflake}
          value={average.dewPoint}
          title="Dew Point"
          unit="°C"
        />
        <IconValue2
          Icon={Eye}
          value={average.visibility}
          title="Vision"
          unit="km"
        />
        <IconValue2 Icon={AudioWaveform} value={average.uv} title="U/V" />
      </CardContent>
    </Card>
  );
};

export default CityAverage;
