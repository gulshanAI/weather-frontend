import WeatherMainBox from "./WeatherMainBox";
import useFetch from "@/hooks/useFetchFilter";
import CityFull from "./CityFull";
import { AlertPop } from "../AlertPop";
import { ThreeCardSkeleton } from "../SkeletonCard";
import ChartData from "./ChartData";

const MainIndex = ({ cityName }) => {
  const { data, loading, error } = useFetch("weather", cityName);
  if (loading) return <ThreeCardSkeleton />;
  if (error)
    return (
      <AlertPop
        title="Invalid City"
        description="City which you are tyring to search is not found"
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
