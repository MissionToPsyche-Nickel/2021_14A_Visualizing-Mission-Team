import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndexPageComponent } from '../app/component/index-page/index-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StatsComponent } from './component/stats/stats.component';
import { NavbarComponentComponent } from './component/navbar-component/navbar-component.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LandingComponentComponent } from './component/landing-component/landing-component.component';
import { UserSetting } from './component/data/userSetting';

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    StatsComponent,
    NavbarComponentComponent,
    LandingComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [UserSetting],
  bootstrap: [AppComponent],
})
export class AppModule {}
