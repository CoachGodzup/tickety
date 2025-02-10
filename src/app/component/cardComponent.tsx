'use client'

import type { Card as CardData } from './../store/card'
import { ActionIcon, Card, Group, Menu, Modal, Portal, Text, Title } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconDots, IconEdit, IconThumbDown, IconThumbUp, IconTrash } from '@tabler/icons-react'
import React, { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { removeCard, toggleCard } from './../store/card.reducer'
import CardEditor from './modal/editor/editor'

interface CardComponentProps {
  card: CardData
}

type CardMenuActionComponentProps = CardComponentProps

const CardMenuActionComponent: React.FC<CardMenuActionComponentProps> = ({
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

  const modalCardEditor = (
    <Modal
      opened={openCardEditor}
      onClose={handleCardEditor.close}
      title="Edit Card"
    >
      <Modal.Body>
        <CardEditor editCard={card}></CardEditor>
      </Modal.Body>
    </Modal>
  )

  return (
    <>
      <Menu withinPortal position="bottom-end" shadow="sm">
        <Menu.Target>
          <ActionIcon variant="subtle" color="gray">
            <IconDots size={16} />
          </ActionIcon>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item
            leftSection={<IconEdit size={14} />}
            onClick={editHandler}
          >
            Edit
          </Menu.Item>

          {
            card.isDone
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
                )
          }

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
        {modalCardEditor}
      </Portal>
    </>

  )
}

const CardComponent: React.FC<CardComponentProps> = ({ card }) => {
  return useMemo(
    () => (
      <Card
        withBorder
        shadow="sm"
        padding={20}
        style={{ width: 340, height: 400, overflow: 'auto', margin: 'auto' }}
      >
        <Card.Section p={20}>
          <Group justify="space-between">
            <Title
              style={{ textDecoration: card.isDone ? 'line-through' : 'none' }}
            >
              {card.title}
            </Title>
            <CardMenuActionComponent card={card} />
          </Group>
        </Card.Section>
        <Text
          size="sm"
          style={{ textDecoration: card.isDone ? 'line-through' : 'none' }}
        >
          {card.body}
        </Text>
        <pre>{card.id}</pre>
      </Card>
    ),
    [card],
  )
}

export default CardComponent
