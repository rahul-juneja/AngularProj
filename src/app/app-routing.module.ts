import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './website/home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path:'user', 
    loadChildren: () => import('./user/user.module')
    .then(mod => mod.UserModule)
  },
  {
    path:'admin', 
    loadChildren: () => import('./admin-panel/admin-panel.module')
    .then(mod => mod.AdminPanelModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
