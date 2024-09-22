import { useCallback } from "react";
import TempChart, { BoxChart, LineChartBar } from "./TempChart";
import { convertTo12HourFormat } from "@/lib/helper";
import DailyCard from "./DailyCard";
import { DoubleLine } from "./DoubleLine";

// @ts-ignore
export default function ChartIndex({ report }) {
  const reportData = useCallback(() => {
    // @ts-ignore
    return report.map((item) => ({
      time: convertTo12HourFormat(item.lastUpdated),
      temperature: item["temperature"],
      humidity: item["humidity"],
      windSpeed: item["windSpeed"],
      windDir: item["windDir"],
      heatIndex: item["heatIndex"],
      feelsLike: item["feelsLike"],
      isExtreme: item["isExtreme"],
      pressure: item["pressure"],
      visibility: item["visibility"],
      condition: item["condition"],
      icon: item.icon,
    }));
  }, [report])();
  return (
    <>
      <DailyCard dailyReport={reportData} />
      <div className="flex flex-col gap-y-6">
        <LineChartBar
          chartData={reportData}
          dataKey={"temperature"}
          title="Temperature"
          subTitle="Temperature in Last 24 Hours"
          color="#2471a3"
        />
        <TempChart
          chartData={reportData}
          dataKey={"humidity"}
          title="Humidity"
          subTitle="Humidity in Last 24 Hours"
          color="#e74c3c"
        />
        <DoubleLine
          chartData={reportData}
          dataKey={"heatIndex"}
          title="Heat & Feels Like"
          subTitle="Heat Index & Feels Like compare in Last 24 Hours"
          color="#e74c3c"
        />
        <TempChart
          chartData={reportData}
          dataKey={"visibility"}
          title="Visibilty"
          subTitle="Visibility in Last 24 Hours"
          color="#85929e"
        />
        <BoxChart
          chartData={reportData}
          dataKey={"pressure"}
          title="Pressure"
          subTitle="Pressure in Last 24 Hours"
          color="#45b39d"
        />
      </div>
    </>
  );
}
