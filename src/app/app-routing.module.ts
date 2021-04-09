import { NgModule } from '@angular/core';
import { IndexPageComponent } from '../app/component/index-page/index-page.component';
import { StatsComponent } from '../app/component/stats/stats.component';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponentComponent } from './component/landing-component/landing-component.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponentComponent,
  },
  {
    path: 'index',
    component: IndexPageComponent,
  },
  {
    path: 'stats',
    component: StatsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
