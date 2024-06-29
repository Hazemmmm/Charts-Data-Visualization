import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { ToasterService } from './services/toaster.service';

const BASE_MODULES = [CommonModule];
const PROVIDERS = [MessageService, ToasterService];

@NgModule({
  declarations: [],
  imports: [...BASE_MODULES],
  providers: [...PROVIDERS],
})
export class CoreModule {}
