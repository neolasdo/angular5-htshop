import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

    rows = [];
    columns = [
        {name: 'name', label: 'Tên khách hàng'},
        {name: 'gender', label: 'Giới tính'},
        {name: 'company', label: 'Công ty'},
    ];

    constructor() {
    }

    ngOnInit() {
        this.fetch((data) => {
            this.rows = data;
        });
    }

    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/company.json`);

        req.onload = () => {
            cb(JSON.parse(req.response));
        };

        req.send();
    }

    add(e) {
        console.log(e)
    }

    edit(e) {
        console.log(e)
    }

    removeAll(e) {
        console.log(e)
    }

    changeStatus(e) {
        console.log(e)
    }
}
