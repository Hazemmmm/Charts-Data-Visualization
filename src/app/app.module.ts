import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { DataSeriesComponent } from './modules/data-series/page/data-series.component';
import { ChartModule } from 'primeng/chart'; // Import ChartModule
import { HttpClientModule } from '@angular/common/http';

const BASE_MODULES = [
  BrowserModule,
  AppRoutingModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  BrowserAnimationsModule,
];

const MODULES = [CoreModule, SharedModule, ChartModule];
const PROVIDERS = [];
@NgModule({
  declarations: [AppComponent, DataSeriesComponent],
  imports: [...BASE_MODULES, ...MODULES],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
