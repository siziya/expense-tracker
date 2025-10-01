import { exchangeRates } from "./exchangeRates";

export function convert(amount: number, from: string, to: string) {
  const rateFrom = exchangeRates[from] || 1;
  const rateTo = exchangeRates[to] || 1;
  return (amount / rateFrom) * rateTo;
}
