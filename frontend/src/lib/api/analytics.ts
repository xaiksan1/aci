import {
  DistributionDatapoint,
  TimeSeriesDatapoint,
} from "@/lib/types/analytics";

export async function getAppDistributionData(
  apiKey: string,
): Promise<DistributionDatapoint[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/analytics/app-usage-distribution`,
    {
      method: "GET",
      headers: {
        "X-API-KEY": apiKey,
      },
    },
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch app distribution data: ${response.status} ${response.statusText}`,
    );
  }

  return await response.json();
}

export async function getFunctionDistributionData(
  apiKey: string,
): Promise<DistributionDatapoint[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/analytics/function-usage-distribution`,
    {
      method: "GET",
      headers: {
        "X-API-KEY": apiKey,
      },
    },
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch function distribution data: ${response.status} ${response.statusText}`,
    );
  }

  return await response.json();
}

export async function getAppTimeSeriesData(
  apiKey: string,
): Promise<TimeSeriesDatapoint[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/analytics/app-usage-timeseries`,
    {
      method: "GET",
      headers: {
        "X-API-KEY": apiKey,
      },
    },
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch app time series data: ${response.status} ${response.statusText}`,
    );
  }

  return await response.json();
}

export async function getFunctionTimeSeriesData(
  apiKey: string,
): Promise<TimeSeriesDatapoint[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/analytics/function-usage-timeseries`,
    {
      method: "GET",
      headers: {
        "X-API-KEY": apiKey,
      },
    },
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch function time series data: ${response.status} ${response.statusText}`,
    );
  }

  return await response.json();
}
