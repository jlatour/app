import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountingButtonsComponent } from './components/counting-buttons/counting-buttons.component';
import { SortPipe } from './pipes/sort.pipe';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CountingButtonsComponent, SortPipe, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [CountingButtonsComponent, SortPipe, HeaderComponent]
})
export class SharedModule { }
