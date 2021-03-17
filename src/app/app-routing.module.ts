import { NgModule } from '@angular/core';
import { IndexPageComponent } from '../app/component/index-page/index-page.component';
import { StatsComponent } from '../app/component/stats/stats.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
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
