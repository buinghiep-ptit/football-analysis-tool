import React, { useEffect, useState } from 'react'
import { useAppStore } from 'store'

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

const listEventKey = [
  { title: 'Half Start', subtile: 'Bắt đầu hiệp', value: 'hs', key: '' },
  {
    title: 'Tactical Shift (T)',
    subtile: 'Đổi chiến thuật',
    value: 'ts',
    key: 't',
  },
  { title: 'Substitution (0)', subtile: 'Thay người', value: 'ss', key: '0' },
  { title: 'Half End', subtile: 'Kết thúc hiệp', value: 'he' },
  { title: 'Pass (1)', subtile: 'Kiểm soát bóng', value: 'p', key: '1' },
  { title: 'Carries (2)', subtile: 'Kiểm soát bóng', value: 'c', key: '2' },
  { title: 'Shot (3)', subtile: 'sút', value: 's', key: '3' },
  { title: 'Error (2)', subtile: 'Lỗi cá nhân', value: 'err' },
  { title: 'Defensive term (6)', subtile: 'Tranh chấp', value: 'dt' },
  { title: 'Goalkeeper (4)', subtile: 'Thủ môn', value: 'gk' },
  { title: 'Foul (3)', subtile: 'Phạm lỗi', value: 'f' },
  { title: 'Others (3)', subtile: 'Khác', value: 'o' },
  { title: 'Half Start', subtile: 'Bắt đầu hiệp', value: 'hs' },
  { title: 'Half Start', subtile: 'Bắt đầu hiệp', value: 'hs' },
  { title: 'Half Start', subtile: 'Bắt đầu hiệp', value: 'hs' },
  // { title: 'Hoàn thành', subtile: '', value: 'enter' },
  // { title: 'Để sau', subtile: '', value: 'shift' },
  // { title: 'Hủy', subtile: '', value: 'escape' },
]

const ButtonsEvent = () => {
  const [activeIdx, setActiveIdx] = useState(-1)
  const scale = useAppStore(state => state.scale)
  const currentKey = useAppStore(state => state.currentKey)
  const updateKey = useAppStore(state => state.updateKey)

  useEffect(() => {
    if (currentKey) {
      const currentButtonIndex = listEventKey.findIndex(
        b => b.key && b.key === currentKey,
      )
      if (currentButtonIndex !== -1) {
        setActiveIdx(currentButtonIndex)
      }
    }
  }, [])

  const handleMouseDown = (index: number) => {
    setActiveIdx(index)
    const activeKey = listEventKey[index].key
    updateKey(activeKey)
  }

  const handleKeyDown = (event: any) => {
    const key = event.key.toLowerCase()
    const currentButtonIndex = listEventKey.findIndex(
      b => b.key && b.key === key,
    )
    if (currentButtonIndex !== -1) {
      setActiveIdx(currentButtonIndex)
      updateKey(key)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className="overflow-auto" style={{ margin: `${16 * scale}px` }}>
      <div
        className=" grid grid-cols-4 h-[100%]"
        style={{ gap: `${16 * scale}px` }}
      >
        {listEventKey.map((event, index) => (
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
