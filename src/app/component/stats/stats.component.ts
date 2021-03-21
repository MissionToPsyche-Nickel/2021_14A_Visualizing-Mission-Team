import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'angular-bootstrap-md';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent implements OnInit {
  constructor(private _snackbar: MatSnackBar, private router: Router) {}

  ngOnInit(): void {}

  @ViewChild(BaseChartDirective)
  private Chart: BaseChartDirective;

  public chartType: string = 'pie';

  private chartData: Array<Number> = [
    15,
    30,
    3,
    3,
    201,
    2,
    7,
    9,
    49,
    1,
    1,
    1,
    3,
    1,
    2,
    2,
    5,
    1,
    4,
    2,
    1,
  ];

  public chartDatasets: Array<any> = [
    {
      data: this.chartData,
      label: 'Psyche Partner Info',
    },
  ];

  public chartLabels: Array<string> = [
    'APL',
    'ASU',
    'DLR',
    'GRC',
    'JPL',
    'LLNL',
    'MSSS',
    'MIT',
    'Maxar',
    'ODLCD',
    'PSI',
    'SI',
    'SwRI',
    'UA',
    'UCLA',
    'YU',
    'NASA',
    'HU',
    'FC',
    'T.S.F.',
    'B.H.P',
  ];

  public chartDesc: Array<any> = [
    'Applied Physics Laboratory',
    'Arizona State University',
    'Deutsches Zentrum für Luft- und Raumfahrt',
    'Glenn Research Center',
    'Jet Propulsion Laboratory',
    'Lawrence Livermore National Laboratory',
    'Malin Space Science Systems',
    'Massachusetts Institute of Technology',
    'Maxar',
    "Obsevatoire De La Cote D'Azur",
    'Planetary Science Institute',
    'Smithsonian Institution',
    'Southwest Research Institute',
    'University of Arizona',
    'University of California Los Angeles',
    'Yale University',
    'NASA',
    'Harvard University',
    'Fervor Creative',
    'True Story Films',
    'Brad Hendron Photography',
  ];

  public chartColors: Array<any> = [
    {
      backgroundColor: this.getColor(),
      hoverBackgroundColor: this.getColor(),
      borderWidth: 2,
    },
  ];

  public chartOptions: any = {
    responsive: true,
  };

  private getColor(): Array<string> {
    var backgroundColorArr: Array<string> = [];
    const baseColorCode: Array<string> = [
      '#FC9E08',
      '#F05A66',
      '#A5425E',
      '#36264A',
      '#5A2A52',
    ];
    for (var i = 0; i < this.chartLabels.length; i++) {
      backgroundColorArr.push(baseColorCode[i % baseColorCode.length]);
    }
    return backgroundColorArr;
  }

  public chartClicked(e: any): void {
    const index = e.active[0]._index;
    const fullDescription: string = this.chartDesc[index];
    this.bottomPopUp(
      `${fullDescription} (${this.Chart.getPointDataAtEvent(e)})`
    );
  }

  public chartHovered(e: any): void {}

  private bottomPopUp(message: string) {
    this._snackbar.open(message, 'OK', {
      duration: 9000,
      panelClass: ['white-bar'],
    });
  }
}
