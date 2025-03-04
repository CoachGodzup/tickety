import { loadFile, saveFile } from '../../service/file'
import { resetCards, uploadCards } from '../../store/card.reducer'
import { RootState } from '../../store/root.store'
import { IconDownload, IconTrash, IconUpload } from '@tabler/icons-react'
import { useDispatch, useSelector } from 'react-redux'
import { ActionGroup } from './actionGroup'

export const AllActions: React.FC = () => {
  const store = useSelector((state: RootState) => state.cards)
  const dispatch = useDispatch()

  const buttons = [
    {
      icon: <IconTrash />,
      label: 'Reset',
      confirmPopover: {
        text: 'Are you sure you want to reset all cards?',
        confirmLabel: 'Yes',
        abortLabel: 'No',
      },
      handleClick: () => dispatch(resetCards()),
    },
    {
      icon: <IconDownload />,
      label: 'Download',
      handleClick: () => saveFile(store, `tickety-${Date.now()}`),
    },
    {
      icon: <IconUpload />,
      label: 'Upload',
      handleClick: () =>
        loadFile((cards) => {
          dispatch(uploadCards(cards || []))
        }),
    },
  ]

  return <ActionGroup buttons={[...buttons]} />
}
