import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  public faqs = [];
  constructor() {
    this.faqs = [{
      'ques':'question',
      'ans':'answer'
    },
    {
      'ques':'question2',
      'ans':'answer2'
    },
  ];
   }

  ngOnInit(): void {
  }



}
