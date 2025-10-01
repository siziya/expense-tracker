import React from "react";
import { exchangeRates } from "../utils/exchangeRates";

interface Props {
  value: string;
  onChange: (val: string) => void;
}

export const CurrencySelector: React.FC<Props> = ({ value, onChange }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border p-1 rounded"
    >
      {Object.keys(exchangeRates).map((cur) => (
        <option key={cur} value={cur}>
          {cur}
        </option>
      ))}
    </select>
  );
};