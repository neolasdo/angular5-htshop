import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductModel} from '../product.model';
import {ApiService} from '../../../../shared/index';
import {ToastrService} from 'ngx-toastr';


@Component({
    selector: 'app-products-form',
    templateUrl: './products-form.component.html',
    styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit {
    @ViewChild('f') form: any;
    method: String = 'POST';
    product: ProductModel;
    attributes: Array<any> = [
        {
            type: 'color',
            name: 'Màu sắc'
        },
        {
            type: 'size',
            name: 'Cỡ'
        },
        {
            type: 'quanlity',
            name: 'Chất lượng'
        }
    ];
    public editorOptions = {
        placeholder: 'Thêm mô tả sản phẩm'
    };

    constructor(private router: Router,
                private activatedRoute: ActivatedRoute,
                private apiService: ApiService,
                private toastr: ToastrService) {
    }

    ngOnInit() {
        let id = this.activatedRoute.snapshot.paramMap.get('id');
        if (!id) {
            this.product = new ProductModel();
        }
        else {
            this.method = 'PUT';
            this.apiService.get(`/product/5afc3ad6fee0331098cfe857`)
                .subscribe(
                    (res) => {
                        this.product = res.data;
                    },
                    (err) => {
                        console.log(err)
                    }    
                )
            this.product = new ProductModel();
        }
    }

    addAttributes() {
        this.product.attributes.push({ });
    }

    removeAttribute(i) {
        this.product.attributes.splice(i, 1);
    }
    canAddAtributes() {
        if (this.product.attributes && this.product.attributes.length) {
            this.product.attributes.forEach((item) => {
                if (item && !item.hasOwnProperty('value')) {
                    return false;
                }
            });
        }
        return true;
    }

    onSubmit() {
        console.log(this.product);
        if (this.method === 'POST') {
            this.apiService.post('/product', {product: this.product})
                .subscribe(
                    (res) => {
                        this.toastr.success('Tạo sản phẩm thành công');
                        setTimeout(() => {
                            this.router.navigate(['/admin/products/list']);
                        }, 1000)
                    },
                    (err) => {
                        console.log(err)
                    },
                )
        };
        if (this.method === 'PUT') {
            this.apiService.put(`/product/${this.product._id}`, {product: this.product})
                .subscribe(
                    (res) => {
                        this.toastr.success('Đã cập nhật sản phẩm');
                        setTimeout(() => {
                            this.router.navigate(['/admin/products/list']);
                        }, 1000)
                    },
                    (err) => {
                        console.log(err)
                    },
                )
        };
    }

}
