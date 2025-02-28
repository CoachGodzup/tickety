import { Switch, useMantineColorScheme } from '@mantine/core'
import { IconMoon, IconSun } from '@tabler/icons-react'

export const ColorSchemeSwitch: React.FC = () => {
  const { toggleColorScheme } = useMantineColorScheme()

  return (
    <Switch
      value="light"
      size="xl"
      onChange={toggleColorScheme}
      onLabel={
        <IconSun size={20} stroke={2.5} color="var(--mantine-color-yellow-4)" />
      }
      offLabel={
        <IconMoon size={20} stroke={2.5} color="var(--mantine-color-blue-6)" />
      }
    ></Switch>
  )
}
