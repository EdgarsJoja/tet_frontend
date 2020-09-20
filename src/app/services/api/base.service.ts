import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { UrlBuilderService } from '../utils/url-builder.service';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService {
  /**
   * Constructor
   *
   * @param http
   * @param urlBuilder
   * @protected
   */
  protected constructor(private http: HttpClient, private urlBuilder: UrlBuilderService) { }

  /**
   * @protected
   */
  protected abstract getApiResource(): string;

  /**
   * @protected
   */
  protected abstract getApiParams();

  /**
   * @protected
   */
  protected abstract getUrlArgs();

  /**
   * Get backend API url for specified resource
   *
   * @todo: Move functionality to separate url builder service
   */
  protected getApiUrl(): string {
    const host = environment.api.host;
    const apiPath = environment.api.resources[this.getApiResource()];
    const args = this.getUrlArgs();

    return this.urlBuilder.buildUrl(host, apiPath, args);
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
