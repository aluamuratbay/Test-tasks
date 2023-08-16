import { useContext, useEffect, useState } from "react";
import { ICurrencyData, useAxios } from "../hooks/useAxios";
import { InputAmount } from "./InputAmount"
import { SelectCountry } from "./SelectCountry"
import { SwitchCurrency } from "./SwitchCurrency"
import { CurrecyContext } from "../context/CurrecyContext";

export function Converter() {
  const data: ICurrencyData = useAxios();
  const [resultCurrency, setResultCurrency] = useState(0);
  const {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    amount,
    setAmount
  } = useContext(CurrecyContext);

  useEffect(() => {
    if(amount) {
      const result = (Number(amount) * (data.rates[toCurrency] / data.rates[fromCurrency])).toFixed(2);
      setResultCurrency(Number(result));
    }
  }, [fromCurrency, toCurrency, data.rates, amount])
  
  return (
    <div className="converter">
      <h2 className="converterDescr">Enter the amount:</h2>
      <div className="converterWrap">
        <InputAmount amount={amount} setAmount={setAmount} />
        <SelectCountry selectedCurrency={fromCurrency} setSelectedCurrency={setFromCurrency}/>
        <SwitchCurrency 
          fromCurrency={fromCurrency} 
          setFromCurrency={setFromCurrency}
          toCurrency={toCurrency}
          setToCurrency={setToCurrency}
        />
        <SelectCountry selectedCurrency={toCurrency} setSelectedCurrency={setToCurrency}/>
      </div>

      {amount ? (
        <div className="converterAmount">
          {amount} {fromCurrency} = <div className="converterResult">{resultCurrency} {toCurrency}</div>
        </div>
      ) : ""}
    </div>
  )
}