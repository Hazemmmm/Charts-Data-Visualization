import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { API_URLS } from 'src/assets/config/httpCalls';
import { ApiResponse } from '../interfaces';

const API_URL = API_URLS.dataSeries;
@Injectable({
  providedIn: 'root',
})
export class DataSeriesService {
  constructor(private _http: HttpClient) {}

  fetchDataSeries(): Observable<ApiResponse> {
    return this._http.get<ApiResponse>(API_URL);
  }
}
