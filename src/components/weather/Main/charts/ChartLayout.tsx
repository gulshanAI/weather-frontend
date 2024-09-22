import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";

export const description = "A linear area chart";

// @ts-ignore
const SetConfig = ({ config, dataKey, color, children }) => {
  if (!config)
    return (
      <ChartContainer
        config={{
          [dataKey]: {
            label: dataKey,
            color: color,
          },
        }}
        className="h-28 md:h-48 w-full"
      >
        {children}
      </ChartContainer>
    );
  return (
    <ChartContainer config={config} className="h-28 md:h-48 w-full">
      {children}
    </ChartContainer>
  );
};
// @ts-ignore
export default function ChartLayout({ children, config = null, ...props }) {
  const { dataKey, title, subTitle, color } = props;
  return (
    <Card>
      <CardHeader className="p-3 md:p-5">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subTitle}</CardDescription>
      </CardHeader>
      <CardContent className="p-3 md:p-5">
        <SetConfig config={config} dataKey={dataKey} color={color}>
          {children}
        </SetConfig>
      </CardContent>
    </Card>
  );
}
