import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VinylService } from 'src/app/core/services/vinyl.service';
import { Vinyl } from 'src/app/core/models/vinyl.interface';

@Component({
  selector: 'app-vinyl-detail-page',
  templateUrl: './vinyl-detail-page.component.html',
  styleUrls: ['./vinyl-detail-page.component.css']
})
export class VinylDetailPageComponent implements OnInit {

  vinyl: Vinyl;

  constructor(private route: ActivatedRoute, private vinylService: VinylService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params.id;
      this.vinyl = this.vinylService.getOne(id);
    });
  }

}
