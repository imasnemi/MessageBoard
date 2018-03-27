import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from './users.service';
import { SharedModule } from '../shared/shared.module';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubscribeComponent } from './subscribe/subscribe.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [UserComponent, LoginComponent, SubscribeComponent],
  providers: [UsersService],
  exports: [UserComponent]
})
export class UsersModule { }
