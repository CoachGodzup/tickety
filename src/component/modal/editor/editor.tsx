'use client'

import type { Card } from '../../../model/card'
import { Button, Container, MantineColor, Pill, PillsInput, Textarea, TextInput } from '@mantine/core'
import React, { KeyboardEventHandler, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import {
  addCard,
  editCard as editCardAction,
} from '../../../store/card.reducer'

export interface EditorProps {
  onSubmit?: () => void
  editCard?: Card
}

const Editor: React.FC<EditorProps> = ({ onSubmit, editCard }) => {
  const [title, setTitle] = useState(editCard ? editCard.title : '')
  const [body, setBody] = useState(editCard ? editCard.body : '')
  const [color, setColor] = useState<MantineColor | undefined>(editCard?.color || undefined)
  const [badges, setBadges] = useState<string[]>(editCard?.badges || [])
  const tagInputRef = useRef<HTMLInputElement>(null)
  const dispatch = useDispatch()

  const resetForm = () => {
    setTitle('')
    setBody('')
    setColor(undefined)
    setBadges([])
  }

  const handleEditCard = () => {
    dispatch(editCardAction({ ...(editCard as Card), title, body, color, badges }))
  }

  const handleNewCard = () => {
    const newCard = {
      id: uuidv4(),
      title,
      body,
      isDone: false,
      color: undefined,
      badges: badges,
    }
    dispatch(addCard(newCard))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if(tagInputRef.current && tagInputRef.current?.value !== '') {
      setBadges([...badges, tagInputRef.current.value]);
    }
    if (editCard) {
      handleEditCard()
    } else {
      handleNewCard()
    }
    resetForm()
    if (onSubmit) {
      onSubmit()
    }
  }

  const handleBadgesBlur = () => {
    if(tagInputRef.current && tagInputRef.current?.value !== '') {
      setBadges([...badges, tagInputRef.current.value]);
      tagInputRef.current.value = '';
    }
  }

  const handleBadges: KeyboardEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();

    switch(e.key) {
      case ' ':
      case ',':
      case 'Enter':
        const tag = e.currentTarget.value.trim().toLowerCase();
        if(tag !== '') {
          setBadges([...badges, tag]);
        }
        e.currentTarget.value = '';
        break;
      case 'Backspace':
        if (e.currentTarget.value === '' && badges.length > 0) {
          const lastTag = badges[badges.length - 1];

          setBadges(badges.slice(0, -1));
          e.currentTarget.value = lastTag;
          break;
        }
      default:
        break;
    }
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Title"
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          label="Body"
          id="body"
          value={body}
          rows={7}
          onChange={(e) => setBody(e.target.value)}
        />
        <PillsInput
          label="Badges">
          <Pill.Group>
            {badges.map((tag) => (
              <Pill key={tag}>{tag}</Pill>
            ))}
            <PillsInput.Field ref={tagInputRef} aria-label="Badges" onBlur={handleBadgesBlur} onKeyUp={handleBadges} placeholder="Enter badges" />
          </Pill.Group>
        </PillsInput>
        <Container style={{ paddingTop: '1em', paddingLeft: '0' }}>
          <Button type="submit">{editCard ? 'Edit Card' : 'Add Card'}</Button>
        </Container>
      </form>
    </Container>
  )
}

export default Editor
