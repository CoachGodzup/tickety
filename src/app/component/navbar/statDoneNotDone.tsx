import type { Card as CardData } from '@/app/store/card'
import type { RootState } from '@/app/store/root.store'
import { ColorSwatch, Group, Stack, Title } from '@mantine/core'

import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { useSelector } from 'react-redux'

const COLORS = {
  DONE: 'rgba(75, 192, 192, 0.8)',
  TODO: 'rgba(255, 99, 132, 0.8)',
}

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend)

const StatDoneNotDone: React.FC = () => {
  const cards: CardData[] = useSelector((state: RootState) => state.cards.cards)

  // Count todos and not todos
  const todoCount = cards.filter(card => card.isDone).length
  const notTodoCount = cards.filter(card => !card.isDone).length

  const data = {
    labels: ['Completed', 'Not Completed'],
    datasets: [
      {
        data: [todoCount, notTodoCount],
        backgroundColor: [
          COLORS.DONE,
          COLORS.TODO,
        ],
        borderColor: [COLORS.DONE, COLORS.TODO],
        borderWidth: 1,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  }

  return (
    <Stack>
      <Title size="xl">Task Status</Title>
      <div style={{ width: '200px', height: '200px' }}>
        <Doughnut data={data} options={options} />
      </div>
      <Group>
        <ColorSwatch color={COLORS.DONE} />
        Completed
      </Group>
      <Group>
        <ColorSwatch color={COLORS.TODO} />
        Not Completed
      </Group>
    </Stack>

  )
}

export default StatDoneNotDone
