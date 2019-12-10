import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VinylPreviewComponent } from './components/vinyl-preview/vinyl-preview.component';
import { SharedModule } from '../shared/shared.module';
import { VinylListPageComponent } from './pages/vinyl-list-page/vinyl-list-page.component';
import { VinylDetailPageComponent } from './pages/vinyl-detail-page/vinyl-detail-page.component';
import { VinylRoutingModule } from './vinyl-routing.module';


@NgModule({
  declarations: [
    VinylPreviewComponent,
    VinylListPageComponent,
    VinylDetailPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    VinylRoutingModule
  ],
  exports: [
    VinylPreviewComponent
  ]
})
export class VinylModule { }
