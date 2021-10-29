import { Component, AfterViewInit, ElementRef } from '@angular/core';
import Chart from 'chart.js/auto';
import { CacApiService } from '../service/cac-api.service';
import { playlist } from '../models/spotifyPlaylist';
import { songs } from '../models/spotifySongs';
import { artists } from '../models/spotifyArtist';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { keyframes } from '@angular/animations';
import { Songs } from '../models/Song';
import { Playlist } from '../models/Playlist';
import { track } from '../models/playlistTrack';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { User } from '../models/User';
import { user } from '../models/spotifyUser';
const PROFILE = "https://api.spotify.com/v1/me";

@Component({
  selector: 'app-more-charts',
  templateUrl: './more-charts.component.html',
  styleUrls: ['./more-charts.component.css']
})
export class MoreChartsComponent implements AfterViewInit {

  id = 0;
  User: User = {
    userID: 0,
    email: '',
    account: '',
    admin: false
  };
  user: user;
  playlists: playlist[] = [];

  myChart: any;
  constructor(private elementRef: ElementRef, private cacService: CacApiService, private currentRoute: ActivatedRoute, private router: Router) { }
  songs: songs[] = [];
  artist: artists[] = [];
  test: string;
  numbers = new Array();
  name: any;
  count: any;
  data: any;
  map = new Map();
  keys: any[];
  values: any[];
  
  ngAfterViewInit() {
    
    this.cacService.getSinglePlaylist('67qsE5NQAgsLAPOb5OVxdo').then(result =>{
      this.songs = result.items
      console.log(result)
      for(var i = 0; i<result.items.length; i++)
      { 
        this.test = result.items[i].track.artists[0].name;
        this.numbers.push(result.items[i].track.artists[0].name);
        // console.log(this.test)
        // console.log(this.numbers);
      } 
        // for(var n = 0; n< this.numbers.length; n++)
        //   {
        //     this.data = this.numbers[n];
        //     this.map[this.data]=(this.map[this.data] || 0) + 1;
        //     // console.log(this.map);
        //   }
          
          // console.log(this.map['Birdy'])
           //     console.log(this.map.keys())
          //  for (var n = 0; n < this.numbers.length; n++)
          //  {
          //    var name = this.numbers[n];
          //    var count = this.map[name] ?? 0;
          //    console.log('adding '+ name + ' with count '+ count)
          //    this.map.set(name, count + 1)
          //  }

          for (var n = 0; n < this.numbers.length; n++)
              {
                var name = this.numbers[n];
                let count = 1;
                if (this.map.has(name))
                {
                  count += this.map.get(name);
                }
                this.map.set(name, count)
                // console.log('adding '+ name + ' with count '+ count)
              }

            this.values = Array.from(this.map.values());
            this.keys = Array.from(this.map.keys());
                    
              console.log(this.keys);
              console.log(this.values)

    //app-more-charts
    let htmlRef = this.elementRef.nativeElement.querySelector('#app-more-charts');
    this.myChart = new Chart(htmlRef, {
      type: 'doughnut',
      data: {
        labels: this.keys,
        datasets: [{
          label: 'Artist',
          data: this.values,
          // data: [9,8,7,4],
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
        }
      }
    });
  });
  }
}

