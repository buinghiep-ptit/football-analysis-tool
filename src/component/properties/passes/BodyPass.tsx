import { RadioGroup } from 'component/forms/RadioGroup'
import React from 'react'
import { useScale } from 'store'

const bodypass = [
  { value: '1', name: 'Drop kick' },
  { value: '2', name: 'Head' },
  { value: '3', name: 'Keeper arm' },
  { value: '4', name: 'Free kick' },
  { value: '5', name: 'Left foot' },
  { value: '6', name: 'Right foot' },
  { value: '7', name: 'No touch' },
  { value: '8', name: 'Other' },
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
        <RadioGroup name="bodypass" options={bodypass} />
      </div>
    </div>
  )
}
