import { useEffect, useState } from "react";
import axios from "axios";

//values from api calls are in string format although they look like json



export default function useCurrencyinfo(currency) {
    const [data , setData] = useState({})
  useEffect(() => {
    axios.get(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    ).then((res)=> res.json());
  }, []);
}