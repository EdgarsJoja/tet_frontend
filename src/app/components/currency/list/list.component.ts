import { Component, OnInit } from '@angular/core';
import { ListService } from '../../../services/api/resource/currency/list.service';
import { PageInfo } from '../../../services/api/resource/currency/list-response';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  /**
   * Table data source
   */
  public tableData;

  /**
   * Page info data
   */
  public pageInfo = new PageInfo();

  /**
   * Current paginator page
   */
  public pageIndex = 0;

  /**
   * Constructor
   *
   * @param listService
   */
  constructor(private listService: ListService) {}

  ngOnInit(): void {
    this.updateTable();
  }

  /**
   * Update table & paginator data
   *
   * @protected
   */
  protected updateTable() {
    this.listService.getData().subscribe(data => {
      if (Array.isArray(data.items)) {
        // Format data into needed table structure
        this.tableData = data.items.map(item => {
          return {
            id: item.currency.id,
            code: item.currency.code,
            date: item.exchange_rate.date,
            rate: item.exchange_rate.rate,
          }
        });
      }

      this.pageInfo = data.page_info as PageInfo;
    });
  }

  /**
   * On paginator change get new page data
   *
   * @param event
   */
  public pageEvent(event) {
    // Add +1 as material paginator starts from 0
    this.listService.setPage(event.pageIndex + 1);
    this.updateTable();
  }
}
