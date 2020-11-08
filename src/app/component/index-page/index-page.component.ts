import { Component, OnInit } from '@angular/core';
import {trigger, style, animate, transition, query, stagger} from '@angular/animations';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss'],
  animations: [
    trigger('fade', [ 
      transition(':enter', [
        query('.list-item, .p', [
          style({opacity: 0}),
          stagger(1000, [
            animate(2000, style({opacity: 1}))
          ]),
        ],
        { optional: true })
      ])
    ])
  ]
})
export class IndexPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
