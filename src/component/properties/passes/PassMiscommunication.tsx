import { RHFSwitch } from 'component/forms/RHFSwitch'
import { useScale } from 'store'

export const PassMiscommunication = () => {
  const scale = useScale(state => state.scale)

  return (
    <div
      className="flex w-[43.43%] items-center"
      style={{ gap: `${12 * scale}px` }}
    >
      <span
        className="w-[75%] text-neutral-5 font-semibold"
        style={{ fontSize: `${14 * scale}px` }}
      >
        Pass miscommunication:
      </span>
      <div className="flex-grow">
        <RHFSwitch name="passmiscommunication" />
      </div>
    </div>
  )
}
