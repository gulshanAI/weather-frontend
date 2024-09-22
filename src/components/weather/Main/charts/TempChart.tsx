import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  LineChart,
  Line,
} from "recharts";
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import ChartLayout from "./ChartLayout";

// @ts-ignore
export default function TempChart({ chartData, ...props }) {
  const { dataKey, color } = props;
  return (
    <ChartLayout {...props}>
      <AreaChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: -30,
          right: 0,
        }}
      >
        <CartesianGrid vertical={true} />
        <XAxis
          dataKey="time"
          tickLine={true}
          axisLine={true}
          tickMargin={12}
          tickFormatter={(value) => value}
        />

        <YAxis tickLine={false} axisLine={false} tickMargin={0} />
        <ChartTooltip
          cursor={true}
          content={<ChartTooltipContent indicator="dot" hideLabel />}
        />
        <Area
          dataKey={dataKey}
          type="linear"
          fill={color}
          fillOpacity={0.4}
          stroke={color}
        />
      </AreaChart>
    </ChartLayout>
  );
}

// @ts-ignore
export function LineChartBar({ chartData, ...props }) {
  const { dataKey, color } = props;
  return (
    <ChartLayout {...props}>
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: -30,
          right: 0,
        }}
      >
        <CartesianGrid vertical={true} />
        <XAxis
          dataKey="time"
          tickLine={true}
          axisLine={true}
          tickMargin={12}
          tickFormatter={(value) => value}
        />

        <YAxis tickLine={false} axisLine={false} tickMargin={8} />
        <ChartTooltip
          cursor={true}
          content={<ChartTooltipContent indicator="dot" hideLabel />}
        />
        <Line
          dataKey={dataKey}
          type="linear"
          strokeWidth={2}
          dot={true}
          fill={color}
          fillOpacity={0.4}
          stroke={color}
        />
      </LineChart>
    </ChartLayout>
  );
}

// @ts-ignore
export function BoxChart({ chartData, ...props }) {
  const { dataKey, color } = props;
  return (
    <ChartLayout {...props}>
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: -10,
          right: 0,
        }}
      >
        <CartesianGrid vertical={true} />
        <XAxis
          dataKey="time"
          tickLine={true}
          axisLine={true}
          tickMargin={12}
          tickFormatter={(value) => value}
        />

        <YAxis
          tickLine={false}
          axisLine={false}
          tickMargin={12}
          tickCount={12}
        />
        <ChartTooltip
          cursor={true}
          content={<ChartTooltipContent indicator="dot" hideLabel />}
        />
        <Line
          dataKey={dataKey}
          type="step"
          strokeWidth={2}
          dot={true}
          fill={color}
          fillOpacity={0.4}
          stroke={color}
        />
      </LineChart>
    </ChartLayout>
  );
}
