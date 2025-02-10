import type { EditorProps } from './editor'
import { Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import React, { useEffect } from 'react'

const Editor = React.lazy(() => import('./editor'))

interface ModalEditorProps extends EditorProps {
    isOpen: boolean 
}

export const ModalEditor: React.FC<ModalEditorProps> = ({ onSubmit, editCard, isOpen }) => {
  const [openCardEditor, handleCardEditor] = useDisclosure(isOpen)

  useEffect(() => {
    isOpen ? handleCardEditor.open() : handleCardEditor.close()
  }, [])

  const onSubmitWithModalHandler = () => {
    if (onSubmit) {
      onSubmit()
    }
    handleCardEditor.close()
  }

  return (
    <Modal
      opened={openCardEditor}
      onClose={handleCardEditor.close}
      title= {editCard ? "Edit Card" : "Create Card"}
    >
      <Modal.Body>
        <Editor onSubmit={onSubmitWithModalHandler} editCard={editCard}></Editor>
      </Modal.Body>
    </Modal>
  )
}

export default ModalEditor