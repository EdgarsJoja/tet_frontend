import { Currency, ExchangeRate } from './currency';

export class CurrencyResponse {
  currency: Currency;
  exchange_rates: [ExchangeRate];
}
