export class Response {
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
  currency: {
    id: number,
    code: string
  };

  exchange_rate: {
    date: string,
    rate: number
  }
}
