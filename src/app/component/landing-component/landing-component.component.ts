import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserSetting } from '../data/userSetting';

@Component({
  selector: 'app-landing-component',
  templateUrl: './landing-component.component.html',
  styleUrls: ['./landing-component.component.scss'],
})
export class LandingComponentComponent implements OnInit, OnDestroy {
  ifMuted = true;
  constructor(public userSetting: UserSetting, private router: Router) {
    this.userSetting.ifMuted = true;
  }

  ngOnInit(): void {}

  changeMute() {
    this.ifMuted = !this.ifMuted;
  }

  goToMainPage() {
    this.router.navigate(['index']);
  }

  ngOnDestroy() {
    this.userSetting.ifMuted = this.ifMuted;
  }
}
