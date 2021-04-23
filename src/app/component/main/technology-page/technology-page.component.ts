import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-technology-page',
  templateUrl: './technology-page.component.html',
  styleUrls: ['./technology-page.component.scss'],
})
export class TechnologyPageComponent implements OnInit {
  imagePrefix: string = 'assets/images/Technology/';

  infos: { image: string; description?: string; copyright?: string }[] = [
    {
      image: `${this.imagePrefix}Picture1.jpg`,
      description: `Mockup of the Psyche spacecraft, currently being built by Maxar. 
      The body will be just slightly larger than a smart car. 
      It carries a neutron spectrometer, multispectral imager, magnetometer, gamma ray, x-band radio telecommunication 
      system and a laser for Deep Space Optical Communication. `,
      copyright: 'https://psyche.asu.edu/mission/the-spacecraft/',
    },
    {
      image: `${this.imagePrefix}Picture2.jpeg`,
      description: `The Space Data Center (SDC) at ASU in Tempe. 
      This will act as a hub for all the data received from the Psyche Mission. 
      This data will be processed and then sent to the broader NASA Psyche Team where it will be used to 
      create digital maps, models, etc.`,
      copyright:
        'https://psyche.asu.edu/2020/03/30/what-happens-to-the-data-collected-by-the-psyche-mission/',
    },
    {
      image: `${this.imagePrefix}Picture3.jpeg`,
      description: `Display at SDC that will be used for displaying the different statistics about the mission including the data being returned. 
      600 gigabits of data will be sent to NASA’s Planetary Data System (PDS), 
      however the SDC is dedicating 5 terabytes to the raw data coming in. `,
      copyright:
        'https://psyche.asu.edu/2020/03/30/what-happens-to-the-data-collected-by-the-psyche-mission/',
    },
    {
      image: `${this.imagePrefix}Picture4.jpg`,
      description:
        'Integrating the propulsion system onto the main body of Psyche’s spacecraft at Maxar Technologies in Palo Alto, California.',
      copyright:
        'https://blog.maxar.com/space-infrastructure/2020/psyche-five-questions-with-maxars-program-management',
    },
    {
      image: `${this.imagePrefix}Picture5.jpg`,
      description: `Chassis is finally delivered to JPL from Maxar Technologies, 
      and is ready to be transferred from Maxar’s shipping container to JPL’s Spacecraft Assembly Facility. `,
      copyright:
        'https://www.jpl.nasa.gov/news/nasa-begins-final-assembly-of-spacecraft-destined-for-asteroid-psyche',
    },
    {
      image: `${this.imagePrefix}Picture6.jpeg`,
      description:
        'Close-up of the asteroid Psyche, which is located in the main asteroid belt between Mars and Jupiter.',
      copyright:
        'https://news.asu.edu/20170104-discoveries-asu-lead-nasa-space-exploration-mission-1st-time',
    },
    {
      image: `${this.imagePrefix}Picture7.jpeg`,
      description: `Psyche mission multi-spectral imager, engineered at the Johns Hopkins Applied Physics Laboratory in Laurel, Maryland.`,
      copyright:
        'https://news.asu.edu/20170104-discoveries-asu-lead-nasa-space-exploration-mission-1st-time',
    },
    {
      image: `${this.imagePrefix}Picture8.jpeg`,
      description: `Space System Loral’s (SSL) satellite manufacturing facility in Palo Alto, California`,
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
