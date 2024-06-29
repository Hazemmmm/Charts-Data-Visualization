import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastSeverity } from '../enums';
@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  constructor(private _messageService: MessageService) {}

  showToast(severity: ToastSeverity, summary: string, detail: string): void {
    this._messageService.add({ severity, summary, detail });
  }

  showSuccess(summary: string, detail: string): void {
    this.showToast(ToastSeverity.SUCCESS, summary, detail);
  }

  showInfo(summary: string, detail: string): void {
    this.showToast(ToastSeverity.INFO, summary, detail);
  }

  showWarn(summary: string, detail: string): void {
    this.showToast(ToastSeverity.WARN, summary, detail);
  }

  showError(summary: string, detail: string): void {
    this.showToast(ToastSeverity.ERROR, summary, detail);
  }
}
