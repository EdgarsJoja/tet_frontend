import { Injectable } from '@angular/core';
import { BaseService } from '../../base.service';
import { CurrencyResponse } from './currency-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService extends BaseService {

  /**
   * @protected
   */
  protected currencyId;

  /**
   * @protected
   */
  protected getApiParams() {
    return {}
  }

  /**
   * @protected
   */
  protected getApiResource(): string {
    return 'currency';
  }

  /**
   * Get API data
   */
  public getData(): Observable<CurrencyResponse> {
    return super.getData();
  }

  /**
   * Currency ID setter
   *
   * @param value
   */
  public setCurrencyId(value) {
    this.currencyId = value;
  }

  /**
   * @protected
   */
  protected getUrlArgs() {
    return {
      id: this.currencyId
    }
  }
}
