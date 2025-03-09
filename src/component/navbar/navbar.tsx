import { Paper, Stack, Title } from '@mantine/core'
import Sort from './sort'
import StatDoneNotDone from './statDoneNotDone'
import { AllActions } from './allActions'
import StatBadges from './statBadges'

export const Navbar: React.FC = () => (
  <Stack>
    <StatDoneNotDone></StatDoneNotDone>
    <StatBadges></StatBadges>
    <Title size="xl">Actions</Title>
    <Sort></Sort>
    <Paper hiddenFrom='sm'>
      <AllActions />
    </Paper>
  </Stack>
)
