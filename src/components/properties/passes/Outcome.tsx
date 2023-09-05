import { RadioGroup } from 'components/forms/RadioGroup'
import React from 'react'
import { useAppStore } from 'store'

const outcome = [
  { value: '1', name: 'Incomplete' },
  { value: '2', name: 'Out' },
  { value: '3', name: 'Pass offside' },
  { value: '4', name: 'Unknow' },
  { value: '5', name: 'Injuri clearance' },
]

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
        <RadioGroup name="outcome" options={outcome} col={3} />
      </div>
    </div>
  )
}
