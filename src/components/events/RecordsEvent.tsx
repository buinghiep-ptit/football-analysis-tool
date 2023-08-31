import React from 'react'
import MuiTable from 'components/common/MuiTable'
import { eventColumns } from 'utils/columns/EventColumns'
import { useInView } from 'react-intersection-observer'
import { useScale } from 'store'

const DATA = [
  {
    timestamp: '00:20:01',
    event: 'Half start',
    teamName: 'CAHN FC',
    playerName: 'Quang Hải',
    passReceipt: 'Văn toản',
    location: '20,21',
    endLocation: '21,22',
    outcome: 'Success',
    inprogress: true,
  },
  {
    timestamp: '00:20:01',
    event: 'Half start',
    teamName: 'CAHN FC',
    playerName: 'Quang Hải',
    passReceipt: 'Văn toản',
    location: '20,21',
    endLocation: '21,22',
    outcome: 'Success',
    inprogress: true,
  },
  {
    timestamp: '00:20:01',
    event: 'Half start',
    teamName: 'CAHN FC',
    playerName: 'Quang Hải',
    passReceipt: 'Văn toản',
    location: '20,21',
    endLocation: '21,22',
    outcome: 'Success',
    inprogress: false,
  },
  {
    timestamp: '00:20:01',
    event: 'Half start',
    teamName: 'CAHN FC',
    playerName: 'Quang Hải',
    passReceipt: 'Văn toản',
    location: '20,21',
    endLocation: '21,22',
    outcome: 'Success',
    inprogress: false,
  },
  {
    timestamp: '00:20:01',
    event: 'Half start',
    teamName: 'CAHN FC',
    playerName: 'Quang Hải',
    passReceipt: 'Văn toản',
    location: '20,21',
    endLocation: '21,22',
    outcome: 'Success',
    inprogress: true,
  },
  {
    timestamp: '00:20:01',
    event: 'Half start',
    teamName: 'CAHN FC',
    playerName: 'Quang Hải',
    passReceipt: 'Văn toản',
    location: '20,21',
    endLocation: '21,22',
    outcome: 'Success',
    inprogress: true,
  },
]

export const RecordsEvent = () => {
  const { ref, inView } = useInView()
  const scale = useScale(state => state.scale)

  React.useEffect(() => {
    if (inView) {
      console.log('intersection')
    }
  }, [inView])

  return (
    <div className="overflow-auto" style={{ padding: `0 ${16 * scale}px` }}>
      <MuiTable
        rows={DATA}
        columns={eventColumns}
        rowsPerPage={5}
        page={0}
        onClickRow={() => {}}
        actions={[
          {
            icon: (
              <img
                src={'/assets/images/complete-dot.svg'}
                width={8}
                height={8}
                loading="lazy"
                alt="icon"
              />
            ) as any,
            tooltip: 'Hoàn thành',
            onClick: () => {},
            disableKey: 'inprogress',
            disableActions: inprogress => !inprogress,
            contrastIcon: {
              icon: (
                <img
                  src={'/assets/images/inprogress-dot.svg'}
                  width={8}
                  height={8}
                  loading="lazy"
                  alt="icon"
                />
              ),
              tooltip: 'Chưa hoàn thành',
            },
          },
          {
            icon: (
              <img
                src={'/assets/images/edit.svg'}
                width={24 * scale}
                height={24 * scale}
                loading="lazy"
                alt="icon"
              />
            ) as any,
            tooltip: 'Sửa',
            onClick: () => {},
            disableKey: 'status',
            disableActions: (status?: number) => [1, -3].includes(status ?? 0),
          },
          {
            icon: (
              <img
                src={'/assets/images/delete.svg'}
                width={24 * scale}
                height={24 * scale}
                loading="lazy"
                alt="icon"
              />
            ) as any,
            tooltip: 'Xóa',
            onClick: () => {},
          },
        ]}
        isFetching={false}
      />

      <button ref={ref}></button>
    </div>
  )
}
