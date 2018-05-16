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
            this.product = new ProductModel();
        }
    }

    addAttributes() {
        this.product.attributes.push({});
    }

    canAddAtributes() {
        if (this.product.attributes.length) {
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
            this.apiService.post('/products', {product: this.product})
                .subscribe(
                    (res) => {
                        this.toastr.success('Hello world!', 'Toastr fun!');
                        this.router.navigate(['/admin/products/list']);
                    },
                    (err) => {
                        console.log(err)
                    },
                )
        }
        ;
        if (this.method === 'PUT') {
        }
        ;
    }

}
