import React from 'react'
import { VideoPlayer } from './VideoPlayer'
import { useScale } from 'store'

export const Player = () => {
  const scale = useScale(state => state.scale)

  return (
    <div className="video bg-neutral-8">
      <div style={{ marginBottom: `${12 * scale}px` }}>
        <VideoPlayer url="https://dev09-minio.campdi.vn/camping/Feed/campdi_1671434874002_Pexels_Videos_2169880.mp4" />
      </div>
      <div className=" bg-neutral-9 h-[1px] rounded-full"></div>
      <div
        className="flex justify-center items-center"
        style={{ padding: `${14 * scale}px 0`, gap: `${24 * scale}px` }}
      >
        <div className="flex flex-row items-center gap-3">
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
        <div className="flex flex-row items-center gap-3">
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
