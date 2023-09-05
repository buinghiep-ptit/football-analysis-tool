import { Slider } from '@mui/material'
import { useAppStore } from 'store'

export interface ISliderControlProps {
  onMouseDown: (e?: any) => void
  onChange: (e?: any) => void
  onMouseUp: (e?: any) => void
  value: number
  duration: number
}

export function SliderTimeControl({
  //   onMouseDown,
  onChange,
  //   onMouseUp,
  value,
  duration,
}: ISliderControlProps) {
  const scale = useAppStore(state => state.scale)

  return (
    <div
      className="relative"
      style={{ margin: `${8 * scale}px ${40 * scale}px` }}
    >
      <Slider
        aria-label="time-indicator"
        size="small"
        value={value}
        min={0}
        step={1}
        max={duration}
        onChange={onChange}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: 2,
          pt: 0,
          zIndex: 9,
          color: '#FA5252',
          '& .MuiSlider-thumb': {
            width: 10,
            height: 10,
            border: '1px solid #212529',
            color: '#FA5252',
            transition: 'ease 0.25s all',
            // '&:before': {
            //   boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
            // },
            '&:hover, &.Mui-focusVisible': {
              boxShadow: `0px 0px 0px 6px ${'rgb(0 0 0 / 8%)'}`,
            },
            '&.Mui-active': {
              width: 14 * scale,
              height: 14 * scale,
            },
          },
          '& .MuiSlider-rail': {
            color: '#868E96',
          },
        }}
      />
    </div>
  )
}
