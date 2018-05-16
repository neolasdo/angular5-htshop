import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../../../../shared';



@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

    rows = [];
    columns = [
        {name: 'name', label: 'Tên sản phẩm'},
        {name: 'price', label: 'Giá',  width: 20},
        {name: 'brand', label: 'Thương hiệu'},
        {name: 'inStock', label: 'Số lượng', width: 20},
    ];

    constructor(private router: Router, private apiService: ApiService) {
    }

    ngOnInit() {
        let products;
        this.apiService.get('/products')
        .subscribe(
            (res) => {products = res.data}, 
            (err) => {console.log(err)}, 
        )
        this.fetch((data) => {
            this.rows = data;
        });

        console.log(products);
    }

    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/products.json`);

        req.onload = () => {
            cb(JSON.parse(req.response));
        };

        req.send();
    }

    add(e) {
        this.router.navigate(['admin/products/add']);
    }

    edit(e) {
        this.router.navigate(['admin/products/edit', e.id]);
    }

    delete(e) {
        if (window.confirm('Bạn có chắc muốn xóa sản phẩm này?')) {

        }
    }

    removeAll(e) {
        console.log(e)
    }

    changeStatus(e) {
        console.log(e)
    }
}
