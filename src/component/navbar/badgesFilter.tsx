'use client'

import { useFilterStore } from '@/store/filter.store.zustand'
import { RootState } from '@/store/root.store'
import { Chip, Flex } from '@mantine/core'
import { Suspense } from 'react'
import { useSelector } from 'react-redux'

export const BadgesFilter: React.FC = () => {
  const badges = useSelector((state: RootState) => state.cards.badges) || []
  const filterStore = useFilterStore((state) => state)

  const changeFilter = (badge: string) => {
    filterStore.toggleFilter(badge)
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Flex wrap={'wrap'} gap={'xs'}>
        {Object.keys(badges).map((badge) => (
          <Chip
            variant="outline"
            key={badge}
            color="blue"
            onChange={() => changeFilter(badge)}
          >
            {badges[badge]} {badge}
          </Chip>
        ))}
      </Flex>
    </Suspense>
  )
}

export default BadgesFilter
