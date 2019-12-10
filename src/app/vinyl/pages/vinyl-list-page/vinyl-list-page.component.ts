import { Component, OnInit } from '@angular/core';
import { Vinyl } from 'src/app/core/models/vinyl.interface';
import { VinylService } from 'src/app/core/services/vinyl.service';

@Component({
  selector: 'app-vinyl-list-page',
  templateUrl: './vinyl-list-page.component.html',
  styleUrls: ['./vinyl-list-page.component.css']
})
export class VinylListPageComponent implements OnInit {

  // private vinylService: VinylService;

  vinyls: Vinyl[];

  constructor(public vinylService: VinylService){}

  ngOnInit() {
    this.vinyls = this.vinylService.getAll();
  }

}
