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
    @Input() showCheckbox: Boolean = true;
    @Input() canRemoveAll: Boolean = true;
    limit: Number = 10;
    data: Array<any> = this.rows;
    temp = [];
    selected = [];
    @Output() editItem = new EventEmitter<any>();
    @Output() addItem = new EventEmitter<any>();
    @Output() removeAllItem = new EventEmitter<any>();
    @Output() changeStatus = new EventEmitter<any>();
    @ViewChild(DTC) table: DTC;

    constructor() {
    }

    ngOnInit() {
    }

    ngOnChanges() {
        this.data = this.rows;
        this.temp = [...this.rows]
    }

    onSelect({selected}) {
        this.selected.splice(0, this.selected.length);
        this.selected.push(...selected);
    }

    updateFilter(e) {
        this.limit = e.perPage;
        const val = e.text.toLowerCase();

        // filter our data
        const temp = this.rows.filter(function (d) {
            return (!val || d.name.toLowerCase().indexOf(val) !== -1);
        });

        // update the rows
        this.data = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    }

    edit(item) {
        this.editItem.emit(item);
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

}
