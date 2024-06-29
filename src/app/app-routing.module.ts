import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainAppPath } from './shared/enums';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: MainAppPath.DATA_SERIES,
  },
  {
    path: MainAppPath.DATA_SERIES,
    title: MainAppPath.DATA_SERIES,
    loadChildren: () =>
      import('./modules/data-series/data-series.module').then(
        (m) => m.DataSeriesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
