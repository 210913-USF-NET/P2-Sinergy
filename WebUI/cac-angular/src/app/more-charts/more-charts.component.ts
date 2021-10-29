import { Component, AfterViewInit, ElementRef } from '@angular/core';
import Chart from 'chart.js/auto'
import { CacApiService } from '../service/cac-api.service';
import { playlist } from '../models/spotifyPlaylist';

@Component({
  selector: 'app-more-charts',
  templateUrl: './more-charts.component.html',
  styleUrls: ['./more-charts.component.css']
})
export class MoreChartsComponent implements AfterViewInit {
  myChart: any;
  myChartTwo: any;
  constructor(private elementRef: ElementRef, private cacService: CacApiService) { }
  playlists: playlist[] = [];
  ngAfterViewInit() { //app-more-charts
    let htmlRef = this.elementRef.nativeElement.querySelector('#app-more-charts');
    this.myChart = new Chart(htmlRef, {
      type: 'doughnut',
      data: {
        labels: ['Apples', 'Blueberries', 'Pineapples', 'Watermelons', 'Grapes', 'Philip'],
        datasets: [{
          label: 'Best Fruit',
          data: [21, 6, 15, 10, 21, 9],
          backgroundColor: [
            'rgb(255, 99, 132, 0.2)',
            'rgb(54, 162, 235, 0.2)',
            'rgb(255, 206, 86, 0.2)',
            'rgb(75, 192, 192, 0.2)',
            'rgb(153, 102, 255, 0.2)',
            'rgb(05, 128, 128, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132, 1)',
            'rgb(54, 162, 235, 1)',
            'rgb(255, 206, 86, 1)',
            'rgb(75, 192, 192, 1)',
            'rgb(153, 102, 255, 1)',
            'rgb(05, 128, 128, 1)'
          ],
        }]
      },
      options: {
        plugins: {
          legend: {
            labels: {
              color: "white",
            }
          },
          title: {
            display: true,
            text: 'Custom Chart Title',
            color: "white",
            font: {
              size: 25
            }
          },
        }
      }
    });
    let htmlRefTwo = this.elementRef.nativeElement.querySelector('#app-more-charts_two');
    this.myChartTwo = new Chart(htmlRefTwo, {
      type: 'doughnut',
      data: {
        labels: ['Apples', 'Blueberries', 'Pineapples', 'Watermelons', 'Grapes', 'Philip'],
        datasets: [{
          label: 'Best Fruit',
          data: [15, 1, 5, 2, 7, 9],
          backgroundColor: [
            'rgb(255, 99, 132, 0.2)',
            'rgb(54, 162, 235, 0.2)',
            'rgb(255, 206, 86, 0.2)',
            'rgb(75, 192, 192, 0.2)',
            'rgb(153, 102, 255, 0.2)',
            'rgb(05, 128, 128, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132, 1)',
            'rgb(54, 162, 235, 1)',
            'rgb(255, 206, 86, 1)',
            'rgb(75, 192, 192, 1)',
            'rgb(153, 102, 255, 1)',
            'rgb(05, 128, 128, 1)'
          ],
        }]
      },
      options: {
        plugins: {
          legend: {
            labels: {
              color: "white",
            }
          },
          title: {
            display: true,
            text: 'Custom Chart Title 1',
            color: "white",
            font: {
              size: 25
            }
          },
        }
      }
    });
      this.cacService.getUserPlaylists().then(result => {
        console.log(result)
        this.playlists = result.items;
      })
  }
}

