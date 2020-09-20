import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlBuilderService {

  constructor() { }

  /**
   * Build URL from given data
   *
   * @param host
   * @param path
   * @param args
   */
  public buildUrl(host, path = '', args = {}): string {
    let url = `${host}/${path}`;

    // Replace args placeholders with actual values
    Object.keys(args).forEach(arg => {
      url = url.replace(`{${arg}`, args[arg].toString());
    });

    return url;
  }
}
