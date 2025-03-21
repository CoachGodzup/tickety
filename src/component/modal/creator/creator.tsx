'use client'

import type { EditorProps } from '../editor/editor'
import { Modal, Portal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import React, { Suspense } from 'react'
import { CreateCardButton } from './createCardButton'

const Editor = React.lazy(() => import('../editor/editor'))

type CreatorProps = EditorProps

export const Creator: React.FC<CreatorProps> = ({ onSubmit }) => {
  const [openCardEditor, handleCardEditor] = useDisclosure()

  const onSubmitWithModalHandler = () => {
    if (onSubmit) {
      onSubmit()
    }
    handleCardEditor.close()
  }

  return (
    <Portal>
      {openCardEditor ? (
        <></>
      ) : (
        <CreateCardButton onClick={handleCardEditor.open} />
      )}
      <Modal
        opened={openCardEditor}
        onClose={handleCardEditor.close}
        withOverlay
        title="Create Card"
      >
        <Modal.Body>
          <Suspense fallback="Loading...">
            <Editor onSubmit={onSubmitWithModalHandler}></Editor>
          </Suspense>
        </Modal.Body>
      </Modal>
    </Portal>
  )
}
