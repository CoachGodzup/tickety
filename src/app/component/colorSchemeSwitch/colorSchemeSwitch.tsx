import { Switch, useMantineColorScheme } from '@mantine/core'
import { IconMoonStars, IconSun } from '@tabler/icons-react'

export const ColorSchemeSwitch: React.FC = () => {
  const { toggleColorScheme } = useMantineColorScheme()

  return (
    <Switch
      value="light"
      onChange={toggleColorScheme}
      onLabel={<IconSun size={16} stroke={2.5} color="var(--mantine-color-yellow-4)" />}
      offLabel={<IconMoonStars size={16} stroke={2.5} color="var(--mantine-color-blue-6)" />}
    >
    </Switch>
  )
}
