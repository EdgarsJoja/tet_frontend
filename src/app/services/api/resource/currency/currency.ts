export class Currency {
  id: number;
  code: string;
}

export class ExchangeRate {
  currency_id: number;
  date: string;
  rate: number;
}
