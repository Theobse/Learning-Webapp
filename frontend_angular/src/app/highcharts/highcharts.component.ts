import { Component, ElementRef, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
    selector: 'app-highcharts',
    template: '<div class="chart-container" #chartContainer></div>',
    styleUrls: ['./highcharts.component.css']
})
export class HighchartsComponent implements OnInit {
    chart: Highcharts.Chart | undefined;

    constructor(private elementRef: ElementRef) {}

    ngOnInit(): void {
        this.renderChart();
    }

    renderChart() {
        this.chart = Highcharts.chart(this.elementRef.nativeElement.querySelector('.chart-container'), {
        });
    }
}
