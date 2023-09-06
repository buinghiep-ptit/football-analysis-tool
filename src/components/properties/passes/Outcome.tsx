import { RadioGroup } from 'components/forms/RadioGroup'
import React from 'react'
import { useAppStore } from 'store'
import { OUTCOME } from 'utils/common'

export const Outcome = () => {
  const scale = useAppStore(state => state.scale)

  return (
    <div className="flex flex-col" style={{ gap: `${16 * scale}px` }}>
      <span
        className=" text-neutral-5 font-semibold"
        style={{ fontSize: `${14 * scale}px` }}
      >
        Outcome:
      </span>
      <div
        className="w-[100%] flex flex-col"
        style={{ gap: `${16 * scale}px` }}
      >
        <RadioGroup name="outcome" options={OUTCOME} col={3} />
      </div>
    </div>
  )
}
