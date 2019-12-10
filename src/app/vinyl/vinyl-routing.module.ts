import { NgModule } from '@angular/core';
import { VinylListPageComponent } from './pages/vinyl-list-page/vinyl-list-page.component';
import { Routes, RouterModule, Router } from '@angular/router';
import { VinylDetailPageComponent } from './pages/vinyl-detail-page/vinyl-detail-page.component';

const routes: Routes = [
  {path: 'list', component: VinylListPageComponent},
  {path: 'detail/:id', component: VinylDetailPageComponent}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule]

})
export class VinylRoutingModule {}
