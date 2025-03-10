import { Paper, Stack, Title } from '@mantine/core'
import Sort from './sort'
import { AllActions } from './allActions'
import BadgesFilter from './badgesFilter'
import StatBadges from './statBadges'
import StatDoneNotDone from './statDoneNotDone'


export const Navbar: React.FC = () => (
  <Stack>
      <StatDoneNotDone />
      <StatBadges />
      <BadgesFilter />
      <Paper hiddenFrom='sm'>
        <Title size="xl">Actions</Title>
        <Sort />
        <AllActions />
      </Paper>
  </Stack>
)
