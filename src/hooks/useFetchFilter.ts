import { axiosFireApi } from "@/services/api";
import { useState, useEffect } from "react";

interface FetchOptions {
  [key: string]: string | number | boolean | object;
}

interface UseFetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

const useFetch = <T>(
  url: string | [string, string],
  filters: FetchOptions = {},
  callBack?: (
    data: T,
    setData: React.Dispatch<React.SetStateAction<T | null>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void
): UseFetchState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axiosFireApi(url, "get", filters);
      if (response.success) {
        if (callBack) {
          // @ts-ignore
          callBack(response.data, setData, setLoading);
        } else {
          // @ts-ignore
          setData(response.data);
          setLoading(false);
        }
      } else {
        setError("Error fetching data");
        setLoading(false);
      }
    };

    fetchData();
  }, [filters]);

  return { data, loading, error };
};

export default useFetch;
