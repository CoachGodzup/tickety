'use client'

import type { Card } from '../../store/card'
import type { RootState } from '../../store/root.store'
import { Flex } from '@mantine/core'
import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import CardComponent from './../cardComponent'

const CardList: React.FC = () => {
  const cards: Card[] = useSelector((state: RootState) => state.cards.cards)

  const cardListElements = useMemo(
    () => cards.map(card => <CardComponent key={card.id} card={card} />),
    [cards],
  )

  return (
    <Flex gap="md" rowGap="md" columnGap="md" wrap="wrap">
      {cardListElements}
    </Flex>
  )
}

export default CardList
