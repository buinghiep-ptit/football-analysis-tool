import * as React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { useScale } from 'store'

export interface IRadioGroupProps {
  name: string
  options: {
    value: string
    name: string
  }[]
  col?: number
}

export function RadioGroup({ name, options, col = 4 }: IRadioGroupProps) {
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
          <div
            className={`grid grid-cols-${col} 
            } w-[100%] items-center justify-between`}
          >
            {options.map(option => (
              <label
                key={option.value}
                className={`col-span-1 flex items-center `}
                style={{ paddingBottom: `${12 * scale}px` }}
              >
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
