import useFetch from "@/hooks/useFetchFilter";
import { useState } from "react";
import CityAverage from "./CityAverage";
import ChartIndex from "./charts/ChartIndex";

const ChartData = ({ slug }: { slug: string }) => {
  const [filter] = useState({
    slug: slug,
  });
  const { data, loading, error } = useFetch("analytics", filter);
  if (loading || error || !data) return null;
  return (
    <div className="grid gap-y-4">
      {/* @ts-ignore */}
      <CityAverage average={data.average} />
      {/* @ts-ignore */}
      <ChartIndex report={data.report} />
    </div>
  );
};

export default ChartData;
