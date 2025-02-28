import { Flex, Stack } from '@mantine/core'
import { ActionButtonProps, ActionButtonMobile } from './actionButtonMobile'
import { ActionButtonSidebar } from './actionButtonSidebar'

type ActionGroupProps = {
  buttons: ActionButtonProps[]
}

export const ActionGroup: React.FC<ActionGroupProps> = ({ buttons }) => {
  return (
    <>
      <Flex visibleFrom="sm" gap="md">
        {buttons.map((button, i) => (
          <ActionButtonMobile key={button.label} {...button} />
        ))}
      </Flex>
      <Stack hiddenFrom="sm" gap="md">
        {buttons.map((button, i) => (
          <ActionButtonSidebar key={button.label} {...button} />
        ))}
      </Stack>
    </>
  )
}
