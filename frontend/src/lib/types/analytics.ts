export interface DistributionDatapoint {
  name: string;
  value: number;
}

export interface TimeSeriesDatapoint {
  date: string;
  [key: string]: number | string | undefined;
}
