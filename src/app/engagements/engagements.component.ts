import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-engagements',
  templateUrl: './engagements.component.html',
  styleUrls: ['./engagements.component.css']
})
export class EngagementsComponent implements OnInit {
  public pics: any[];

  constructor() { }

  ngOnInit(): void {
    this.pics = [
      {
        name:"A1",
        path: 'https://source.unsplash.com/weekly?engagement'
      },
      {
        name:"A1",
        path: 'https://source.unsplash.com/weekly?couple'
      },
      {
        name:"A1",
        path: 'https://source.unsplash.com/weekly?she,said'
      },
      {
        name:"A1",
        path: 'https://source.unsplash.com/weekly?engagement,couple'
      },
      {
        name:"A1",
        path: 'https://source.unsplash.com/weekly?engagement,happy'
      },
      {
        name:"A1",
        path: 'https://source.unsplash.com/weekly?engagement,party'
      },
      {
        name:"A1",
        path: 'https://source.unsplash.com/weekly?couple,wine'
      },
      {
        name:"A1",
        path: 'https://source.unsplash.com/weekly?kiss'
      },
      {
        name:"A1",
        path: 'https://source.unsplash.com/weekly?couple,kiss'
      },
      {
        name:"A1",
        path: 'https://source.unsplash.com/weekly?wedding,kiss'
      },
      {
        name:"A1",
        path: 'https://source.unsplash.com/weekly?engagement,ring'
      },
      {
        name:"A1",
        path: 'https://source.unsplash.com/weekly?happy,couple'
      }
    ]
  }

}
