import { TestBed } from '@angular/core/testing';
import { ToasterService } from './toaster.service';
import { MessageService } from 'primeng/api';

describe('ToasterService', () => {
  let service: ToasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToasterService, MessageService],
    });
    service = TestBed.inject(ToasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should show success message', () => {
    const messageService = TestBed.inject(MessageService);
    spyOn(messageService, 'add');
    service.showSuccess('Title', 'Message');
    expect(messageService.add).toHaveBeenCalledWith({
      severity: 'success',
      summary: 'Title',
      detail: 'Message',
    });
  });

  it('should show error message', () => {
    const messageService = TestBed.inject(MessageService);
    spyOn(messageService, 'add');
    service.showError('Title', 'Message');
    expect(messageService.add).toHaveBeenCalledWith({
      severity: 'error',
      summary: 'Title',
      detail: 'Message',
    });
  });
});
