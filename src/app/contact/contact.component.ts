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
      name: [ '' ],
      email: [ '' , Validators.email],
      phone:['' ,  Validators.pattern],
      datesRequired:[ '' ],
      sessionType:[ '' ],
      description: [ '' ],
      reference:['']

    });
    
   }

  ngOnInit(): void {

  }

  public onSubmit(){
    if(this.contactForm.valid){
      console.log(this.contactForm.value);
    }
    
  }

}
