import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartConfig,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import ChartLayout from "./ChartLayout";

export const description = "A stacked area chart";

const chartConfig = {
  feelsLike: {
    label: "Feels Like",
    color: "orange",
  },
  heatIndex: {
    label: "Heat Index",
    color: "green",
  },
} satisfies ChartConfig;

// @ts-ignore
export function DoubleLine({ chartData, ...props }) {
  return (
    // @ts-ignore
    <ChartLayout config={chartConfig} {...props}>
      <AreaChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="time"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="dot" />}
        />
        <Area
          dataKey="heatIndex"
          type="natural"
          fill="green"
          fillOpacity={0.4}
          stroke="green"
          stackId="a"
        />
        <Area
          dataKey="feelsLike"
          type="natural"
          fill="orange"
          fillOpacity={0.4}
          stroke="orange"
          stackId="a"
        />
      </AreaChart>
    </ChartLayout>
  );
}
