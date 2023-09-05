import { RadioGroup } from 'components/forms/RadioGroup'
import React from 'react'
import { useAppStore } from 'store'

const passheight = [
  { value: '1', name: 'Ground pass' },
  { value: '2', name: 'Low pass' },
  { value: '3', name: 'High pass' },
]

export const PassHeight = () => {
  const scale = useAppStore(state => state.scale)

  return (
    <div className="flex flex-col" style={{ gap: `${16 * scale}px` }}>
      <span
        className=" text-neutral-5 font-semibold"
        style={{ fontSize: `${14 * scale}px` }}
      >
        Pass height:
      </span>
      <div
        className="w-[100%] flex flex-col"
        style={{ gap: `${16 * scale}px` }}
      >
        <RadioGroup name="passheight" options={passheight} col={3} />
      </div>
    </div>
  )
}
