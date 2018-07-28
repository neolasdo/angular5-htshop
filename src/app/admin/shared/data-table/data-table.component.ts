import {Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild, ViewEncapsulation} from '@angular/core';
import {DatatableComponent as DTC} from '@swimlane/ngx-datatable';

@Component({
    selector: 'app-data-table',
    templateUrl: './data-table.component.html',
    styleUrls: ['./data-table.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class DataTableComponent implements OnInit, OnChanges {

    @Input() rows: Array<any> = [];
    @Input() columns: Array<any> = [];
    @Input() canEdit: Boolean = true;
    @Input() canAdd: Boolean = true;
    @Input() showStatus: Boolean = true;
    @Input() showFooter: Boolean = true;
    @Input() showFilter: Boolean = true;
    @Input() showCheckbox: Boolean = false;
    @Input() canRemoveAll: Boolean = false;
    @Input() meta: any = {
        limit: 10,
        page: 1,
        pages: 1,
        total: 0
    };;
    limit: Number = 10;
    sortBy: String = '';
    data: Array<any> = new Array <any> ();
    metadata: any = {
        limit: 10,
        page: 1,
        pages: 1,
        total: 0
    };
    temp = [];
    selected = [];
    @Output() editItem = new EventEmitter<any>();
    @Output() filterChange = new EventEmitter<any>();
    @Output() pageChange = new EventEmitter<any>();
    @Output() deleteItem = new EventEmitter<any>();
    @Output() addItem = new EventEmitter<any>();
    @Output() removeAllItem = new EventEmitter<any>();
    @Output() changeStatus = new EventEmitter<any>();
    @ViewChild(DTC) table: DTC;

    constructor() {
    }

    ngOnInit() {
        this.data = this.rows;
        this.metadata = this.meta;
    }

    ngOnChanges() {
        this.data = this.rows;
        this.metadata = this.meta;
    }

    onSelect({selected}) {
        this.selected.splice(0, this.selected.length);
        this.selected.push(...selected);
    }

    updateFilter(e) {
        this.filterChange.emit(e);
    }
    changePage(e) {
        this.pageChange.emit(e);
    }

    edit(item) {
        this.editItem.emit(item);
    }

    delete(item) {
        this.deleteItem.emit(item);
    }

    add(e) {
        this.addItem.emit('create');
    }

    removeAll(e) {
        this.removeAllItem.emit('remove');
    }

    status(row, e) {
        this.changeStatus.emit({
            row: row,
            status: e.target.value
        });
    }

    sort(column) {

    }
}
