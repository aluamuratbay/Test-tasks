import { useState } from "react";
import { ICurrencyData, useAxios } from "../hooks/useAxios";
import { nanoid } from "nanoid";

export function Rates() {
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const data: ICurrencyData = useAxios();

  return (
    <div className="rates">
      <span className="converterDescr ratesDescr">Base currency:</span>
      <select
        className="converterSelect"
        value={baseCurrency}
        onChange={(e) => setBaseCurrency(e.target.value)}
      >
        { Object.keys(data.rates).map(value => 
          <option key={nanoid()} value={value} >{value}</option>  
        )}
      </select>

      <ul className="ratesList">
        { Object.keys(data.rates).map(currency => 
          <li className="ratesItem" key={nanoid()}>
            1 {baseCurrency} = {(data.rates[currency] / data.rates[baseCurrency]).toFixed(2)} {currency}
          </li>  
        )}
      </ul>
    </div>
  );
}