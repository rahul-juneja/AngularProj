import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { WebsiteRoutingModule } from './website/website-routing.module';
import { WebsiteModule } from './website/website.module';

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebsiteModule,
    WebsiteRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
