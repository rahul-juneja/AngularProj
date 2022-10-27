import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import { ResetFormComponent } from './reset-form/reset-form.component';

const routes: Routes = [
    {
      path: "login", component: LoginFormComponent
    },
    {
      path: "register", component: RegFormComponent
    },
    {
      path: "forget", component: ResetFormComponent
    },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule { }
