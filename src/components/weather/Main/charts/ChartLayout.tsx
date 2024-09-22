import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";

export const description = "A linear area chart";

export default function ChartLayout({ children, ...props }) {
  const { dataKey, title, subTitle, color } = props;
  return (
    <Card>
      <CardHeader className="p-3 md:p-5">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subTitle}</CardDescription>
      </CardHeader>
      <CardContent className="p-3 md:p-5">
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
      </CardContent>
    </Card>
  );
}
