import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataSeriesService } from '../services/data-series.service';
import { Subject, takeUntil } from 'rxjs';
import { ApiResponse, ChartData, CountryData } from '../interfaces';
import { ToasterService } from 'src/app/core/services';

@Component({
  selector: 'app-data-series',
  templateUrl: './data-series.component.html',
  styleUrls: ['./data-series.component.scss'],
})
export class DataSeriesComponent implements OnInit, OnDestroy {
  private _destroy$ = new Subject<void>();
  data: ChartData = { labels: [], datasets: [] };
  constructor(
    private _dataSeriesService: DataSeriesService,
    private _toasterService: ToasterService
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  /**
   * @description retrieves data series for Switzerland and Egypt, processes the data, and
   * prepares it for visualization.
   * @return {void} void
   */
  fetchData(): void {
    this._dataSeriesService
      .fetchDataSeries()
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (response: ApiResponse) => {
          if (!response || !response[1]) return;

          const rawData = response[1];
          const labelsSet = new Set<string>();
          const cheData: number[] = [];
          const egyData: number[] = [];

          rawData.forEach((item: CountryData) => {
            if (item.date) labelsSet.add(item.date);

            if (item.value !== null && item.value !== undefined) {
              if (item.countryiso3code === 'CHE') {
                cheData.push(item.value);
              }

              if (item.countryiso3code === 'EGY') {
                egyData.push(item.value);
              }
            }
          });

          const sortedLabels = Array.from(labelsSet).sort();

          this.data = {
            labels: sortedLabels,
            datasets: [
              {
                label: 'Switzerland',
                backgroundColor: '#42A5F5',
                borderColor: '#1E88E5',
                data: cheData,
              },
              {
                label: 'Egypt',
                backgroundColor: '#9CCC65',
                borderColor: '#7CB342',
                data: egyData,
              },
            ],
          };
        },
        error: (err: Error) => {
          console.error('Error fetching data series:', err.message);
          this._toasterService.showError(
            'Error',
            'Failed to fetch data series'
          );
        },
      });
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
