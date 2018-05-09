import { Component, OnInit } from '@angular/core';
import {DataTablePagerComponent} from '@swimlane/ngx-datatable/release/components/footer/pager.component';

@Component({
  selector: 'app-table-pager',
  templateUrl: './table-pager.component.html',
  styleUrls: ['./table-pager.component.scss']
})
export class TablePagerComponent extends DataTablePagerComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
