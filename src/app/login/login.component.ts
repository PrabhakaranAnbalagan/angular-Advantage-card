import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../model/user';
import { LoginService } from '../service/login.service';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    user = new User('', '');
    constructor(private router: Router, private service: LoginService) { }

    ngOnInit() {
    }

    onSubmit(loginForm: NgForm) {
        if (this.service.validateUser(this.user)) {
            this.router.navigate(['/card', this.user.userName]);
        } else {
            window.alert('Invalid User');
        }
    }
}
