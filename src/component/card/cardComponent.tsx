'use client'

import type { Card as CardData } from '../../model/card'
import { Card, Group, Pill, Text, Title } from '@mantine/core'
import React, { useMemo } from 'react'
import { CardMenuActionComponent } from './cardMenuActionComponent'

export interface CardComponentProps {
  card: CardData
}

const CardComponent: React.FC<CardComponentProps> = ({ card }) => (
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

        <Pill.Group>
          {(card.badges || []).map((tag) => (
            <Pill key={tag}>{tag}</Pill>
          ))}
        </Pill.Group>

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
)

export default CardComponent
