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
    loading = false;
    products: Array<any>;
    limit: Number = 10;
    page: Number = 1;
    keyword: String= '';
    meta: any = {
        limit: 10,
        page: 1,
        pages: 1,
        total: 0
    };
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
        this.loading = true;
        this.apiService.get('/products', {'limit' : this.limit, 'keyword': this.keyword, 'page': this.page})
        .subscribe(
            (res) => {
                this.products = res.data; 
                this.meta = res.meta; 
                this.loading = false;},
            (err) => {console.log(err); this.loading = false},
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
            this.loading = true;
            this.apiService.delete(`/product/${e._id}`)
                .subscribe(
                    (res) => {
                        this.loading = false;
                        this.toastr.success('Xóa sản phẩm thành công');
                        this.getlist()
                    },
                    (err) => {console.log(err);this.loading = false;},
                )
        }
    }

    removeAll(e) {
        console.log(e)
    }

    changeStatus(e) {
        console.log(e)
    }
    changePage(e) {
        this.page = e.page;
        this.getlist();
    }
    filterChange(e) {
        this.limit = e.perPage;
        this.keyword = e.text;
        this.page = 1;
        this.getlist();
    }
}
