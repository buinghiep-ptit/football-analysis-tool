import React from 'react'
import { useScale } from 'store'

export const Team = () => {
  const scale = useScale(state => state.scale)

  return (
    <div className="flex flex-row" style={{ gap: `${32 * scale}px` }}>
      <div className="flex w-[43.43%]" style={{ gap: `${12 * scale}px` }}>
        <div className="w-[40%]">
          <span
            className=" text-neutral-5 font-semibold"
            style={{ fontSize: `${14 * scale}px` }}
          >
            Team:
          </span>
        </div>
        <div className="w-[55%]">
          <span
            className=" text-neutral-0"
            style={{ fontSize: `${14 * scale}px` }}
          >
            CAHN FC
          </span>
        </div>
      </div>
    </div>
  )
}
