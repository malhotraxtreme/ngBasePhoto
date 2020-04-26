import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public portfolioToggle = false;
  public informationToggle = false;

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

  public toggleSideMenuItem(e:any){
    switch(e){
      case 'portfolio':
        this.portfolioToggle = !this.portfolioToggle;
        break;
      case 'information':
        this.informationToggle = !this.informationToggle;
        break;
    }
  }

}
