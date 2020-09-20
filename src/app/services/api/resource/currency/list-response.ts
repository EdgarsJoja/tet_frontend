import { Currency, ExchangeRate } from './currency';

export class ListResponse {
  items: [Item];
  page_info: PageInfo
}

export class PageInfo {
  current_page: number;
  page_size: number;
  total_items: number;
  total_pages: number;
}

class Item {
  currency: Currency;
  exchange_rate: ExchangeRate;
}
