import React from 'react'
import { VideoPlayer } from './VideoPlayer'
import { useAppStore } from 'store'

export const Player = () => {
  const scale = useAppStore(state => state.scale)

  return (
    <div className="video bg-neutral-8">
      <div style={{ marginBottom: `${12 * scale}px` }}>
        <VideoPlayer url="/assets/videos/video.mp4" />
      </div>
      <div className=" bg-neutral-9 h-[1px] rounded-full"></div>
      <div
        className="flex justify-center items-center"
        style={{ padding: `${14 * scale}px 0`, gap: `${24 * scale}px` }}
      >
        <div
          className="flex flex-row items-center"
          style={{ gap: `${12 * scale}px` }}
        >
          <img
            src="/assets/images/logo-club-1.svg"
            width={40 * scale}
            height={40 * scale}
            alt=""
          />
          <span
            className=" text-neutral-0"
            style={{ fontSize: `${16 * scale}px` }}
          >
            Công An Hà Nội FC
          </span>
        </div>
        <img
          src="/assets/images/vs.svg"
          width={28 * scale}
          height={14 * scale}
          alt=""
        />
        <div
          className="flex flex-row items-center"
          style={{ gap: `${12 * scale}px` }}
        >
          <span
            className=" text-neutral-0"
            style={{ fontSize: `${16 * scale}px` }}
          >
            Công An Hà Nội FC
          </span>
          <img
            src="/assets/images/logo-club-2.svg"
            width={40 * scale}
            height={40 * scale}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
