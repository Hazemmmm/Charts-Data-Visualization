export type ApiResponse = [MetaData, CountryData[]];

export interface MetaData {
  page: number;
  pages: number;
  per_page: number;
  total: number;
  sourceid: string;
  lastupdated: string;
}

export interface CountryData {
  indicator: Indicator;
  country: Country;
  countryiso3code: string;
  date: string;
  value?: number;
  unit: string;
  obs_status: string;
  decimal: number;
}

export interface Indicator {
  id: string;
  value: string;
}

export interface Country {
  id: string;
  value: string;
}
