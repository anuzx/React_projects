import { useEffect, useState } from "react";
import axios from "axios";

//values from api calls are in string format although they look like json

type CurrencyRates = {
  [key: string]: number;
};

export default function useCurrencyinfo(currency:string):CurrencyRates {
  const [data, setData] = useState<CurrencyRates>({});

  async function getData():Promise<void> {
    const response = await axios.get(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`,
    );
    setData(response.data[currency])
  }
  useEffect(() => {
    if (currency) {
      getData();
    }
    
  }, [currency]);

  return data
}


