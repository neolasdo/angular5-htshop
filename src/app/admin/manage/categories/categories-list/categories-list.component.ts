import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {ApiService} from '../../../../shared';

@Component({
	selector: 'app-categories-list',
	templateUrl: './categories-list.component.html',
	styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {
    loading = false;
	categories: Array<any>;
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
        {name: 'name', label: 'Tên danh mục'},
        {name: 'slug', label: 'Đường dẫn tĩnh'},
        {name: 'createdAt', label: 'Ngày tạo'}
    ];
	
    constructor(private router: Router,
                private toastr: ToastrService,
                private apiService: ApiService) {
    }


	ngOnInit() {
        this.getList();
	}

    getList() {
        this.loading = true;
        this.apiService.get('/categories', {'limit' : this.limit, 'keyword': this.keyword, 'page': this.page})
        .subscribe(
            (res) => {
                this.categories = res.data.map((cat) => {
                     cat.createdAt = new Date(cat.createdAt).toISOString().split("T")[0];
                     return cat;
                });
                this.meta = res.meta;
                this.loading = false;
            },
            (err) => {this.loading = false;console.log(err)},
        )
    }
    add(e) {
        this.router.navigate(['admin/categories/add']);
    }

    edit(e) {
        this.router.navigate(['admin/categories/edit', e._id]);
    }

    delete(e) {
        if (window.confirm('Bạn có chắc muốn xóa danh mục này?')) {
                this.loading = true;
                this.apiService.delete(`/category/${e._id}`)
                .subscribe(
                    (res) => {
                        this.loading = false;
                        this.toastr.success('Xóa danh mục thành công');
                        this.getList()
                    },
                    (err) => {console.log(err); this.loading = false;},
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
        this.getList();
    }
    filterChange(e) {
        this.limit = e.perPage;
        this.keyword = e.text;
        this.page = 1;
        this.getList();
    }
}
