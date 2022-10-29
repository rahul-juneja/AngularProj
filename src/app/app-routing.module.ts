import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashComponent } from './admin-panel/admin-dash/admin-dash.component';
import { LoginFormComponent } from './user/login-form/login-form.component';
import { RegFormComponent } from './user/reg-form/reg-form.component';
import { ResetFormComponent } from './user/reset-form/reset-form.component';
import { HomeComponent } from './website/home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  // {
  //   path:'user', 
  //   loadChildren: () => import('./user/user.module')
  //   .then(mod => mod.UserModule)
  // },
  {
    path: "user/login", component: LoginFormComponent
  },
  {
    path: "user/register", component: RegFormComponent
  },
  {
    path: "user/forget", component: ResetFormComponent
  },
  {
    path: "admin", component: AdminDashComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
