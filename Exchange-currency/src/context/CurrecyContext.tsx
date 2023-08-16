import { Dispatch, SetStateAction, useState } from "react";
import { createContext } from "react";

interface ICurrencyContext {
  fromCurrency: string;
  setFromCurrency: Dispatch<SetStateAction<string>>;
  toCurrency: string;
  setToCurrency: Dispatch<SetStateAction<string>>;
  amount: string;
  setAmount: Dispatch<SetStateAction<string>>;
}

export const CurrecyContext = createContext<ICurrencyContext>({
  fromCurrency: "",
  setFromCurrency: () => {},
  toCurrency: "",
  setToCurrency: () => {},
  amount: "",
  setAmount: () => {},
});

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("KZT");
  const [amount, setAmount] = useState("");

  const value = {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    amount,
    setAmount,
  }

  return(
    <CurrecyContext.Provider value={value}>
      { children }
    </CurrecyContext.Provider>
  )
}