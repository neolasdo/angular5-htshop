import {Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductModel} from '../product.model';
import {ApiService} from '../../../../shared/index';
import {ToastrService} from 'ngx-toastr';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';




@Component({
    selector: 'app-products-form',
    templateUrl: './products-form.component.html',
    styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit {
    @ViewChild('f') form: any;
    method: String = 'POST';
    product: ProductModel;
    categories: Array<any>;
    bsModalRef: BsModalRef;
    public loading = false;

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
                private toastr: ToastrService,
                private modalService: BsModalService) {
    }

    ngOnInit() {
        this.loading = true;
        let id = this.activatedRoute.snapshot.paramMap.get('id');
        if (!id) {
            this.product = new ProductModel();
        } else {
            this.method = 'PUT';
            this.apiService.get(`/product/`+id)
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

         this.apiService.get('/categories')
        .subscribe(
            (res) => {
                this.loading = false;
                this.categories = res.data
            },
            (err) => {console.log(err);this.loading = false;},
        )
    }

    addAttributes() {
        this.product.attributes.push({ });
    }
    openModal(template: TemplateRef<any>) {
        this.bsModalRef = this.modalService.show(template);
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
    onChangeCategorySelect(event) {
        let value = event.target.value;

        this.product.category = value;
    }

    onSubmit() {
        this.loading = true;
        if (this.method === 'POST') {
            this.apiService.post('/products', {product: this.product})
                .subscribe(
                    (res) => {
                        this.loading = false;
                        this.toastr.success('Tạo sản phẩm thành công');
                        setTimeout(() => {
                            this.router.navigate(['/admin/products/list']);
                        }, 1000)
                    },
                    (err) => {
                        this.loading = false;
                        this.toastr.warning(err);
                    },
                )
        };
        if (this.method === 'PUT') {
            this.apiService.put(`/product/${this.product._id}`, {product: this.product})
                .subscribe(
                    (res) => {
                        this.loading = false;
                        this.toastr.success('Đã cập nhật sản phẩm');
                        setTimeout(() => {
                            this.router.navigate(['/admin/products/list']);
                        }, 1000)
                    },
                    (err) => {
                        this.loading = false;
                        this.toastr.warning(err);
                    },
                )
        };
    }

}
