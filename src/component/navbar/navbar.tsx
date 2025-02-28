import { Stack, Title } from '@mantine/core'
import Sort from './sort'
import StatDoneNotDone from './statDoneNotDone'
import { Download } from './download'

export const Navbar: React.FC = () => (
  <Stack>
    <StatDoneNotDone></StatDoneNotDone>
    <Title size="xl">Actions</Title>
    <Sort></Sort>
  </Stack>
)
