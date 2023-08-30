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
          <div
            // className={`flex
            // }`}
            style={{ display: 'grid', gridTemplateColumns: 'auto auto auto' }}
          >
            {options.map(option => (
              <label
                key={option.value}
                className={`flex flex-row items-center `}
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
