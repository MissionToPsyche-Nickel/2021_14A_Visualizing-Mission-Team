import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndexPageComponent } from './component/main/index-page/index-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StatsComponent } from './component/main/stats/stats.component';
import { NavbarComponentComponent } from './component/util/navbar-component/navbar-component.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LandingComponentComponent } from './component/main/landing-component/landing-component.component';
import { UserSetting } from './component/data/userSetting';
import { TeamPageComponent } from './component/main/team-page/team-page.component';
import { CardComponent } from './component/util/card/card.component';
import { TechnologyPageComponent } from './component/main/technology-page/technology-page.component';
import { DisclaimerDialogComponent } from './component/util/disclaimer-dialog/disclaimer-dialog.component';

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
    DisclaimerDialogComponent,
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
    MatDialogModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [UserSetting],
  bootstrap: [AppComponent],
})
export class AppModule {}
