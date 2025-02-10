'use client'

import type { Card } from '../../store/card'
import { Button, Container, Textarea, TextInput } from '@mantine/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { addCard, editCard as editCardAction } from '../../store/card.reducer'

export interface CardEditorProps {
  modalHandler: {
    readonly open: () => void
    readonly close: () => void
    readonly toggle: () => void
  }
  editCard?: Card
}

const CardEditor: React.FC<CardEditorProps> = ({ modalHandler, editCard }) => {
  const [title, setTitle] = useState(editCard ? editCard.title : '')
  const [body, setBody] = useState(editCard ? editCard.body : '')
  const dispatch = useDispatch()

  const resetForm = () => {
    setTitle('')
    setBody('')
  }

  const handleEditCard = () => {
    dispatch(editCardAction({ ...editCard as Card, title, body }))
  }

  const handleNewCard = () => {
    const newCard = {
      id: uuidv4(),
      title,
      body,
      isDone: false,
    }
    dispatch(addCard(newCard))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    editCard ? handleNewCard() : handleEditCard()
    resetForm()
    modalHandler.close()
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Title"
          type="text"
          id="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <Textarea
          label="Body"
          id="body"
          value={body}
          onChange={e => setBody(e.target.value)}
        />
        <Container style={{ paddingTop: '1em', paddingLeft: '0' }}>
          <Button type="submit">{editCard ? 'Edit Card' : 'Add Card'}</Button>
        </Container>
      </form>
    </Container>
  )
}

export default CardEditor
