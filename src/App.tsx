import { Events } from 'components/events'
import CoordinatesPlayer from 'components/lineup/CoordinatesPlayer'
import LineUp from 'components/lineup/LineUp'
import { Player } from 'components/player'
import { Properties } from 'components/properties'
import { lineUp1, lineUp2 } from 'data'
import { IPlayer } from 'models'
import * as React from 'react'
import { useAppStore } from 'store'
import './App.css'
import { LIST_KEY, uniqueId } from 'utils/common'
import { toast } from 'react-toastify'
const ASPECT_RATIO = 1872 / 946

export const SubmitButton = ({
  onClick,
  title,
  hotkey,
  scale,
  width,
}: {
  onClick: () => void
  title: string
  hotkey: string
  scale: number
  width: number
}) => {
  return (
    <div
      className="flex flex-col items-center"
      style={{ gap: `${8 * scale}px` }}
    >
      <button
        onClick={onClick}
        className="btn hover:bg-white transition ease-out duration-500"
        style={{
          fontSize: `${16 * scale}px`,
          width: `${width * scale}px`,
          padding: `${12 * scale}px ${16 * scale}px`,
        }}
      >
        {title}
      </button>
      <span
        className="text-neutral-5"
        style={{
          fontSize: `${13 * scale}px`,
        }}
      >
        ({hotkey})
      </span>
    </div>
  )
}

function App() {
  const viewportRef = React.useRef(null) as any
  const [isTall, setIsTall] = React.useState(false)
  const scale = useAppStore(state => state.scale)
  const updateScale = useAppStore(state => state.updateScale)
  const playing = useAppStore(state => state.playing)
  const data = useAppStore(state => state.data)
  const updateData = useAppStore(state => state.updateData)
  const removeData = useAppStore(state => state.removeData)
  const addRecord = useAppStore(state => state.addRecord)
  const editRecord = useAppStore(state => state.editRecord)
  const updateKey = useAppStore(state => state.updateKey)

  React.useEffect(() => {
    const container = document.getElementById('container') as any

    const isTall = container.clientWidth / container.clientHeight < ASPECT_RATIO
    setIsTall(isTall)
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

  const cancelEvent = () => {
    if (!data.id) {
      removeData()
      toast.error('Đã hủy')
    }
  }

  const latterEvent = () => {
    if (data.id) {
      editRecord({ ...data, status: 0 })
    } else {
      addRecord({ ...data, status: 0, id: uniqueId() })
      removeData()
    }
    toast.warning('Đã lưu')
  }

  const finishEvent = () => {
    if (data.id) {
      editRecord({ ...data, status: 1 })
    } else {
      addRecord({ ...data, status: 1, id: uniqueId() })
      removeData()
    }
    toast.success('Đã hoàn tất')
  }

  const handleKeyDown = (event: any) => {
    const key = event.key.toLowerCase()
    if (key === 'escape') {
      cancelEvent()
    } else if (key === 'shift') {
      latterEvent()
    } else if (key === 'enter') {
      finishEvent()
    } else {
      const currentButtonIndex = LIST_KEY.findIndex(b => b.key && b.key === key)
      if (currentButtonIndex !== -1) {
        updateKey(key)
        updateData({ eventName: LIST_KEY[currentButtonIndex].title })
      }
    }
  }

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [data])

  return (
    <div
      id="container"
      className="relative flex justify-center items-center bg-neutral-9 m-0 h-[100vh] w-[100vw]"
      style={{
        padding: `${16 * scale}px ${24 * scale}px`,
      }}
    >
      <div
        ref={viewportRef}
        className={`relative aspect-[1872/946] overflow-hidden ${
          isTall ? 'w-[100%] h-[auto]' : 'w-[auto] h-[100%]'
        }`}
      >
        <div className="flex h-[100%]">
          <div
            className="flex flex-col w-[42.735%] h-[100%]"
            style={{ gap: `${24 * scale}px` }}
          >
            <Player />
            <Events />
          </div>
          <div
            className="flex flex-col w-[57.265%] h-[100%] gap-1"
            style={{
              paddingLeft: `${20 * scale}px`,
              pointerEvents: playing ? 'none' : 'inherit',
            }}
          >
            <div
              className="flex flex-row  bg-neutral-8"
              style={{ paddingBottom: `${20 * scale}px` }}
            >
              <div className="w-[52.25%]">
                <div className="flex flex-row bg-neutral-9">
                  <div onMouseDown={() => {}}>
                    <LineUp
                      lineUp={lineUp1}
                      listActivePlayer={data?.listActivePlayer?.filter(
                        (p: IPlayer) => p.teamId === lineUp1.teamId,
                      )}
                      updateData={updateData}
                    />
                  </div>
                  <div onMouseDown={() => {}}>
                    <LineUp
                      lineUp={lineUp2}
                      listActivePlayer={data?.listActivePlayer?.filter(
                        (p: IPlayer) => p.teamId === lineUp2.teamId,
                      )}
                      updateData={updateData}
                    />
                  </div>
                </div>
              </div>
              <div className="w-[47.75%]">
                <CoordinatesPlayer />
              </div>
            </div>

            <div className="bg-neutral-8 overflow-hidden flex-grow">
              <div className="flex flex-col h-[100%]">
                <Properties />
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute flex flex-row bg-[#292E33]"
          style={{
            padding: `${20 * scale}px ${16 * scale}px ${12 * scale}px ${
              16 * scale
            }px`,
            bottom: 0,
            right: 0,
            gap: `${16 * scale}px`,
          }}
        >
          <SubmitButton
            onClick={cancelEvent}
            title="Hủy"
            hotkey="Esc"
            scale={scale}
            width={96}
          />

          <SubmitButton
            onClick={latterEvent}
            title="Để sau"
            hotkey="Shift"
            scale={scale}
            width={132}
          />

          <SubmitButton
            onClick={finishEvent}
            title="Hoàn thành"
            hotkey="Enter"
            scale={scale}
            width={132}
          />
        </div>
      </div>
    </div>
  )
}

export default App
