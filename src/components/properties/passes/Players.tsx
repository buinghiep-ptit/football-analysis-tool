import React from 'react'
import { useAppStore } from 'store'

export const Players = () => {
  const scale = useAppStore(state => state.scale)
  const data = useAppStore(state => state.data)

  return (
    <div className="flex flex-row" style={{ gap: `${32 * scale}px` }}>
      <div className="flex w-[43.43%]" style={{ gap: `${12 * scale}px` }}>
        <span
          className="w-[40%] text-neutral-5 font-semibold"
          style={{ fontSize: `${14 * scale}px` }}
        >
          From:
        </span>
        <span
          className="w-[55%] text-neutral-0"
          style={{ fontSize: `${14 * scale}px` }}
        >
          {data?.listActivePlayer?.[0]?.name}
        </span>
      </div>
      <div className="flex flex-grow" style={{ gap: `${12 * scale}px` }}>
        <span
          className="w-[34%] text-neutral-5 font-semibold"
          style={{ fontSize: `${14 * scale}px` }}
        >
          Receipt:
        </span>
        <span
          className="flex-grow text-neutral-0"
          style={{ fontSize: `${14 * scale}px` }}
        >
          {data?.listActivePlayer?.[1]?.name}
        </span>
      </div>
    </div>
  )
}
