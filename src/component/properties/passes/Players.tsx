import React from 'react'
import { useScale } from 'store'

export const Players = () => {
  const scale = useScale(state => state.scale)

  return (
    <div className="flex flex-row" style={{ gap: `${32 * scale}px` }}>
      <div className="flex w-[43.43%]" style={{ gap: `${12 * scale}px` }}>
        <div className="w-[40%]">
          <span
            className=" text-neutral-5 font-semibold"
            style={{ fontSize: `${14 * scale}px` }}
          >
            From:
          </span>
        </div>
        <div className="w-[55%]">
          <span
            className=" text-neutral-0"
            style={{ fontSize: `${14 * scale}px` }}
          >
            John Cley
          </span>
        </div>
      </div>
      <div className="flex flex-grow" style={{ gap: `${12 * scale}px` }}>
        <div className="w-[34%]">
          <span
            className=" text-neutral-5 font-semibold"
            style={{ fontSize: `${14 * scale}px` }}
          >
            Receipt:
          </span>
        </div>
        <div className="flex-grow">
          <span
            className=" text-neutral-0"
            style={{ fontSize: `${14 * scale}px` }}
          >
            Quang Hải
          </span>
        </div>
      </div>
    </div>
  )
}
