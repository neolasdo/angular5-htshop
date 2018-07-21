import {Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryModel} from '../category.model';
import {ApiService} from '../../../../shared/index';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.scss']
})
export class CategoriesFormComponent implements OnInit {
	@ViewChild('f') form: any;
    method: String = 'POST';
    loading = false;
    category: CategoryModel;
   
    public editorOptions = {
        placeholder: 'Thêm mô tả sản phẩm'
    };

    constructor(private router: Router,
                private activatedRoute: ActivatedRoute,
                private apiService: ApiService,
                private toastr: ToastrService,) {
    }

    ngOnInit() {
        let id = this.activatedRoute.snapshot.paramMap.get('id');
        if (!id) {
            this.category = new CategoryModel();
        }
        else {
        	this.loading = true;
            this.method = 'PUT';
            this.apiService.get(`/category/`+id)
                .subscribe(
                    (res) => {
                    	this.loading = false;
                        this.category = res.data;
                    },
                    (err) => {
                    	this.loading = false;
                        console.log(err)
                    }    
                )
            this.category = new CategoryModel();
        }
    }

    cancer() {
    	this.router.navigate(['/admin/categories/list']);
    }
    onSubmit() {
        this.loading = true;
        if (this.method === 'POST') {
            this.apiService.post('/categories', {category: this.category})
                .subscribe(
                    (res) => {
                    	this.loading = false;
                        this.toastr.success('Tạo danh mục thành công');
                        setTimeout(() => {
                            this.router.navigate(['/admin/categories/list']);
                        }, 1000)
                    },
                    (err) => {
                    	this.loading = false;
                        console.log(err)
                    },
                )
        };
        if (this.method === 'PUT') {
            this.apiService.put(`/category/${this.category._id}`, {category: this.category})
                .subscribe(
                    (res) => {
                    	this.loading = false;
                        this.toastr.success('Đã cập nhật danh mục');
                        setTimeout(() => {
                            this.router.navigate(['/admin/categories/list']);
                        }, 1000)
                    },
                    (err) => {
                    	this.loading = false;
                        console.log(err)
                    },
                )
        };
    }

}
