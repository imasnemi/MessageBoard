import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler) {
        const token = localStorage.getItem('token');
        const options = {
            headers: new HttpHeaders({
                Authorization: token
            })
        };
        if (token) {
            const clonedRequest = request.clone(options);
            return next.handle(clonedRequest);
        }
        return next.handle(request);
    }
}
