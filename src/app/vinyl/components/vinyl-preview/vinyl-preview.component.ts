import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Vinyl } from 'src/app/core/models/vinyl.interface';
import { VinylService } from 'src/app/core/services/vinyl.service';

@Component({
  selector: 'app-vinyl-preview',
  templateUrl: './vinyl-preview.component.html',
  styleUrls: [ './vinyl-preview.component.css' ]
})
export class VinylPreviewComponent implements OnInit {

  @Input() vinyl: Vinyl;

  @Output()
  clickButton = new EventEmitter();

  changing = false;

  constructor() {
  }

  ngOnInit() {}

  getImageUrl() {
    return this.vinyl.imageUrl;
  }

  getDateStyle() {
    return {
      color: this.changing ? 'green' : 'black'
    };
  }

  onClickButton() {
    console.log(this.changing);
    this.changing = !this.changing;
    this.clickButton.emit(this.vinyl);
  }

  onClickCover(){
    console.log('ok');
  }

}
