import { ActionIcon, Affix, Button, em } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { IconEdit, IconPlus } from '@tabler/icons-react'

interface CreateCardButtonProps {
  onClick: () => void
}

export const CreateCardButton: React.FC<CreateCardButtonProps> = ({
  onClick,
}) => {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`)

  return (
    <Affix bottom={70} right={10}>
      <Button
        visibleFrom="sm"
        leftSection={<IconPlus size={14} />}
        size="xl"
        variant=""
        onClick={onClick}
        style={{ margin: '1em' }}
      >
        Create Card
      </Button>
      <ActionIcon hiddenFrom="sm" size={'xl'} onClick={onClick}>
        <IconEdit />
      </ActionIcon>
    </Affix>
  )
}
