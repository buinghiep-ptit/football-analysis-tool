import { RadioGroup } from 'component/forms/RadioGroup'
import React from 'react'
import { useScale } from 'store'

const bodypass1 = [
  { value: '1', name: 'Drop kick' },
  { value: '2', name: 'Drop kick' },
  { value: '3', name: 'Drop kick' },
  { value: '4', name: 'Drop kick' },
]

const bodypass2 = [
  { value: '5', name: 'Drop kick' },
  { value: '6', name: 'Drop kick' },
  { value: '7', name: 'Drop kick' },
  { value: '8', name: 'Drop kick' },
]

export const BodyPass = () => {
  const scale = useScale(state => state.scale)

  return (
    <div className="flex flex-col" style={{ gap: `${16 * scale}px` }}>
      <span
        className=" text-neutral-5 font-semibold"
        style={{ fontSize: `${14 * scale}px` }}
      >
        Body pass:
      </span>
      <div
        className="w-[100%] flex flex-col"
        style={{ gap: `${16 * scale}px` }}
      >
        <RadioGroup name="bodypass1" options={bodypass1} />
        <RadioGroup name="bodypass2" options={bodypass2} />
      </div>
    </div>
  )
}
