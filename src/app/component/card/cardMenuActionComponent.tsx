import type { Card as CardData } from '../../store/card'
import { removeCard, toggleCard } from '@/app/store/card.reducer'
import { ActionIcon, Menu, Portal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconDots, IconEdit, IconThumbDown, IconThumbUp, IconTrash } from '@tabler/icons-react'
import React from 'react'
import { useDispatch } from 'react-redux'

const ModalEditor = React.lazy(() => import('../modal/editor/modalEditor'))

interface CardMenuActionComponentProps {
  card: CardData
}

export const CardMenuActionComponent: React.FC<CardMenuActionComponentProps> = ({
  card,
}) => {
  const dispatch = useDispatch()
  const [openCardEditor, handleCardEditor] = useDisclosure()

  const removeCardHandler = () => {
    dispatch(removeCard({ id: card.id }))
  }

  const isDoneHandler = () => {
    dispatch(toggleCard({ id: card.id }))
  }

  const editHandler = () => {
    handleCardEditor.open()
  }

  return (
    <>
      <Menu withinPortal position="bottom-end" shadow="sm">
        <Menu.Target>
          <ActionIcon variant="subtle" color="gray">
            <IconDots size={16} />
          </ActionIcon>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item leftSection={<IconEdit size={14} />} onClick={editHandler}>
            Edit
          </Menu.Item>

          {card.isDone
            ? (
                <Menu.Item
                  leftSection={<IconThumbDown size={14} />}
                  onClick={isDoneHandler}
                >
                  {`Set as "Todo"`}
                </Menu.Item>
              )
            : (
                <Menu.Item
                  leftSection={<IconThumbUp size={14} />}
                  onClick={isDoneHandler}
                >
                  {`Set as "Done"`}
                </Menu.Item>
              )}

          <Menu.Item
            leftSection={<IconTrash size={14} />}
            onClick={removeCardHandler}
            color="red"
          >
            Delete
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
      <Portal>
        <ModalEditor
          modalHandler={handleCardEditor}
          editCard={card}
          isOpen={openCardEditor}
        >
        </ModalEditor>
      </Portal>
    </>
  )
}
