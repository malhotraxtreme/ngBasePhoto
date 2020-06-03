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

  public filterFaq(key:any){
    key = key.toLowerCase();
    this.faqs = jsonFaqs.resp;
    this.faqs = this.faqs.filter((x)=>{
      if (x.ques.toLowerCase().includes(key)) {
        return true;
      }
      if (x.ans.toLowerCase().includes(key)) {
        return true;
      }
    });
  }



}
