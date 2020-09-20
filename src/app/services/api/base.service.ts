import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService {
  /**
   * Constructor
   *
   * @param http
   * @protected
   */
  protected constructor(private http: HttpClient) { }

  /**
   * @protected
   */
  protected abstract getApiResource(): string;

  /**
   * @protected
   */
  protected abstract getApiParams();

  /**
   * Get backend API url for specified resource
   *
   * @todo: Move functionality to separate url builder service
   */
  protected getApiUrl(): string {
    const host = environment.api.host;
    const apiPath = environment.api.resources[this.getApiResource()];

    return `${host}/${apiPath}`;
  }

  /**
   * Make API call and return data
   */
  public getData(): Observable<any> {
    return this.http.get(this.getApiUrl(), {
      params: this.getApiParams()
    });
  }
}
