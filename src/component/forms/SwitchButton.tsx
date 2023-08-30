/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'
import { Control, useController } from 'react-hook-form'

export interface ISwitchButtonProps {
  control: Control<any>
  name: string
}

export function SwitchButton({ control, name }: ISwitchButtonProps) {
  const { field } = useController({
    control,
    name,
    defaultValue: '',
  })

  return (
    <>
      <input
        type="checkbox"
        {...field}
        onChange={e => field.onChange(e.target.checked)}
        checked={field.value}
        className="sr-only peer"
      />
      <div className="peer switch"></div>
    </>
  )
}
