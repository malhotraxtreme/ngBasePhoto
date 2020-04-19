import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    this.setMobile();
    
  }

  public isMobile:any = false;

  public setMobile(){
    if( window.innerWidth <= 768  ){
      console.log("Mobile Classes set");
      this.isMobile = true;
    }
    else{
      this.isMobile =false;
    }
  }

}
