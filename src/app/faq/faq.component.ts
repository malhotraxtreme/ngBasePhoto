import { Component, OnInit } from '@angular/core';
import jsonFaqs from '../../assets/JSON/faqs.json';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  public faqs = [];
  constructor() {
    this.faqs = jsonFaqs.resp;
   }

  ngOnInit(): void {
  }



}
