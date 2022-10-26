import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[HeaderComponent,FooterComponent,MainComponent]
})
export class WebsiteModule { }
