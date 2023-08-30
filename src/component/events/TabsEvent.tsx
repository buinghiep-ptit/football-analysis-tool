import React, { useState } from 'react'
import { useScale } from 'store'

const TabsEvent = () => {
  const [currentTab, setCurrentTab] = useState(1)
  const scale = useScale(state => state.scale)

  return (
    <div
      className="flex flex-row justify-center items-center  bg-neutral-9"
      style={{
        gap: `${scale * 136}px`,
      }}
    >
      <div
        className="flex flex-col cursor-pointer text-base font-semibold"
        onMouseDown={() => setCurrentTab(1)}
        style={{ gap: `${16 * scale}px` }}
      >
        <span
          className={`${currentTab === 1 ? 'text-blue-5' : 'text-neutral-5'}`}
          style={{ fontSize: `${16 * scale}px` }}
        >
          Event
        </span>
        <div
          className={`h-[2px] ${
            currentTab === 1 ? 'bg-blue-5' : 'bg-neutral-5'
          } w-full`}
        ></div>
      </div>
      <div
        className="flex flex-col cursor-pointer text-base font-semibold"
        onMouseDown={() => setCurrentTab(2)}
        style={{ gap: `${16 * scale}px` }}
      >
        <span
          className={`${currentTab === 2 ? 'text-blue-5' : 'text-neutral-5'}`}
          style={{ fontSize: `${16 * scale}px` }}
        >
          Edit event
        </span>
        <div
          className={`h-[2px] ${
            currentTab === 2 ? 'bg-blue-5' : 'bg-neutral-5'
          } w-full`}
        ></div>
      </div>
    </div>
  )
}

export default TabsEvent
