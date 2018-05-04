import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-request-password',
  templateUrl: './request-password.component.html',
  styleUrls: ['./request-password.component.scss']
})
export class RequestPasswordComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
    }

    getPassword() {
        console.log('get password OK.');
        // this.router.navigate([''])
    }

}
