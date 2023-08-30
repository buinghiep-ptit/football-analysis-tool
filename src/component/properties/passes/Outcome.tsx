import { RadioGroup } from 'component/forms/RadioGroup'
import React from 'react'
import { useScale } from 'store'

const outcome = [
  { value: '1', name: 'Drop kick' },
  { value: '2', name: 'Drop kick' },
  { value: '3', name: 'Drop kick' },
  { value: '4', name: 'Drop kick' },
  { value: '5', name: 'Drop kick' },
]

export const Outcome = () => {
  const scale = useScale(state => state.scale)

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
