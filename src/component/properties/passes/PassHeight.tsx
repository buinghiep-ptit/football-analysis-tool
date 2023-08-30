import { RadioGroup } from 'component/forms/RadioGroup'
import React from 'react'
import { useScale } from 'store'

const passheight = [
  { value: '1', name: 'Drop 1' },
  { value: '2', name: 'Drop 2' },
  { value: '3', name: 'Drop 3' },
  { value: '4', name: 'Drop 4' },
]

export const PassHeight = () => {
  const scale = useScale(state => state.scale)

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
