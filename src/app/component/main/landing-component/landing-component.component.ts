import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserSetting } from '../../data/userSetting';
import { DisclaimerDialogComponent } from '../../util/disclaimer-dialog/disclaimer-dialog.component';

@Component({
  selector: 'app-landing-component',
  templateUrl: './landing-component.component.html',
  styleUrls: ['./landing-component.component.scss'],
})
export class LandingComponentComponent implements OnInit, OnDestroy {
  ifMuted = true;
  constructor(
    public userSetting: UserSetting,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.userSetting.ifMuted = true;
  }

  ngOnInit(): void {}

  // When checkbox status is changed, reverse the boolean variable.
  changeMute() {
    this.ifMuted = !this.ifMuted;
  }

  disclaimerClick() {
    this.dialog.open(DisclaimerDialogComponent, {
      width: '650px'
    });
  }

  // Redirect to the index page.
  goToMainPage() {
    this.router.navigate(['index']);
  }

  // Assign user choice to take effect.
  ngOnDestroy() {
    this.userSetting.ifMuted = this.ifMuted;
  }
}
