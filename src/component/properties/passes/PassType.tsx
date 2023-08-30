import { RadioGroup } from 'component/forms/RadioGroup'
import React from 'react'
import { useScale } from 'store'

const passtype1 = [
  { value: '1', name: 'Drop kick' },
  { value: '2', name: 'Drop kick' },
  { value: '3', name: 'Drop kick' },
  { value: '4', name: 'Drop kick' },
]

const passtype2 = [
  { value: '5', name: 'Drop kick' },
  { value: '6', name: 'Drop kick' },
  { value: '7', name: 'Drop kick' },
  { value: '8', name: 'Drop kick' },
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
        <RadioGroup name="passtype1" options={passtype1} />
        <RadioGroup name="passtype2" options={passtype2} />
      </div>
    </div>
  )
}
