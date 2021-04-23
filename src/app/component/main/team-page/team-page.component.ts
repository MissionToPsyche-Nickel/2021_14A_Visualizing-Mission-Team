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
  infos: { image: string; description?: string; copyright?: string }[] = [
    {
      image: 'assets/images/Teams/Picture1.jpg',
      description: `Members of the Psyche team during their semi-annual meeting at Maxar. 
      In the background, we see the central component of the Psyche spacecraft’s body.`,
      copyright: 'https://psyche.asu.edu/2019/11/13/flight-hardware/',
    },
    {
      image: 'assets/images/Teams/Picture2.jpg',
      description:
        'Dr. Jim Bell, works on the Psyche Mission as a Deputy Principal Investigator for the mission',
      copyright: 'https://psyche.asu.edu/galleries/images/page/3/?ajax=1',
    },
    {
      image: 'assets/images/Teams/Picture3.png',
      description: `Members of the Psyche Team working with the Psyche Spectrometer. 
      Engineers here are working on the Gamma Ray/Neutron Spectrometer that will be a part of the Psyche spacecraft 
      in order to measure the element level in the asteroid.`,
      copyright: 'https://psyche.asu.edu/galleries/images/page/2/?ajax=1',
    },
    {
      image: 'assets/images/Teams/Picture4.jpg',
      description:
        'The entire Psyche team pose for a photo at the NASA Headquarters',
      copyright: 'https://psyche.asu.edu/mission/the-team/full-psyche-team/',
    },
    {
      image: 'assets/images/Teams/Picture5.jpg',
      description: `Members of the Psyche team at Space System Loral in Palo Alto, 
      California for the announcement of the Psyche Mission.`,
      copyright:
        'https://news.asu.edu/20170104-discoveries-asu-lead-nasa-space-exploration-mission-1st-time',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  // Disable right click on team page.
  onRightClick(event: any) {
    event.preventDefault();
  }
}
