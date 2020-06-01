import { Component, OnInit } from '@angular/core';
import  jsonResp  from '../../assets/JSON/prices.json'

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.css']
})
export class InvestmentComponent implements OnInit {

  public packages = {};

  constructor() { 
    this.packages = jsonResp;
    //console.log(this.packages,Object.keys(jsonResp));
  }

  ngOnInit(): void {
  }

}
