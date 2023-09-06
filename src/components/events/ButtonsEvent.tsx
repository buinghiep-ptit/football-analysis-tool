import React, { useEffect, useState } from 'react'
import { useAppStore } from 'store'
import { LIST_KEY } from 'utils/common'

export const Button = ({
  title,
  subtitle,
  index,
  activeIndex,
  scale,
}: {
  title: string
  subtitle: string
  index: number
  activeIndex: number
  scale: number
}) => {
  const [isHover, setIsHover] = useState(false)

  return (
    <div
      className={`flex hover:bg-neutral-0 transition-all duration-500 flex-col cursor-pointer items-center justify-center rounded-lg ${
        activeIndex === index ? 'bg-neutral-0' : 'bg-neutral-9'
      }`}
      style={{
        padding: `${8 * scale}px ${16 * scale}px`,
        gap: `${4 * scale}px`,
      }}
      onMouseEnter={() => {
        setIsHover(true)
      }}
      onMouseLeave={() => setIsHover(false)}
    >
      <span
        className={`${
          isHover || index === activeIndex ? 'text-neutral-9' : 'text-neutral-0'
        } font-bold `}
        style={{ fontSize: `${16 * scale}px` }}
      >
        {title}
      </span>
      <span
        className={`${
          isHover || index === activeIndex ? 'text-neutral-9' : 'text-neutral-5'
        }`}
        style={{ fontSize: `${13 * scale}px` }}
      >
        {subtitle}
      </span>
    </div>
  )
}

const ButtonsEvent = () => {
  const [activeIdx, setActiveIdx] = useState(-1)
  const scale = useAppStore(state => state.scale)
  const data = useAppStore(state => state.data)
  const updateData = useAppStore(state => state.updateData)

  const pauseVid = useAppStore(state => state.pauseVid)

  useEffect(() => {
    const currentButtonIndex = LIST_KEY.findIndex(
      b => b.key && b.key === data?.currentKey,
    )
    if (currentButtonIndex !== -1) {
      setActiveIdx(currentButtonIndex)
    } else {
      setActiveIdx(-1)
    }
    console.log('data?.currentKey:', data?.currentKey)
  }, [data])

  const handleMouseDown = (index: number) => {
    const activeKey = LIST_KEY[index].key
    updateData({ currentKey: activeKey })
    pauseVid()
  }

  return (
    <div className="overflow-auto" style={{ margin: `${16 * scale}px 0` }}>
      <div
        className=" grid grid-cols-4 h-[100%]"
        style={{ gap: `${16 * scale}px`, margin: `0 ${16 * scale}px` }}
      >
        {LIST_KEY.map((event, index) => (
          <div
            key={index}
            className="col-span-1"
            onMouseDown={() => handleMouseDown(index)}
          >
            <Button
              activeIndex={activeIdx}
              index={index}
              title={event.title}
              subtitle={event.subtile}
              scale={scale}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ButtonsEvent
