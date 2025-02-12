import { sortCard } from '@/app/store/card.reducer'
import { Button } from '@mantine/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

interface SortProps {}

const Sort: React.FC<SortProps> = () => {
  const [isAsc, setAsc] = useState(true)
  const dispatch = useDispatch()

  const handleSort = () => {
    dispatch(sortCard({ asc: isAsc }))
    setAsc(!isAsc)
  }
  return <Button onClick={handleSort}>Sort cards</Button>
}

export default Sort
