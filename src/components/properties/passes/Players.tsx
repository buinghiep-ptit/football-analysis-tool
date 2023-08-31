import React from 'react'
import { useScale } from 'store'

export const Players = () => {
  const scale = useScale(state => state.scale)

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
          John Cley
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
          Quang Hải
        </span>
      </div>
    </div>
  )
}
