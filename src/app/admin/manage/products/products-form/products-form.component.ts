import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductModel} from '../product.model';
import {ApiService} from '../../../../shared/index';


@Component({
    selector: 'app-products-form',
    templateUrl: './products-form.component.html',
    styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit {
    @ViewChild('f') form: any;
    product: ProductModel;

    constructor(private router: Router,
                private activatedRoute: ActivatedRoute, 
                private apiService: ApiService) { }

    ngOnInit() {
        let id = this.activatedRoute.snapshot.paramMap.get('id');
        if (!id) {
            this.product = new ProductModel();
        }
        else  {
            
        }
    }

    onSubmit() {}

}