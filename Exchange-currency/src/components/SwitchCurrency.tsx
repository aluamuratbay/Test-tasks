import { Dispatch, SetStateAction } from "react";
import { ExchangeIcon } from "../icons/ExchangeIcon";

interface ISwitchCurrency {
  fromCurrency: string;
  setFromCurrency: Dispatch<SetStateAction<string>>;
  toCurrency: string;
  setToCurrency: Dispatch<SetStateAction<string>>;
}

export function SwitchCurrency({ fromCurrency, setFromCurrency, toCurrency, setToCurrency }: ISwitchCurrency) {
  function handleClick() {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  }

  return (
    <button className="converterButton" onClick={handleClick}>
      <ExchangeIcon />
    </button>
  );
}