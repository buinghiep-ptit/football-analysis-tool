import { RadioGroup } from 'components/forms/RadioGroup'
import React from 'react'
import { useScale } from 'store'

const passtype = [
  { value: '1', name: 'Corner' },
  { value: '2', name: 'Free kick' },
  { value: '3', name: 'Goal kick' },
  { value: '4', name: 'Interception' },
  { value: '5', name: 'Kick off' },
  { value: '6', name: 'Recovery' },
  { value: '7', name: 'Throw-in' },
]

export const PassType = () => {
  const scale = useScale(state => state.scale)

  return (
    <div className="flex flex-col" style={{ gap: `${16 * scale}px` }}>
      <span
        className=" text-neutral-5 font-semibold"
        style={{ fontSize: `${14 * scale}px` }}
      >
        Pass type:
      </span>
      <div
        className="w-[100%] flex flex-col"
        style={{ gap: `${16 * scale}px` }}
      >
        <RadioGroup name="passtype" options={passtype} />
      </div>
    </div>
  )
}
