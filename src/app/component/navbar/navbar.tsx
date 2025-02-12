import { Stack } from '@mantine/core'
import Sort from './sort'
import StatDoneNotDone from './statDoneNotDone'

export const Navbar: React.FC = () => (
  <Stack>
    <StatDoneNotDone></StatDoneNotDone>
    <Sort></Sort>
  </Stack>
)
