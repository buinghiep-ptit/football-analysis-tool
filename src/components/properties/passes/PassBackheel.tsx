import { RHFSwitch } from 'components/forms/RHFSwitch'
import { useAppStore } from 'store'

export const PassBackheel = () => {
  const scale = useAppStore(state => state.scale)

  return (
    <div
      className="flex w-[43.43%] items-center"
      style={{ gap: `${12 * scale}px` }}
    >
      <span
        className="w-[75%] text-neutral-5 font-semibold"
        style={{ fontSize: `${14 * scale}px` }}
      >
        Pass backheel:
      </span>
      <div className="flex-grow">
        <RHFSwitch name="passbackheel" />
      </div>
    </div>
  )
}
