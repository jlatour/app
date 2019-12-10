import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VinylPreviewComponent } from './components/vinyl-preview/vinyl-preview.component';
import { SharedModule } from '../shared/shared.module';
import { VinylListPageComponent } from './pages/vinyl-list-page/vinyl-list-page.component';


@NgModule({
  declarations: [
    VinylPreviewComponent,
    VinylListPageComponent
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
