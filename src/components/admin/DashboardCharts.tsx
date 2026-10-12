"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function DashboardCharts({
  monthly,
}: {
  monthly: { month: string; count: number }[];
}) {
  const options = useMemo(
    () => ({
      chart: {
        toolbar: { show: false },
        fontFamily: "inherit",
      },
      stroke: { curve: "smooth" as const, width: 3 },
      colors: ["#465fff"],
      dataLabels: { enabled: false },
      xaxis: {
        categories: monthly.map((m) => m.month),
        labels: { style: { colors: "#98a2b3" } },
        axisBorder: { show: false },
        axisTicks: { show: false },
      },
      yaxis: {
        labels: { style: { colors: "#98a2b3" } },
        min: 0,
        forceNiceScale: true,
      },
      grid: {
        borderColor: "#e4e7ec",
        strokeDashArray: 4,
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.35,
          opacityTo: 0.05,
        },
      },
      tooltip: { theme: "light" as const },
    }),
    [monthly],
  );

  const series = useMemo(
    () => [{ name: "Inquiries", data: monthly.map((m) => m.count) }],
    [monthly],
  );

  if (monthly.length === 0) {
    return (
      <div className="flex h-72 items-center justify-center text-sm text-gray-500">
        No inquiry data yet
      </div>
    );
  }

  return (
    <Chart options={options} series={series} type="area" height={288} />
  );
}
