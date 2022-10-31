import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    AdminDashComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule
  ]
})
export class AdminPanelModule { }
