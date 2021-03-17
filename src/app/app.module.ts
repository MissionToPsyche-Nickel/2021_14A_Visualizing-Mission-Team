import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndexPageComponent } from '../app/component/index-page/index-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StatsComponent } from './component/stats/stats.component';
import { NavbarComponentComponent } from './component/navbar-component/navbar-component.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    StatsComponent,
    NavbarComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
