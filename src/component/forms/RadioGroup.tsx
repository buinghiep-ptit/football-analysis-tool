import * as React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { useScale } from 'store'

export interface IRadioGroupProps {
  name: string
  options: {
    value: string
    name: string
  }[]
}

export function RadioGroup({ name, options }: IRadioGroupProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext()
  const error = errors[name]?.message as string | undefined
  const scale = useScale(state => state.scale)

  return (
    <div>
      <Controller
        rules={{ required: true }}
        control={control}
        name={name}
        defaultValue=""
        render={({ field }) => (
          <div className="flex w-[100%] items-center justify-between">
            {options.map(option => (
              <label key={option.value} className="flex items-center">
                <input
                  type="radio"
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                  onChange={e => field.onChange(e.target.value)}
                  className="radio"
                  style={{ width: 16.67 * scale, height: 16.67 * scale }}
                />
                <span
                  className="ml-2 text-neutral-0 pt-[2px]"
                  style={{ fontSize: `${14 * scale}px` }}
                >
                  {option.name}
                </span>
              </label>
            ))}
          </div>
        )}
      />
      <span>{error}</span>
    </div>
  )
}
