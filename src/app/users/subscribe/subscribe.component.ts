import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  subscriptionForm = new FormGroup({
    login: new FormControl('', [Validators.maxLength(5), Validators.minLength(1)]),
    password: new FormControl('', passwordValidator(5)),
    avatar: new FormControl(),
    color: new FormControl()
  });
  error: string;

  constructor(public usersService: UsersService, public router: Router) { }

  ngOnInit() {
  }

  subscribe() {
    // console.log(this.subscriptionForm);
    this.usersService.addUser(this.subscriptionForm.value)
    .subscribe((response) => {
      console.log(response);
      this.router.navigateByUrl('/login');
    }, (error) => {
      console.error(error);
      this.error = error.error.error;
    });
  }

}

function passwordValidator(maxLength: number): ValidatorFn {
  console.log('inside factory');
    function passwordValidatorFn(passwordControl: FormControl): any {
    console.log('validation function');
    const password = passwordControl.value;
    console.log(password);
    if (password.length < 6 || password.length > 26) {
      return {error: 'Invalid Password'};
    }
    return null;
  }
  return passwordValidatorFn;
}
