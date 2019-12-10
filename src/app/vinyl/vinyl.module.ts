import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VinylPreviewComponent } from './components/vinyl-preview/vinyl-preview.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    VinylPreviewComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    VinylPreviewComponent
  ]
})
export class VinylModule { }
