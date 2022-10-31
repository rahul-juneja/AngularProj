import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
    { 
        path: '', component: AdminDashComponent 
    },
    {
        path:'profile', component: ProfileComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
