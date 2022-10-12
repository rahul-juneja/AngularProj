import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { WebsiteRoutingModule } from './website-routing.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule
  ],
  exports:[HeaderComponent,FooterComponent,MainComponent]
})
export class WebsiteModule { }
