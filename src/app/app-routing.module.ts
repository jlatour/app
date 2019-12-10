import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { VinylListPageComponent } from './vinyl/pages/vinyl-list-page/vinyl-list-page.component';


const routes: Route[] = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'vinyl', loadChildren: () => import('./vinyl/vinyl.module').then((module) => module.VinylModule) },
  // {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule( {
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule]
})

export  class AppRoutingModule{}
