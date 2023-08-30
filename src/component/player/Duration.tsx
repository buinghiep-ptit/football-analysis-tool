import React from 'react'
import { useScale } from 'store'

export default function Duration({ size, seconds }: any) {
  const scale = useScale(state => state.scale)

  return (
    <time dateTime={`P${Math.round(seconds)}S`}>
      <span
        className={`text-neutral-0`}
        style={{ fontSize: `${size * scale}px` }}
      >
        {format(seconds)}
      </span>
    </time>
  )
}

function format(seconds: number) {
  const date = new Date(seconds * 1000)
  const hh = date.getUTCHours()
  const mm = date.getUTCMinutes()
  const ss = pad(date.getUTCSeconds())
  if (hh) {
    return `${hh}:${pad(mm)}:${ss}`
  }
  return `${mm}:${ss}`
}

function pad(string: number) {
  return ('0' + string).slice(-2)
}
