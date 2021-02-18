import { Component, OnInit } from '@angular/core'
import {
  trigger,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations'

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss'],
  host: {
    '(document:mousemove)': 'onMouseMove($event)'
  },
  animations: [
    trigger('fade', [
      transition(':enter', [
        query(
          '.list-item, .p',
          [
            style({ opacity: 0 }),
            stagger(1000, [animate(2000, style({ opacity: 1 }))])
          ],
          { optional: true }
        )
      ])
    ])
  ]
})
export class IndexPageComponent implements OnInit {
  audio = new Audio('assets/audio/bgm.mp3');
  alreadyPlaying = false;
  ifBlocked = true;
  ifMute = false;

  constructor() {
    this.audio.load();
  }
  ngOnInit(): void {}

  onMouseMove(ev: MouseEvent) {
    ev.preventDefault();
    if (!this.alreadyPlaying) {
      this.audio.autoplay = true;
      this.audio.volume = 0.3;
      var promise = this.audio.play();
      
      if (promise !== undefined) {
        promise.then(_ => {
          this.ifBlocked = false;
          this.alreadyPlaying = true;
          this.audio.muted = this.ifMute;
        }).catch(error => {
          this.ifBlocked = true;
        })
      }
      
    }
  }
}
