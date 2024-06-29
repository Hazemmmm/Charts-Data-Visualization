import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { DataSeriesService } from './data-series.service';
import { API_URLS } from 'src/assets/config/httpCalls';
import { ApiResponse, Country, Indicator } from '../interfaces';

describe('DataSeriesService', () => {
  let service: DataSeriesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataSeriesService],
    });
    service = TestBed.inject(DataSeriesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch data series', () => {
    const dummyResponse: ApiResponse = [
      {
        page: 0,
        pages: 0,
        per_page: 0,
        total: 0,
        sourceid: '',
        lastupdated: '',
      },
      [
        {
          countryiso3code: 'CHE',
          date: '2000',
          value: 10,
          indicator: {} as Indicator,
          country: {} as Country,
          unit: '',
          obs_status: '',
          decimal: 0,
        },
        {
          countryiso3code: 'EGY',
          date: '2000',
          value: 20,
          indicator: {} as Indicator,
          country: {} as Country,
          unit: '',
          obs_status: '',
          decimal: 0,
        },
      ],
    ];

    service.fetchDataSeries().subscribe((response) => {
      expect(response).toEqual(dummyResponse);
    });

    const req = httpMock.expectOne(API_URLS.dataSeries);
    expect(req.request.method).toBe('GET');
    req.flush(dummyResponse);
  });
});
