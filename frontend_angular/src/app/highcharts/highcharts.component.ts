import { Component, ElementRef, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import {HightchartService} from "./hightchart.service";

@Component({
    selector: 'app-highcharts',
    template: '<div class="chart-container" #chartContainer></div>',
    styleUrls: ['./highcharts.component.css']
})
export class HighchartsComponent implements OnInit {
    chart: Highcharts.Chart | undefined;
    packagesWithCourseCount: any[] = [];

    constructor(private elementRef: ElementRef , private HightchartService : HightchartService) {}

  ngOnInit(): void {
    this.getData(); // Appel à la méthode pour récupérer les données
  }

  renderChart() {
    this.chart = Highcharts.chart(this.elementRef.nativeElement.querySelector('.chart-container'), {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Nombre de cours par package d\'apprentissage'
      },
      xAxis: {
        categories: this.packagesWithCourseCount.map(pkg => pkg.packageName),
        title: {
          text: 'Packages'
        }      },
      yAxis: {
        title: {
          text: 'Nombre de cours'
        }
      },
      series: [{
        name: 'Cours',
        type: 'column',
        data: this.packagesWithCourseCount.map(pkg => pkg.courseCount),
        colorByPoint: true
      }]
    });
  }
  getData() {
    this.HightchartService.getAllData()
      .subscribe(
        (data: any[]) => {
          this.packagesWithCourseCount = data; // Affectation des données reçues à la variable packagesWithCourseCount
          this.renderChart(); // Une fois que les données sont récupérées, on peut dessiner le graphique
        },
        (error) => {
          console.error('Erreur lors de la récupération des données : ', error);
        }
      );
  }
}
