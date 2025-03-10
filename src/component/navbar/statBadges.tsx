import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Chart } from 'react-chartjs-2'
import { RootState } from '../../store/root.store'
import {
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import ChartJS from 'chart.js/auto'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const StatBadges: React.FC = () => {
  const badges = useSelector((state: RootState) => state.cards.badges)
  const [badgeData, setBadgeData] = useState<{ [key: string]: number }>({})

  useEffect(() => {
    const badgeCount: { [key: string]: number } = { ...badges }
    const sortedBadges = Object.entries(badgeCount)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {})

    setBadgeData(sortedBadges)
  }, [badges])

  const data = {
    labels: Object.keys(badgeData),
    datasets: [
      {
        label: 'Badge Count',
        data: Object.values(badgeData),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Top 5 Most Common Badges',
      },
    },
  }

  return (
    <>
      <Chart type="bar" data={data} options={options} />
      {/*<pre>{JSON.stringify(badges)}</pre>*/}
    </>
  )
}

export default StatBadges
