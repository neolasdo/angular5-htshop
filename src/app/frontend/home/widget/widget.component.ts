import {AfterViewChecked, Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-widget',
    templateUrl: './widget.component.html',
    styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit, AfterViewChecked {
    @Input() widgetType: any;

    constructor() {
    }

    ngOnInit() {
    }

    ngAfterViewChecked() {}
}
