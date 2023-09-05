import { RadioGroup } from 'components/forms/RadioGroup'
import React from 'react'
import { useAppStore } from 'store'

const tech = [
  { value: '1', name: 'Inswinging' },
  { value: '2', name: 'Outswinging' },
  { value: '3', name: 'Incomplete' },
  { value: '4', name: 'Through ball' },
]

export const Technique = () => {
  const scale = useAppStore(state => state.scale)

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
