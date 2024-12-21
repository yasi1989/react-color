import { useState, useEffect } from "react";
import fetchColorData from "../api/fetchColorData";
import { Pallet } from "../types/types";

const useColorData = () => {
  const [fetchData, setFetchData] = useState<Pallet | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const data = await fetchColorData();
        setFetchData(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDataAsync();
  }, []);

  return { fetchData, loading, error };
};

export default useColorData;
