import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public contactForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.contactForm = this.fb.group({
      name: [ '' , Validators.required],
      email: [ '' , Validators.required],
      phone:['' ,  Validators.required],
      datesRequired:[ '' , Validators.required],
      sessionType:[ '' ],
      description: [ '' , Validators.required]

    });
    
   }

  ngOnInit(): void {

  }

}
