import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { MatCardModule } from '@angular/material/card';
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
import { TeamPageComponent } from './component/team-page/team-page.component';
import { CardComponent } from './component/cards/card/card.component';
import { TechnologyPageComponent } from './component/technology-page/technology-page.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    StatsComponent,
    NavbarComponentComponent,
    LandingComponentComponent,
    TeamPageComponent,
    CardComponent,
    TechnologyPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatCardModule,
    MatIconModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [UserSetting],
  bootstrap: [AppComponent],
})
export class AppModule {}
