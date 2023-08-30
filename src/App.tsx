import * as React from 'react'
import { Player } from 'component/player'
import './App.css'
import { Events } from 'component/events'
import LineUp from 'component/lineup/LineUp'
import CoordinatesPlayer from 'component/lineup/CoordinatesPlayer'
import { useScale } from 'store'
import { Properties } from 'component/properties'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
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

  const validationSchema = yup.object().shape({})

  const methods = useForm({
    defaultValues: {
      passbackheel: true,
      passdeflected: false,
      passmiscommunication: true,
      bodypass: '6',
      passtype: '4',
      technique: '3',
      passheight: '2',
      outcome: '4',
    },
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  })

  const onSubmitHandler: SubmitHandler<any> = async (values: any) => {
    console.log('values:', values)
  }

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

                <div className="bg-neutral-8 overflow-hidden">
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
              <div
                className="flex flex-col items-center"
                style={{ gap: `${8 * scale}px` }}
              >
                <button
                  onClick={methods.handleSubmit(onSubmitHandler)}
                  className="btn hover:bg-white transition ease-out duration-500"
                  style={{
                    fontSize: `${16 * scale}px`,
                    width: `${96 * scale}px`,
                  }}
                >
                  Hủy
                </button>
                <span
                  className="text-neutral-5"
                  style={{
                    fontSize: `${13 * scale}px`,
                  }}
                >
                  (Esc)
                </span>
              </div>

              <div
                className="flex flex-col items-center"
                style={{ gap: `${8 * scale}px` }}
              >
                <button
                  onClick={methods.handleSubmit(onSubmitHandler)}
                  className="btn hover:bg-white transition ease-out duration-500"
                  style={{
                    fontSize: `${16 * scale}px`,
                    width: `${132 * scale}px`,
                  }}
                >
                  Để sau
                </button>
                <span
                  className="text-neutral-5"
                  style={{
                    fontSize: `${13 * scale}px`,
                  }}
                >
                  (Shift)
                </span>
              </div>

              <div
                className="flex flex-col items-center"
                style={{ gap: `${8 * scale}px` }}
              >
                <button
                  onClick={methods.handleSubmit(onSubmitHandler)}
                  className="btn hover:bg-white transition ease-out duration-500"
                  style={{
                    fontSize: `${16 * scale}px`,
                    width: `${132 * scale}px`,
                  }}
                >
                  Hoàn thành
                </button>
                <span
                  className="text-neutral-5"
                  style={{
                    fontSize: `${13 * scale}px`,
                  }}
                >
                  (Enter)
                </span>
              </div>
            </div>
          </div>
        </div>
      </FormProvider>
    </form>
  )
}

export default App
