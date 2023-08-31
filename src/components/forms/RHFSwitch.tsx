import { Controller, useFormContext } from 'react-hook-form'
import { useScale } from 'store'

export interface ICheckBoxProps {
  name: string
  label?: string | 'Checkbox'
  defaultValue?: boolean
}

export function RHFSwitch({ name }: ICheckBoxProps) {
  const { control } = useFormContext()
  const scale = useScale(state => state.scale)

  return (
    <Controller
      name={name}
      defaultValue=""
      control={control}
      render={({ field }) => (
        <label className="relative cursor-pointer">
          <input
            type="checkbox"
            {...field}
            onChange={e => field.onChange(e.target.checked)}
            checked={field.value}
            className="sr-only peer"
          />
          <div
            className="peer switch "
            style={{ transform: `scale(${scale})` }}
          ></div>
        </label>
      )}
    />
  )
}
