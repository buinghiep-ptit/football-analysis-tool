import React from 'react'
import MuiTable from 'components/common/MuiTable'
import { eventColumns } from 'utils/columns/EventColumns'
import { useInView } from 'react-intersection-observer'
import { useAppStore } from 'store'
import { OUTCOME } from 'utils/common'

// const DATA = [
//   {
//     timestamp: '00:20:01',
//     event: 'Half start',
//     teamName: 'CAHN FC',
//     playerName: 'Quang Hải',
//     passReceipt: 'Văn toản',
//     location: '20,21',
//     endLocation: '21,22',
//     outcome: 'Success',
//     inprogress: true,
//   },
//   {
//     timestamp: '00:20:01',
//     event: 'Half start',
//     teamName: 'CAHN FC',
//     playerName: 'Quang Hải',
//     passReceipt: 'Văn toản',
//     location: '20,21',
//     endLocation: '21,22',
//     outcome: 'Success',
//     inprogress: true,
//   },
//   {
//     timestamp: '00:20:01',
//     event: 'Half start',
//     teamName: 'CAHN FC',
//     playerName: 'Quang Hải',
//     passReceipt: 'Văn toản',
//     location: '20,21',
//     endLocation: '21,22',
//     outcome: 'Success',
//     inprogress: false,
//   },
//   {
//     timestamp: '00:20:01',
//     event: 'Half start',
//     teamName: 'CAHN FC',
//     playerName: 'Quang Hải',
//     passReceipt: 'Văn toản',
//     location: '20,21',
//     endLocation: '21,22',
//     outcome: 'Success',
//     inprogress: false,
//   },
//   {
//     timestamp: '00:20:01',
//     event: 'Half start',
//     teamName: 'CAHN FC',
//     playerName: 'Quang Hải',
//     passReceipt: 'Văn toản',
//     location: '20,21',
//     endLocation: '21,22',
//     outcome: 'Success',
//     inprogress: true,
//   },
//   {
//     timestamp: '00:20:01',
//     event: 'Half start',
//     teamName: 'CAHN FC',
//     playerName: 'Quang Hải',
//     passReceipt: 'Văn toản',
//     location: '20,21',
//     endLocation: '21,22',
//     outcome: 'Success',
//     inprogress: true,
//   },
// ]

const extractRecords = (records: any) => {
  return records.map((r: any) => ({
    ...r,
    timestamp: r.curVidTime,
    event: r.eventName,
    teamName: r.teamName,
    playerName: r.listActivePlayer?.[0]?.name,
    passReceipt: r.listActivePlayer?.[1]?.name,
    location: `${r.startLocation.x},${r.startLocation.y}`,
    endLocation: '',
    outcome: OUTCOME.find(o => o.value == r.outcome)?.name,
    inprogress: r.status === 1 ? false : true,
  }))
}

export const RecordsEvent = () => {
  const { ref, inView } = useInView()
  const scale = useAppStore(state => state.scale)
  const records = useAppStore(state => state.records)
  const updateData = useAppStore(state => state.updateData)
  const removeRecord = useAppStore(state => state.removeRecord)

  React.useEffect(() => {
    if (inView) {
      console.log('intersection')
    }
  }, [inView])

  const handleClickRow = (cell: any, row: any) => {
    const newData = records?.find((r: any) => r.id === row.id)
    if (newData) updateData(newData, true)
  }

  const handleRemoveRow = (cell: any, row: any) => {
    const record = records?.find((r: any) => r.id === row.id)
    if (record) removeRecord(record.id)
  }

  return (
    <div
      className="overflow-auto"
      style={{ padding: `0 ${16 * scale}px`, height: '100%' }}
    >
      <MuiTable
        rows={extractRecords(records ?? [])}
        columns={eventColumns}
        rowsPerPage={5}
        page={0}
        onClickRow={handleClickRow}
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
            disableActions: inprogress => !!inprogress,
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
            // disableKey: 'status',
            // disableActions: (status?: number) => [1, -3].includes(status ?? 0),
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
            onClick: handleRemoveRow,
          },
        ]}
        isFetching={false}
      />

      <button ref={ref}></button>
    </div>
  )
}
