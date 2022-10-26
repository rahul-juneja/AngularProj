import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './user/login-form/login-form.component';
import { RegFormComponent } from './user/reg-form/reg-form.component';
import { ResetFormComponent } from './user/reset-form/reset-form.component';
import { HomeComponent } from './website/home/home.component';

const routes: Routes = [
  {
    path: "user/register", component: RegFormComponent
  },
  {
    path: "user/login", component: LoginFormComponent
  },
  {
    path: "user/forget", component: ResetFormComponent
  },
  {
    path: "home", component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
