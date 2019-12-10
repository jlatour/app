import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountingButtonsComponent } from './components/counting-buttons/counting-buttons.component';
import { SortPipe } from './pipes/sort.pipe';



@NgModule({
  declarations: [CountingButtonsComponent, SortPipe],
  imports: [
    CommonModule
  ],
  exports: [CountingButtonsComponent, SortPipe]
})
export class SharedModule { }
