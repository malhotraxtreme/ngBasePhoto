import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weddings',
  templateUrl: './weddings.component.html',
  styleUrls: ['./weddings.component.css']
})
export class WeddingsComponent implements OnInit {

  // public componentPath="../../assets/portfolio/weddings/";
  public pics:any[];
  constructor() { }

  ngOnInit(): void {
    this.pics = [
    {
      name:"A1",
      path: 'https://source.unsplash.com/weekly?wedding'
    },
    {
      name:"A1",
      path: 'https://source.unsplash.com/weekly?bride'
    },
    {
      name:"A1",
      path: 'https://source.unsplash.com/weekly?groom'
    },
    {
      name:"A1",
      path: 'https://source.unsplash.com/weekly?mom'
    },
    {
      name:"A1",
      path: 'https://source.unsplash.com/weekly?decoration'
    },
    {
      name:"A1",
      path: 'https://source.unsplash.com/weekly?party'
    },
    {
      name:"A1",
      path: 'https://source.unsplash.com/weekly?wine'
    },
    {
      name:"A1",
      path: 'https://source.unsplash.com/weekly?ribbon'
    },
    {
      name:"A1",
      path: 'https://source.unsplash.com/weekly?gifts'
    },
    {
      name:"A1",
      path: 'https://source.unsplash.com/weekly?wedding,card'
    },
    {
      name:"A1",
      path: 'https://source.unsplash.com/weekly?wedding,ring'
    },
    {
      name:"A1",
      path: 'https://source.unsplash.com/weekly?newly,married'
    }
  ]
  }

}
