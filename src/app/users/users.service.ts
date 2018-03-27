import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RestService } from '../shared/rest.service';

@Injectable()
export class UsersService {
  user: any;

  constructor(public restService: RestService) {
  }

  addUser(user) {
    return this.restService.addUser(user);
  }

  logout() {
    this.user = null;
    localStorage.setItem('token', null);
  }

  loadUser() {
    this.restService.loadUser()
    .subscribe((response) => {
      console.log(response);
      this.user = response;
    }, (error) => console.error(error));
  }

  login(credentials: {login: string, password: string}) {
    const promise = new Promise((resolve, reject) => {
      this.restService.login(credentials.login, credentials.password)
      .subscribe((response) => {
        localStorage.setItem('token', response['token']);
        this.loadUser();
        resolve(response['token']);
      }, (error) => reject(error));
    });
    return promise;
  }

}
