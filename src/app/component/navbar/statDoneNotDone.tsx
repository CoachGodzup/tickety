import type { Card as CardData } from '@/app/store/card'
import type { RootState } from '@/app/store/root.store'

import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { useSelector } from 'react-redux'

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend)

const StatDoneNotDone: React.FC = () => {
  const cards: CardData[] = useSelector((state: RootState) => state.cards.cards)

  // Count todos and not todos
  const todoCount = cards.filter((card) => card.isDone).length
  const notTodoCount = cards.filter((card) => !card.isDone).length

  const data = {
    labels: ['Completed', 'Not Completed'],
    datasets: [
      {
        data: [todoCount, notTodoCount],
        backgroundColor: [
          'rgba(75, 192, 192, 0.8)', // green for completed
          'rgba(255, 99, 132, 0.8)', // red for not completed
        ],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      title: {
        display: true,
        text: 'Tasks Status',
      },
    },
  }

  return (
    <div style={{ width: '200px', height: '200px' }}>
      <Doughnut data={data} options={options} />
    </div>
  )
}

export default StatDoneNotDone
