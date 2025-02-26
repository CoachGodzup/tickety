import type { EditorProps } from './editor'
import { Modal } from '@mantine/core'
import React, { Suspense } from 'react'

const Editor = React.lazy(() => import('./editor'))

interface ModalEditorProps extends EditorProps {
  modalHandler: {
    readonly open: () => void
    readonly close: () => void
    readonly toggle: () => void
  }
  isOpen: boolean
}

export const ModalEditor: React.FC<ModalEditorProps> = ({
  onSubmit,
  editCard,
  modalHandler,
  isOpen,
}) => {
  const onSubmitWithModalHandler = () => {
    if (onSubmit) {
      onSubmit()
    }
    modalHandler.close()
  }

  return (
    <Modal
      opened={isOpen}
      withOverlay
      onClose={modalHandler.close}
      title="Edit Card"
    >
      <Modal.Body>
        <Suspense fallback="Loading...">
          <Editor
            onSubmit={onSubmitWithModalHandler}
            editCard={editCard}
          >
          </Editor>
        </Suspense>
      </Modal.Body>
    </Modal>
  )
}

export default ModalEditor
