import { yupResolver } from '@hookform/resolvers/yup'
import { Events } from 'components/events'
import CoordinatesPlayer from 'components/lineup/CoordinatesPlayer'
import LineUp from 'components/lineup/LineUp'
import { Player } from 'components/player'
import { Properties } from 'components/properties'
import { lineUp1, lineUp2 } from 'data'
import * as React from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { useAppStore } from 'store'
import * as yup from 'yup'
import './App.css'
import { IPlayer } from 'models'
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
  const data = useAppStore(state => state.data)
  const updateData = useAppStore(state => state.updateData)

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

  const validationSchema = yup.object().shape({})

  const methods = useForm({
    defaultValues: {
      passbackheel: true,
      passdeflected: false,
      passmiscommunication: true,
      bodypass: '1',
      passtype: '1',
      technique: '1',
      passheight: '1',
      outcome: '1',
    },
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  })

  const onSubmitHandler: SubmitHandler<any> = async (values: any) => {
    console.log('values:', values)
  }

  console.log('player active:', data)

  return (
    <form onSubmit={methods.handleSubmit(onSubmitHandler)}>
      <FormProvider {...methods}>
        <div
          id="container"
          className="relative flex justify-center items-center bg-neutral-9 m-0 h-[100vh] w-[100vw]"
          style={{ padding: `${16 * scale}px ${24 * scale}px` }}
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
                style={{ paddingLeft: `${20 * scale}px` }}
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
                onClick={methods.handleSubmit(onSubmitHandler)}
                title="Hủy"
                hotkey="Esc"
                scale={scale}
                width={96}
              />

              <SubmitButton
                onClick={methods.handleSubmit(onSubmitHandler)}
                title="Để sau"
                hotkey="Shift"
                scale={scale}
                width={132}
              />

              <SubmitButton
                onClick={methods.handleSubmit(onSubmitHandler)}
                title="Hoàn thành"
                hotkey="Enter"
                scale={scale}
                width={132}
              />
            </div>
          </div>
        </div>
      </FormProvider>
    </form>
  )
}

export default App
