import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weddings',
  templateUrl: './weddings.component.html',
  styleUrls: ['./weddings.component.css']
})
export class WeddingsComponent implements OnInit {

  public componentPath="../../assets/portfolio/weddings/";
  public pics:any;
  constructor() { }

  ngOnInit(): void {
    this.pics = [
    {
      name:"A1",
      path:this.componentPath + "1.jpg",
    },
    {
      name:"A2",
      path:this.componentPath + "2.jpg",
    },
    {
      name:"A3",
      path:this.componentPath + "3.jpg",
    },
    {
      name:"A4",
      path:this.componentPath + "4.jpg",
    },
    {
      name:"A5",
      path:this.componentPath + "5.jpg",
    },
    {
      name:"A6",
      path:this.componentPath + "6.jpg",
    }
  ]
  }

}
