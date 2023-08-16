import axios from "axios";
import { useEffect, useState } from "react";

const URL = "https://openexchangerates.org/api/latest.json";

export interface ICurrencyData { 
  base: string; 
  rates: {
    [n: string]: number 
  };
}

export function useAxios() {
  const [data, setData] = useState<ICurrencyData>({
    base: "",
    rates: {}
  });

  useEffect(() => {
    axios(URL, { 
      params: {
        app_id: "938706c7bbee4a2daa08a81591d36954",
      }
    })
      .then(response => setData(response.data));
  }, []);

  return data;
}