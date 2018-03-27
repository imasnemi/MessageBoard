import { Routes } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';
import { LoginComponent } from './users/login/login.component';
import { SubscribeComponent } from './users/subscribe/subscribe.component';

export const appRoutes: Routes = [
    {path: '', redirectTo: '/messages', pathMatch: 'full'},
    {path: 'messages', component: MessagesComponent},
    {path: 'login', component: LoginComponent},
    {path: 'subscribe', component: SubscribeComponent},
    {path: '**', redirectTo: '/messages'}
];
