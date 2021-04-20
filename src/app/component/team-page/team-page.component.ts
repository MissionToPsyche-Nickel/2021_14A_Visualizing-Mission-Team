import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss'],
})
export class TeamPageComponent implements OnInit {
  /*
  infos parameter:
    image: string (Optional), image path for displaying.
    description: string (Optional), description for the card image content.
    copyright: string (Optional), copyright string after the copyright symbol.
  */
  infos: any = [
    {
      image: 'assets/images/Teams/Picture1.jpg',
      description: `Members of the Psyche team during their semi-annual meeting at Maxar. 
      In the background, we see the central component of the Psyche spacecraft’s body.`,
      copyright: 'https://psyche.asu.edu/2019/11/13/flight-hardware/'
    },
    {
      image: 'assets/images/Teams/Picture2.jpg',
      description: 'Text2',
    },
    {
      image: 'assets/images/Teams/Picture3.png',
    },
    {
      image: 'assets/images/Teams/Picture4.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  // Disable right click on team page.
  onRightClick(event: any) {
    event.preventDefault()
  }
}
