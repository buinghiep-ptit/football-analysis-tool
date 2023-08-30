import { RHFSwitch } from 'component/forms/RHFSwitch'
import { useScale } from 'store'

export const PassBackheel = () => {
  const scale = useScale(state => state.scale)

  return (
    <div className="flex flex-row" style={{ gap: `${32 * scale}px` }}>
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
    </div>
  )
}
