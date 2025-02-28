import { Paper, Stack, Title } from '@mantine/core'
import Sort from './sort'
import StatDoneNotDone from './statDoneNotDone'
import { AllActions } from './allActions'

export const Navbar: React.FC = () => (
  <Stack>
    <StatDoneNotDone></StatDoneNotDone>
    <Title size="xl">Actions</Title>
    <Sort></Sort>
    <Paper hiddenFrom='sm'>
      <AllActions />
    </Paper>
  </Stack>
)
