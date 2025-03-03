'use client'

import { useEffect, useRef } from 'react'

const options = {
  chart: {
    height: '100%',
    maxWidth: '100%',
    type: 'area',
    fontFamily: 'Inter, sans-serif',

    dropShadow: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    enabled: false,
    x: {
      show: false,
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.5,
      opacityTo: 0,
      shade: '#2D60FF',
      gradientToColors: ['#2D60FF'],
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 6,
  },
  grid: {
    show: true,
    strokeDashArray: 4,
    xaxis: {
      lines: {
        show: true,
      },
    },
    padding: {
      left: 12,
      right: 0,
      top: 0,
    },
  },
  series: [
    {
      name: 'New users',
      data: [140, 450, 790, 200, 580, 230, 620],
      color: '#1814F3',
    },
  ],
  xaxis: {
    categories: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
    labels: {
      show: true,
      style: {
        colors: '#718EBF',
        fontFamily: 'Inter, sans-serif',
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: true,
      style: {
        colors: '#718EBF',
        fontFamily: 'Inter, sans-serif',
      },
    },
  },
}

export const HistoryChart = () => {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (chartRef.current && typeof window !== 'undefined') {
      import('apexcharts').then((ApexChartsModule) => {
        const charts = document.querySelectorAll('.apexcharts-canvas')

        if (charts.length > 0) return

        const ApexCharts = ApexChartsModule.default
        const chart = new ApexCharts(chartRef.current, options)
        chart.render()
      })
    }
  }, [])

  return <div ref={chartRef} />
}
