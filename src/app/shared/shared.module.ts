import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent, HeaderComponent } from './components';
import { PrimeNGModule } from './modules';

const COMPONENTS = [HeaderComponent, FooterComponent];
const MODULES = [CommonModule, PrimeNGModule];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  exports: [...MODULES, ...COMPONENTS],
})
export class SharedModule {}
