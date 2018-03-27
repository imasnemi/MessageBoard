import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials = {login: '', password: ''};
  error: string;

  constructor(public usersService: UsersService,
              public router: Router) { }

  ngOnInit() {
  }

  login() {
    this.error = null;
    this.usersService
    .login(this.credentials)
    .then((token) => {
      this.router.navigateByUrl('/messages');
    })
    .catch((error) => {
      console.error(error);
      this.error = error.error.error;
    });
  }
}
