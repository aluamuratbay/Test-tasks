import { Dispatch, SetStateAction } from "react";

interface IInputAmount {
  amount: string;
  setAmount: Dispatch<SetStateAction<string>>;
}

export function InputAmount({ amount, setAmount }: IInputAmount) {
  return (
    <span className="converterInputWrap">
      <input 
        className="converterInput"
        type="number" 
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
         }}
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />
    </span>
  );
}