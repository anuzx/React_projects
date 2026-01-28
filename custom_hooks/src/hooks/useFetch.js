import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  async function getData() {
    setLoading(true);
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
    setLoading(false);
  }

  useEffect(() => {
    getData();
  }, [url]);
  
  return {
    data,
    loading,
  };
}
