'use client'

import type { Card } from '../../model/card'
import type { RootState } from '../../store/root.store'
import { Flex } from '@mantine/core'
import React, { Suspense, useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'
import CardComponent from '../card/cardComponent'
import { useFilterStore } from '@/store/filter.store.zustand'

const CardList: React.FC = () => {
  const cards: Card[] = useSelector((state: RootState) => state.cards).cards
  const filterList = useFilterStore((state) => state.filterList)

  useEffect(() => {
    console.log('CardList rendered', cards)
  }, [cards])
    
  const cardListElements = useMemo(
    () => cards
      .filter((card) => filterList.length === 0 || filterList.every(filter => card.badges?.includes(filter)))
      .map((card) => <CardComponent key={card.id} card={card} />),
    [cards, filterList]
  )

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {cardListElements.length === 0 && <div>No cards found</div>}
      <Flex gap="md" rowGap="md" columnGap="md" wrap="wrap" direction="row">
        {cardListElements}
      </Flex>
    </Suspense>
  )
}

export default CardList
