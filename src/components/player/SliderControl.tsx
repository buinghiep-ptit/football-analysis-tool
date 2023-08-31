import Duration from './Duration'

export interface ISliderControlProps {
  onMouseDown: (e?: any) => void
  onChange: (e?: any) => void
  onMouseUp: (e?: any) => void
  value: number
  duration: number
}

export function SliderControl({
  onMouseDown,
  onChange,
  onMouseUp,
  value,
  duration,
}: ISliderControlProps) {
  return (
    <div className="w-full mx-auto">
      <input
        type="range"
        min="0"
        step="any"
        max={duration.toString()}
        value={value}
        onChange={onChange}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        className="slider cursor-pointer w-full appearance-none h-[2px] rounded-md focus:outline-none"
        style={{
          background: `linear-gradient(to right, red 0%, red ${
            (value * 100) / duration
          }%, #d1d5db ${(value * 100) / duration}%, #868E96 100%)`,
        }}
      />
      <div className="mt-[2px] relative">
        <div className="flex text-[14px] flex-row justify-between items-center mr-[-10px] ml-[-14px]">
          <Duration size={14} seconds={0} />
          <Duration size={14} seconds={duration} />
        </div>
        <div
          className="absolute top-0 bottom-0 h-full text-right"
          style={{ left: `calc(${(value * 100) / duration}% - 8px)` }}
        >
          <Duration size={16} seconds={value} />
        </div>
      </div>
    </div>
  )
}
