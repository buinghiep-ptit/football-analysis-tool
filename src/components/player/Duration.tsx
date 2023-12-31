import React from 'react'
import { useAppStore } from 'store'

export default function Duration({ size, seconds }: any) {
  const scale = useAppStore(state => state.scale)

  return (
    <span
      className={`text-neutral-0 font-semibold`}
      style={{ fontSize: `${size * scale}px` }}
    >
      {formatDurations(seconds)}
    </span>
  )
}

export function formatDurations(seconds: number, isVisibleHour?: boolean) {
  const date = new Date(seconds * 1000)
  const hh = date.getUTCHours()
  const mm = date.getUTCMinutes()
  const ss = pad(date.getUTCSeconds())
  if (isVisibleHour) {
    return `${hh}:${pad(mm)}:${ss}`
  }
  return `${pad(mm)}:${ss}`
}

function pad(string: number) {
  return ('0' + string).slice(-2)
}
