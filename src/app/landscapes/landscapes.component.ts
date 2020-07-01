import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landscapes',
  templateUrl: './landscapes.component.html',
  styleUrls: ['./landscapes.component.css']
})
export class LandscapesComponent implements OnInit {
  public pics: any[];

  constructor() { }

  ngOnInit(): void {
    this.pics = [
      {
        name:"A1",
        path: 'https://source.unsplash.com/weekly?landscape'
      },
      {
        name:"A1",
        path: 'https://source.unsplash.com/weekly?nature'
      },
      {
        name:"A1",
        path: 'https://source.unsplash.com/weekly?landscape,nature'
      },
      {
        name:"A1",
        path: 'https://source.unsplash.com/weekly?beautiful,nature'
      },
      {
        name:"A1",
        path: 'https://source.unsplash.com/weekly?lake,louise'
      },
      {
        name:"A1",
        path: 'https://source.unsplash.com/weekly?lake,nature'
      },
      {
        name:"A1",
        path: 'https://source.unsplash.com/weekly?sunrise,farm'
      },
      {
        name:"A1",
        path: 'https://source.unsplash.com/weekly?sky,sunset'
      },
      {
        name:"A1",
        path: 'https://source.unsplash.com/weekly?forest'
      },
      {
        name:"A1",
        path: 'https://source.unsplash.com/weekly?snow,landscape'
      },
      {
        name:"A1",
        path: 'https://source.unsplash.com/weekly?ottawa,landscape'
      },
      {
        name:"A1",
        path: 'https://source.unsplash.com/weekly?seascape'
      }
    ]
  }

}
