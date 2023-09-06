import { useEffect, useRef, useState } from 'react'
import { useAppStore } from 'store'

const CoordinatesPlayer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const parentRef = useRef(null) as any
  const [parentWidth, setParentWidth] = useState(0)
  const [parentHeight, setParentHeight] = useState(0)

  const scale = useAppStore(state => state.scale)
  const data = useAppStore(state => state.data)
  const updateData = useAppStore(state => state.updateData)

  useEffect(() => {
    const pWidth = parentRef.current.offsetHeight
    const pHeight = parentRef.current.offsetWidth
    setParentWidth(pWidth)
    setParentHeight(pHeight)
  }, [])

  console.log(parentWidth, parentHeight)

  const handleMouseMove = (event: any) => {
    if (parentRef.current) {
      // const pWidth = parentRef.current.offsetHeight
      // const pHeight = parentRef.current.offsetWidth
      // setParentWidth(pWidth)
      // setParentHeight(pHeight)
      const divRect = event.currentTarget.getBoundingClientRect()
      const x = event.clientX - divRect.left
      const y = event.clientY - divRect.top

      setMousePosition({ x, y })
    }
  }

  const handleMouseDown = (event: any) => {
    if (parentRef.current) {
      // const pWidth = parentRef.current.offsetHeight
      // const pHeight = parentRef.current.offsetWidth
      // setParentWidth(pWidth)
      // setParentHeight(pHeight)
      const divRect = event.currentTarget.getBoundingClientRect()
      const x = event.clientX - divRect.left
      const y = event.clientY - divRect.top

      updateData({
        startLocation: {
          x: Math.round((x * 100) / parentWidth),
          y: Math.round((y * 100) / parentHeight),
        },
      })
    }
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
              left: mousePosition.x - 22 * scale,
              top: mousePosition.y - 8 * scale,
              fontSize: `${scale * 12}px`,
            }}
          >
            ({Math.round((mousePosition.x * 100) / parentWidth)},{' '}
            {Math.round((mousePosition.y * 100) / parentHeight)})
          </div>
        )}
        {/* {clickCoordinates.map((c: any, index) => ( */}
        {!!data?.startLocation?.x && !!data?.startLocation?.y && (
          <div
            // key={index}
            className="mouse-coordinates"
            style={{
              left: (data?.startLocation?.x * parentWidth) / 100 - 22 * scale,
              top: (data?.startLocation?.y * parentHeight) / 100 - 8 * scale,
              fontSize: `${scale * 12}px`,
            }}
          >
            ({Math.round(data?.startLocation?.x)},{' '}
            {Math.round(data?.startLocation?.y)})
          </div>
        )}

        {/* ))} */}
      </div>
    </div>
  )
}

export default CoordinatesPlayer
