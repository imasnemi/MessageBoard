import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ApiConfig } from './config';

@Injectable()
export class RestService {
  options = {
    headers: new HttpHeaders({
      'Authorization': localStorage.getItem('token')
    })
  };

  constructor(
    private http: HttpClient,
    private apiConfig: ApiConfig) {
  }

  sendMessage(message): Observable<any[]> {
    return this.http.post<any>(this.apiConfig.api_url + 'messages', message, this.options);
  }

  loadMessages(): Observable<any[]> {
    return this.http.get<any[]>(this.apiConfig.api_url + 'messages');
  }

  login(login: string, password: string): Observable<any[]> {
    return this.http.post<any>(this.apiConfig.api_url + 'login',
    {login: login, password: password});
  }

  loadUser() {
    return this.http.get<any>(this.apiConfig.api_url + 'users', this.options);
  }

  addUser(user): Observable<any[]> {
    return this.http.post<any>(this.apiConfig.api_url + 'users', user);
  }
}
