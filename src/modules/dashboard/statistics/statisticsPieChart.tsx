'use client'

import { useEffect, useRef } from 'react'

const options = {
  series: [30, 26, 35, 28],
  chart: {
    width: '100%',
    type: 'polarArea',
  },
  labels: ['Entertainment', 'Bill Expense', 'Others', 'Investment'],
  fill: {
    opacity: 1,
  },
  stroke: {
    width: 6,
    colors: ['#fff'],
  },
  yaxis: {
    show: false,
  },
  plotOptions: {
    polarArea: {
      rings: {
        strokeWidth: 0,
      },
      spokes: {
        strokeWidth: 0,
      },
    },
  },
  theme: {
    monochrome: {
      enabled: false,
    },
  },
  colors: ['#343C6A', '#FC7900', '#232323', '#396AFF'],
  legend: {
    labels: {
      colors: '#718EBF',
      fontFamily: 'Inter, sans-serif',
    },
  },
}

export const StatisticsPieChart = () => {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (chartRef.current && typeof window !== 'undefined') {
      import('apexcharts').then((ApexChartsModule) => {
        const charts = document.querySelectorAll(
          '.statistics .apexcharts-canvas',
        )

        if (charts.length > 0) return

        const ApexCharts = ApexChartsModule.default
        const chart = new ApexCharts(chartRef.current, options)
        chart.render()
      })
    }
  }, [])

  return (
    <div className='statistics h-full w-full'>
      <div ref={chartRef} />
    </div>
  )
}
