import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';

const BASE_MODULES = [CommonModule];
const PRIMING_MODULES = [ToastModule];
@NgModule({
  declarations: [],
  imports: [...BASE_MODULES, ...PRIMING_MODULES],
  exports: [...BASE_MODULES, ...PRIMING_MODULES],
})
export class PrimeNGModule {}
