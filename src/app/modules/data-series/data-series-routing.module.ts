import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataSeriesComponent } from './page/data-series.component';

const routes: Routes = [
  {
    path: '',
    component: DataSeriesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataSeriesRoutingModule {}
