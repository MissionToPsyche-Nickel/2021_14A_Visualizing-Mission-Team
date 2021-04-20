import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor() {}

  @Input() info: any;

  ngOnInit(): void {}

  goToUrl(url: string): void {
    window.open(url, '_blank');
  }
}
