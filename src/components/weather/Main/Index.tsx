import WeatherMainBox from "./WeatherMainBox";
import useFetch from "@/hooks/useFetchFilter";
import CityFull from "./CityFull";
import { AlertPop } from "../AlertPop";
import { ThreeCardSkeleton } from "../SkeletonCard";
import ChartData from "./ChartData";

interface WeatherData {
  weather: {
    location: string;
    current: {
      temp_c: number;
      condition: string;
    };
  };
  citySlug: string;
}

const MainIndex = ({ cityName }: { cityName: { location: string } }) => {
  const { data, loading, error } = useFetch<WeatherData>("weather", cityName);
  if (loading) return <ThreeCardSkeleton />;
  if (error)
    return (
      <AlertPop
        title="Invalid City"
        description="City which you are tyring to search is not found"
      />
    );
  if (!data)
    return (
      <AlertPop
        title="No Data"
        description="Sorry we are unable to fetch data for this city"
      />
    );
  return (
    <>
      <div className="mt-8">
        <WeatherMainBox weather={data.weather} />
        <div className="my-3">
          <CityFull weather={data.weather.current} />
        </div>
      </div>
      {!loading && !error && (
        <div className="mt-8">
          <ChartData slug={data.citySlug} />
        </div>
      )}
    </>
  );
};

export default MainIndex;
