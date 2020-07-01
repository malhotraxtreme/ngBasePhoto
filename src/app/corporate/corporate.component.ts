import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corporate',
  templateUrl: './corporate.component.html',
  styleUrls: ['./corporate.component.css']
})
export class CorporateComponent implements OnInit {
  public pics: any[];

  constructor() { }

  ngOnInit(): void {
    this.pics = [
      {
        name:"A1",
        path: 'https://source.unsplash.com/weekly?corporate'
      },
      {
        name:"A1",
        path: 'https://source.unsplash.com/weekly?office'
      },
      {
        name:"A1",
        path: 'https://source.unsplash.com/weekly?office,employees'
      },
      {
        name:"A1",
        path: 'https://source.unsplash.com/weekly?workspace'
      },
      {
        name:"A1",
        path: 'https://source.unsplash.com/weekly?work'
      },
      {
        name:"A1",
        path: 'https://source.unsplash.com/weekly?staff,work'
      },
      {
        name:"A1",
        path: 'https://source.unsplash.com/weekly?manager,work'
      },
      {
        name:"A1",
        path: 'https://source.unsplash.com/weekly?suit,manager'
      },
      {
        name:"A1",
        path: 'https://source.unsplash.com/weekly?headshot,corporate'
      },
      {
        name:"A1",
        path: 'https://source.unsplash.com/weekly?boss,chair'
      },
      {
        name:"A1",
        path: 'https://source.unsplash.com/weekly?boss'
      },
      {
        name:"A1",
        path: 'https://source.unsplash.com/weekly?workplace,desk'
      }
    ]
  }

}
