import { Affix, Button } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";

interface CreateCardButtonProps {
  onClick: () => void;
}

export const CreateCardButton: React.FC<CreateCardButtonProps> = ({onClick}) => (
  <Affix bottom={50} right={0}>
    <Button
      leftSection={<IconPlus size={14} />}
      size="xl"
      onClick={onClick}
      style={{ margin: '1em' }}
    >
      Create Card
    </Button>
  </Affix>
)

