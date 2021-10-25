import { Component, AfterViewInit, ElementRef } from '@angular/core';
import Chart from 'chart.js/auto'

@Component({
  selector: 'app-more-charts',
  templateUrl: './more-charts.component.html',
  styleUrls: ['./more-charts.component.css']
})
export class MoreChartsComponent implements AfterViewInit {
  myChart:any;
  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() { //app-more-charts
    let htmlRef = this.elementRef.nativeElement.querySelector('#app-more-charts');
    this.myChart = new Chart(htmlRef, {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
          datasets: [{
              label: '# of Votes',
              data: [21, 4, 15, 10, 21],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
            }
        }
    } );
  }  
}
