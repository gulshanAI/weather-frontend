import { Card } from "@/components/ui/card";

const DayCard = ({ item }) => {
  return (
    <Card className="flex flex-col items-center justify-center p-2 w-44 rounded-lg">
      <img src={item.icon} />
      <div className="font-bold text-lg">{item.temperature} °C</div>
      <div className="mt-2 text-gray-600">{item.time}</div>
    </Card>
  );
};

const DailyCard = ({ dailyReport }) => {
  return (
    <div className="flex overflow-auto w-full">
      <div className="flex space-x-4">
        {dailyReport
          .slice()
          .reverse()
          .map((item, index) => (
            <DayCard key={index} item={item} />
          ))}
      </div>
    </div>
  );
};

export default DailyCard;
