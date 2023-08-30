/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'
import { Control, useController } from 'react-hook-form'

export interface IRadioButtonsProps {
  control: Control<any>
  name: string
}

export function RadioButtons({ control, name }: IRadioButtonsProps) {
  const { field } = useController({
    control,
    name,
    defaultValue: '',
  })

  return (
    <div>
      {['man', 'women', 'other'].map(option => (
        <div key={option}>
          <input
            type="radio"
            {...field}
            value={option}
            checked={field.value === option}
            onChange={e => field.onChange(e.target.value)}
            className="radio"
          />
        </div>
      ))}
    </div>
  )
}
