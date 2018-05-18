import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../../../../shared';
import {ProductModel} from '../product.model';
import {ToastrService} from 'ngx-toastr';



@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

    products: Array<any>;
    columns = [
        {name: 'name', label: 'Tên sản phẩm'},
        {name: 'price', label: 'Giá (nghìn VND)',  width: 20},
        {name: 'brand', label: 'Thương hiệu'},
        {name: 'inStock', label: 'Số lượng', width: 20},
    ];

    constructor(private router: Router, private apiService: ApiService, private toastr: ToastrService) {
    }

    ngOnInit() {
        this.getlist();
    }
    getlist() {
        this.apiService.get('/products')
            .subscribe(
                (res) => {console.log(res); this.products = res.data},
                (err) => {console.log(err)},
            )
    }
    add(e) {
        this.router.navigate(['admin/products/add']);
    }

    edit(e) {
        this.router.navigate(['admin/products/edit', e._id]);
    }

    delete(e) {
        if (window.confirm('Bạn có chắc muốn xóa sản phẩm này?')) {
            this.apiService.delete(`/product/${e._id}`)
                .subscribe(
                    (res) => {
                        this.toastr.success('Tạo sản phẩm thành công');
                        this.getlist()
                    },
                    (err) => {console.log(err)},
                )
        }
    }

    removeAll(e) {
        console.log(e)
    }

    changeStatus(e) {
        console.log(e)
    }
}
