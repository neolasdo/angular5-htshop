import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductModel} from '../product.model';

@Component({
    selector: 'app-products-form',
    templateUrl: './products-form.component.html',
    styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit {
    @ViewChild('f') form: any;
    products: ProductModel;

    constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        let id = this.activatedRoute.snapshot.paramMap.get('id');
        if (!id) {
            console.log('add products');
        }
        else  {
            console.log('edit products');
        }
    }

    onSubmit() {}

}
