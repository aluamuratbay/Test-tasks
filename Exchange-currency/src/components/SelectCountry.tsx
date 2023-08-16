import { Dispatch, SetStateAction } from "react";
import { useAxios } from "../hooks/useAxios";
import { nanoid } from "nanoid";

interface ISelectCountry {
  selectedCurrency: string;
  setSelectedCurrency: Dispatch<SetStateAction<string>>;
}

export function SelectCountry({ selectedCurrency, setSelectedCurrency }: ISelectCountry) {
  const options = useAxios()?.rates;

  return (
    <select
      className="converterSelect"
      value={selectedCurrency}
      onChange={(e) => setSelectedCurrency(e.target.value)}
    >
      { Object.keys(options).map(value => 
        <option key={nanoid()} value={value} >{value}</option>  
      )}
    </select>
  );
}