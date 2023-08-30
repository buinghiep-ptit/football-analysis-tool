import { RadioGroup } from 'component/forms/RadioGroup'
import React from 'react'
import { useScale } from 'store'

const tech = [
  { value: '1', name: 'Drop 1' },
  { value: '2', name: 'Drop 2' },
  { value: '3', name: 'Drop 3' },
  { value: '4', name: 'Drop 4' },
]

export const Technique = () => {
  const scale = useScale(state => state.scale)

  return (
    <div className="flex flex-col" style={{ gap: `${16 * scale}px` }}>
      <span
        className=" text-neutral-5 font-semibold"
        style={{ fontSize: `${14 * scale}px` }}
      >
        Technique:
      </span>
      <div
        className="w-[100%] flex flex-col"
        style={{ gap: `${16 * scale}px` }}
      >
        <RadioGroup name="technique" options={tech} col={2} />
      </div>
    </div>
  )
}
