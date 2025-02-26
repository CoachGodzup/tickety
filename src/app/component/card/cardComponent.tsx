import type { Card as CardData } from '../../store/card'
import { Card, Group, Text, Title } from '@mantine/core'
import React, { useMemo } from 'react'
import { CardMenuActionComponent } from './cardMenuActionComponent'

export interface CardComponentProps {
  card: CardData
}

const CardComponent: React.FC<CardComponentProps> = ({ card }) => {
  return useMemo(
    () => (
      <Card
        withBorder
        shadow="sm"
        p={20}
        style={{
          width: 340,
          height: 400,
          overflow: 'auto',
          margin: 'auto',
          opacity: card.isDone ? 0.5 : 1,
        }}
      >
        <Card.Section withBorder p={20}>
          <Group justify="space-between">
            <Title
              size="xl"
              style={{ textDecoration: card.isDone ? 'line-through' : 'none' }}
              c={card.isDone ? 'dimmed' : 'normal'}
            >
              {card.title}
            </Title>
            <CardMenuActionComponent card={card} />
          </Group>
        </Card.Section>
        <Card.Section
          p={20}
          style={{ wordBreak: 'break-word', overflow: 'hidden' }}
        >
          <Text
            size="sm"
            style={{ textDecoration: card.isDone ? 'line-through' : 'none' }}
          >
            {card.body}
          </Text>
        </Card.Section>
      </Card>
    ),
    [card],
  )
}

export default CardComponent
