'use client'

import React, { useMemo } from 'react'
import { Card as CardData } from '../store/card'
import { Card, Group, Title, Text, Menu, ActionIcon } from '@mantine/core'
import { useDispatch } from 'react-redux'
import { removeCard, toggleCard } from '../store/card.reducer'
import { IconDots, IconThumbUp, IconTrash } from '@tabler/icons-react'

interface CardComponentProps {
  card: CardData
}

type CardMenuActionComponentProps = CardComponentProps

const CardMenuActionComponent: React.FC<CardMenuActionComponentProps> = ({
  card,
}) => {
  const dispatch = useDispatch()

  const removeCardHandler = () => {
    dispatch(removeCard({ id: card.id }))
  }

  const isDoneHandler = () => {
    dispatch(toggleCard({ id: card.id }))
  }

  return (
    <Menu withinPortal position="bottom-end" shadow="sm">
      <Menu.Target>
        <ActionIcon variant="subtle" color="gray">
          <IconDots size={16} />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
          leftSection={<IconThumbUp size={14} />}
          onClick={isDoneHandler}
        >
          {`Set as "Done"`}
        </Menu.Item>
        <Menu.Item
          leftSection={<IconTrash size={14} />}
          onClick={removeCardHandler}
          color="red"
        >
          Delete
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}

const CardComponent: React.FC<CardComponentProps> = ({ card }) => {
  return useMemo(
    () => (
      <Card
        withBorder
        shadow="sm"
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
      </Card>
    ),
    [card]
  )
}

export default CardComponent
