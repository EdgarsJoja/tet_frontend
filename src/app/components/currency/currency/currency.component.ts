import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../../services/api/resource/currency/currency.service';
import { ActivatedRoute } from '@angular/router';
import { Currency } from '../../../services/api/resource/currency/currency';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {

  /**
   * Currency object
   */
  public currency = new Currency();

  /**
   * Exchange rates array
   */
  public exchangeRates = [];

  /**
   * Constructor
   *
   * @param currencyService
   * @param route
   */
  constructor(private currencyService: CurrencyService, private route: ActivatedRoute) { }

  /**
   * On component ready
   */
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.currencyService.setCurrencyId(id);
      this.currencyService.getData().subscribe(data => {
        this.currency = data.currency;
        this.exchangeRates = data.exchange_rates;
      });
    }
  }

}
