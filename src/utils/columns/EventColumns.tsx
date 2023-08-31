import { TableColumn } from 'models/common'

export const eventColumns: readonly TableColumn<any>[] = [
  {
    id: 'actions',
    label: '',
    minWidth: 85,
    align: 'left',
    sticky: {
      position: 'sticky',
      left: 0,
      zIndex: 9,
    },
  },
  {
    id: 'timestamp',
    label: 'Timestamp',
    minWidth: 85,
    align: 'center',
  },
  {
    id: 'event',
    label: 'Event',
    minWidth: 110,
    align: 'center',
  },
  {
    id: 'teamName',
    label: 'Team name',
    minWidth: 100,
    align: 'center',
  },
  {
    id: 'playerName',
    label: 'Player name',
    minWidth: 120,
    align: 'center',
  },
  {
    id: 'passReceipt',
    label: 'Pass receipt',
    minWidth: 120,
    align: 'center',
  },
  {
    id: 'location',
    label: 'Location',
    minWidth: 80,
    align: 'center',
  },
  {
    id: 'endLocation',
    label: 'End location',
    minWidth: 100,
    align: 'center',
  },
  {
    id: 'outcome',
    label: 'Outcome',
    minWidth: 80,
    align: 'right',
  },
]