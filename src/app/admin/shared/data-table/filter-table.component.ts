import {Component, EventEmitter, Output, OnInit, ViewEncapsulation, Input} from '@angular/core';

@Component({
    selector: 'app-filter-table',
    templateUrl: 'filter-table.component.html',
    styleUrls: ['filter-table.component.scss']
})

export class FilterTableComponent implements OnInit {
    filter: any = {};
    @Input() canAdd: Boolean = true;
    @Output() filterArray = new EventEmitter<any>();
    @Output() createItem = new EventEmitter<any>();
    constructor() {}
    ngOnInit() {
        this.filter = {
            'perPage' : 10,
            'text': ''
        };
    }
    setPerPage(num): void {
        this.filter.perPage = num;
        this.setFilter();
    }
    setFilter(): void {
        this.filterArray.emit(this.filter);
    }
    addItem(): void {
        this.createItem.emit('create');
    }
}