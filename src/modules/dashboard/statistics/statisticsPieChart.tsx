'use client'

import { useEffect, useRef } from 'react'
import type { Statistics } from './statisticsTypes'

const baseOptions = {
  series: [] as number[],
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

type Props = {
  statistics: Statistics[]
}

export const StatisticsPieChart = ({ statistics }: Props) => {
  const chartRef = useRef<HTMLDivElement>(null)
  // biome-ignore lint/suspicious/noExplicitAny: Not sure what type is it atm..
  const chartInstance = useRef<any>(null)

  useEffect(() => {
    if (chartRef.current && typeof window !== 'undefined') {
      import('apexcharts').then((ApexChartsModule) => {
        const charts = document.querySelectorAll(
          '.statistics .apexcharts-canvas',
        )

        if (charts.length > 0) return

        const ApexCharts = ApexChartsModule.default
        chartInstance.current = new ApexCharts(chartRef.current, {
          ...baseOptions,
          series: statistics.map((stat) => stat.value / 100),
        })
        chartInstance.current.render()
      })
    }
  }, [statistics])

  useEffect(() => {
    if (chartInstance.current) {
      const newSeries = statistics.map((stat) => stat.value / 100)
      chartInstance.current.updateSeries(newSeries)
    }
  }, [statistics])

  return (
    <div className='statistics h-full w-full'>
      <div ref={chartRef} />
    </div>
  )
}
