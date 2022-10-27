import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegFormComponent } from './reg-form/reg-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ResetFormComponent } from './reset-form/reset-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    RegFormComponent,
    LoginFormComponent,
    ResetFormComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class UserModule { }
