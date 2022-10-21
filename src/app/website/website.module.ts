import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[HeaderComponent,FooterComponent,MainComponent]
})
export class WebsiteModule { }
