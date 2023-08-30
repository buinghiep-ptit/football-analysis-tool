import * as React from 'react'
import { Player } from 'component/player'
import './App.css'
import { Events } from 'component/events'
import LineUp from 'component/lineup/LineUp'
import CoordinatesPlayer from 'component/lineup/CoordinatesPlayer'
import { useScale } from 'store'
import { Properties } from 'component/properties'

const ASPECT_RATIO = 1872 / 946

function App() {
  const viewportRef = React.useRef(null) as any
  const [isTall, setIsTall] = React.useState(false)
  const scale = useScale(state => state.scale)
  const updateScale = useScale(state => state.updateScale)
  React.useEffect(() => {
    if (viewportRef.current) {
      updateScale(viewportRef.current.offsetWidth / 1920)
    }
  }, [])

  React.useEffect(() => {
    const handleResize = () => {
      if (viewportRef.current) {
        updateScale(viewportRef.current.offsetWidth / 1920)
      }

      const container = document.getElementById('container') as any

      const isTall =
        container.clientWidth / container.clientHeight < ASPECT_RATIO
      setIsTall(isTall)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div
      id="container"
      className="flex justify-center items-center px-6 py-4 bg-neutral-9 m-0 h-[100vh] w-[100vw]"
      style={{ padding: `${16 * scale}px ${24 * scale}px` }}
    >
      <div
        ref={viewportRef}
        className={`aspect-[1872/946] overflow-hidden ${
          isTall ? 'w-[100%] h-[auto]' : 'w-[auto] h-[100%]'
        }`}
      >
        <div className="flex h-[100%]" style={{ gap: `${20 * scale}px` }}>
          <div
            className="flex flex-col w-[42.735%] h-[100%]"
            style={{ gap: `${24 * scale}px` }}
          >
            <Player />
            <Events />
          </div>
          <div className="flex flex-col w-[57.265%] h-[100%] gap-1">
            <div
              className="flex flex-row  bg-neutral-8"
              style={{ paddingBottom: `${20 * scale}px` }}
            >
              <div className="w-[52.25%]">
                <div className="flex flex-row bg-neutral-9">
                  <LineUp />
                  <LineUp />
                </div>
              </div>
              <div className="w-[47.75%]">
                <CoordinatesPlayer />
              </div>
            </div>
            <div className="flex-grow bg-neutral-8 overflow-auto">
              <Properties />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
