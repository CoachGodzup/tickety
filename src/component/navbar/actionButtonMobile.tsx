import {
  Button,
  Popover,
  Title,
  Tooltip,
  VisuallyHidden,
  Text,
  Flex,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

export type ActionButtonProps = {
  icon: React.ReactNode
  label: string
  handleClick: () => void
  confirmPopover?: {
    text: string
    confirmLabel: string
    abortLabel: string
  }
}

const TooltipActionButton = ({
  icon,
  label,
  handleClick,
}: ActionButtonProps) => (
  <Tooltip label={label}>
    <Button variant="transparent" onClick={handleClick} px={10}>
      {icon}
      <VisuallyHidden>{label}</VisuallyHidden>
    </Button>
  </Tooltip>
)

const PopoverActionButton = ({
  icon,
  label,
  handleClick,
  confirmPopover,
}: ActionButtonProps) => {
  const [opened, { open, close }] = useDisclosure()
  return (
    <Popover
      width={200}
      position="bottom"
      withArrow
      shadow="md"
      opened={opened}
    >
      <Popover.Target>
        <Button variant="transparent" onClick={open} px={10}>
          {icon}
          <VisuallyHidden>{label}</VisuallyHidden>
        </Button>
      </Popover.Target>
      {confirmPopover && (
        <Popover.Dropdown>
          <Title order={3}>{label}</Title>
          <Text pb="lg">{confirmPopover.text}</Text>
          <Flex gap="md" justify={'space-between'}>
            <Button variant="subtle" onClick={close}>
              {confirmPopover.abortLabel}
            </Button>
            <Button
              onClick={() => {
                handleClick()
                close()
              }}
            >
              {confirmPopover.confirmLabel}
            </Button>
          </Flex>
        </Popover.Dropdown>
      )}
    </Popover>
  )
}

export const ActionButtonMobile: React.FC<ActionButtonProps> = (props) =>
  props.confirmPopover ? (
    <PopoverActionButton {...props} />
  ) : (
    <TooltipActionButton {...props} />
  )
