'use client'

import { Button } from '@mantine/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { sortCard } from './../../store/card.reducer'

const Sort: React.FC = () => {
  const [isAsc, setAsc] = useState(true)
  const dispatch = useDispatch()

  const handleSort = () => {
    dispatch(sortCard({ asc: isAsc }))
    setAsc(!isAsc)
  }
  return <Button onClick={handleSort}>Sort cards</Button>
}

export default Sort
