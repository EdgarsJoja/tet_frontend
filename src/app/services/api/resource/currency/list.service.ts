import { Injectable } from '@angular/core';
import { BaseService } from '../../base.service';
import { Response } from './response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService extends BaseService {
  /**
   * Page param
   *
   * @protected
   */
  protected page = 1;

  /**
   * Get params
   *
   * @protected
   */
  protected getApiParams() {
    return {
      page: this.page
    }
  }

  /**
   * Get API path resource string
   *
   * @protected
   */
  protected getApiResource(): string {
    return 'currency_list';
  }

  /**
   * Typehint response type
   */
  getData(): Observable<Response> {
    return super.getData();
  }

  /**
   * Set page
   *
   * @param page
   */
  public setPage(page: number) {
    this.page = page;
  }
}
