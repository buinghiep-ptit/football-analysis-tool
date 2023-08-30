import React, { useRef, useState } from 'react'
import { useScale } from 'store'

const CoordinatesPlayer = () => {
  const [clickCoordinates, setClickCoordinates] = useState([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const parentRef = useRef(null) as any
  const [parentWidth, setParentWidth] = useState(0)
  const [parentHeight, setParentHeight] = useState(0)

  const scale = useScale(state => state.scale)

  const handleMouseMove = (event: any) => {
    if (parentRef.current) {
      setParentWidth(parentRef.current.offsetWidth)
      setParentHeight(parentRef.current.offsetHeight)
    }
    const divRect = event.currentTarget.getBoundingClientRect()

    const x = event.clientX - divRect.left
    const y = event.clientY - divRect.top

    setMousePosition({ x, y })
  }

  const handleMouseDown = (event: any) => {
    if (parentRef.current) {
      setParentWidth(parentRef.current.offsetWidth)
      setParentHeight(parentRef.current.offsetHeight)
    }
    const divRect = event.currentTarget.getBoundingClientRect()

    const x = event.clientX - divRect.left
    const y = event.clientY - divRect.top

    const newCoordinate = { x, y }

    setClickCoordinates(
      prevCoordinates => [...prevCoordinates, newCoordinate] as any,
    )
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 })
  }

  return (
    <div className="">
      <div
        className="flex justify-center items-center bg-neutral-8"
        style={{
          height: 48 * scale,
        }}
      >
        <span
          className=" font-semibold text-neutral-0"
          style={{ fontSize: `${16 * scale}px` }}
        >
          Vị trí cầu thủ
        </span>
      </div>
      <div
        className="flex-1 cursor-pointer relative aspect-[504/372]"
        ref={parentRef}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
      >
        <img src="/assets/images/stadium-bg.png" width={'100%'} alt="" />
        {mousePosition.x !== 0 && mousePosition.y !== 0 && (
          <div
            className="mouse-coordinates"
            style={{
              left: mousePosition.x - 14,
              top: mousePosition.y - 10,
              fontSize: `${scale * 12}px`,
            }}
          >
            ({Math.round((mousePosition.x * 100) / parentWidth)},{' '}
            {Math.round((mousePosition.y * 100) / parentHeight)})
          </div>
        )}
        {clickCoordinates.map((c: any, index) => (
          <div
            key={index}
            className="mouse-coordinates"
            style={{
              left: c.x - 14,
              top: c.y - 10,
              fontSize: `${scale * 12}px`,
            }}
          >
            ({Math.round((c.x * 100) / parentWidth)},{' '}
            {Math.round((c.y * 100) / parentHeight)})
          </div>
        ))}
      </div>
    </div>
  )
}

export default CoordinatesPlayer
