import { checkAndRound } from "@/lib/helper";

interface IconValuProps {
  Icon: React.ComponentType;
  value: string;
  title?: string;
  unit?: string;
}

export const IconValue = ({ Icon, value }: IconValuProps) => {
  return (
    <div className="flex gap-x-1 items-center">
      <Icon />
      <span className="text-sm">{value}</span>
    </div>
  );
};

export const IconValue2 = ({
  Icon,
  value,
  title = "",
  unit = "",
}: IconValuProps) => {
  return (
    <div className="flex gap-x-1 items-center justify-between">
      <span className="flex items-center">
        <Icon />
        <span className="text-muted-foreground pl-1 mr-2 text-sm">{title}</span>
      </span>
      <span className="text-sm">
        {checkAndRound(value)} {unit}
      </span>
    </div>
  );
};
