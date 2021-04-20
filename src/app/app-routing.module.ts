import { NgModule } from '@angular/core';
import { IndexPageComponent } from '../app/component/index-page/index-page.component';
import { StatsComponent } from '../app/component/stats/stats.component';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponentComponent } from './component/landing-component/landing-component.component';
import { TeamPageComponent } from './component/team-page/team-page.component';
import { TechnologyPageComponent } from './component/technology-page/technology-page.component';

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
  {
    path: 'team',
    component: TeamPageComponent,
  },
  {
    path: 'technology',
    component: TechnologyPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
