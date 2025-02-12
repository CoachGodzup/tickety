import { Stack, Title } from '@mantine/core'
import Sort from './sort'
import StatDoneNotDone from './statDoneNotDone'

export const Navbar: React.FC = () => (
  <Stack>
    <StatDoneNotDone></StatDoneNotDone>
    <Title size="xl">Actions</Title>
    <Sort></Sort>
  </Stack>
)
