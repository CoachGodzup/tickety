import { Button, Title, Text, ButtonGroup, Card } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { ActionButtonProps } from './actionButtonMobile'

const CoreActionButton = ({ icon, label, handleClick }: ActionButtonProps) => (
  <Button variant="light" leftSection={icon} onClick={handleClick} px={10}>
    {label}
  </Button>
)

const PopoverActionButton = ({
  icon,
  label,
  handleClick,
  confirmPopover,
}: ActionButtonProps) => {
  const [opened, { open, close }] = useDisclosure()
  return opened && confirmPopover ? (
    <Card>
      <Title order={3}>{label}</Title>
      <Text pb="lg">{confirmPopover.text}</Text>
      <ButtonGroup>
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
      </ButtonGroup>
    </Card>
  ) : (
    <CoreActionButton icon={icon} label={label} handleClick={open} />
  )
}

export const ActionButtonSidebar: React.FC<ActionButtonProps> = (props) =>
  props.confirmPopover ? (
    <PopoverActionButton {...props} />
  ) : (
    <CoreActionButton {...props} />
  )
