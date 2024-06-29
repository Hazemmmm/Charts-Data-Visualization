import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataSeriesRoutingModule } from './data-series-routing.module';

const COMPONENTS = [];
const BASE_MODULES = [CommonModule];
const MODULES = [DataSeriesRoutingModule];
@NgModule({
  declarations: [],
  imports: [...BASE_MODULES, ...MODULES],
})
export class DataSeriesModule {}
