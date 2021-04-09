import { Component, OnInit } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
  query,
  stagger,
} from '@angular/animations';
import { Router } from '@angular/router';
import { UserSetting } from '../data/userSetting';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss'],
  host: {},
  animations: [
    trigger('fade', [
      transition(':enter', [
        query(
          '.list-item, .div',
          [
            style({ opacity: 0 }),
            stagger(1000, [animate(2000, style({ opacity: 1 }))]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class IndexPageComponent implements OnInit {
  audio = new Audio('assets/audio/bgm.mp3');
  alreadyPlaying = false;

  ifMute: Boolean;

  constructor(private router: Router, public userSetting: UserSetting) {
    this.audio.load();
  }

  ngOnInit(): void {
    if (this.userSetting.ifMuted === undefined) {
      this.ifMute = true;
    } else {
      this.ifMute = this.userSetting.ifMuted;
    }

    this.audio.volume = 0.3;
    if (!this.ifMute) {
      var promise = this.audio.play();
      if (promise !== undefined) {
        promise
          .then((_) => {
            this.audio.muted = false;
          })
          .catch((error) => {});
      }
    }
    this.alreadyPlaying = true;
  }

  ngOnDestroy(): void {
    if (this.audio) {
      this.audio.pause();
      this.audio = null;
    }
  }
}
