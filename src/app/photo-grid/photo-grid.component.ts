import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photo-grid',
  templateUrl: './photo-grid.component.html',
  styleUrls: ['./photo-grid.component.css']
})
export class PhotoGridComponent implements OnInit {

  @Input() photosToDisplay:any;
  public photosToDisplay1:any;
  public photosToDisplay2:any;
  public photosToDisplay3:any;

  constructor() { }

  ngOnInit(): void {
    let numImagesInCol = Math.round(this.photosToDisplay.length / 3);
    this.photosToDisplay1 = this.photosToDisplay.slice(0,numImagesInCol);
    this.photosToDisplay2 = this.photosToDisplay.slice(numImagesInCol,(numImagesInCol*2));
    this.photosToDisplay3 = this.photosToDisplay.slice((numImagesInCol*2));
  }

}
