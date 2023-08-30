import * as React from 'react'
import ReactPlayer from 'react-player'
import { SliderControl } from './SliderControl'
import { useScale } from 'store'

export interface IVideoPlayerProps {
  url?: string
}

export function VideoPlayer({ url }: IVideoPlayerProps) {
  const scale = useScale(state => state.scale)

  const [state, setState] = React.useState({
    url: null,
    pip: false,
    playing: true,
    controls: false,
    light: false,
    volume: 1,
    muted: true,
    played: 0,
    loaded: 0,
    playedSeconds: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
  })

  const playerRef = React.useRef(null) as any

  const handleSeekMouseDown = () => {
    setState(prev => ({
      ...prev,
      seeking: true,
    }))
  }

  const handleSeekChange = (e: any) => {
    setState(prev => ({
      ...prev,
      played: parseFloat(
        (e.target.value / state.duration) as unknown as string,
      ),
    }))
  }

  const handleSeekMouseUp = (e: any) => {
    setState(prev => ({
      ...prev,
      seeking: false,
    }))
    playerRef.current.seekTo(
      parseFloat((e.target.value / state.duration) as unknown as string),
    )
  }

  const handleProgress = (state: any) => {
    if (!state.seeking) {
      setState(prev => ({ ...prev, ...state }))
    }
  }

  const handleDuration = (duration: number) => {
    setState(prev => ({ ...prev, duration }))
  }

  return (
    <>
      <div className="pt-[56.25%] relative">
        <ReactPlayer
          key={1}
          ref={playerRef}
          style={{ position: 'absolute', top: 0, left: 0 }}
          width="100%"
          height="100%"
          url={url}
          controls={state.controls}
          config={{
            file: {
              attributes: {
                onContextMenu: (e: any) => e.preventDefault(),
                controlsList: 'nodownload',
              },
            },
          }}
          playing={state.playing}
          muted={state.muted}
          onProgress={handleProgress}
          onDuration={handleDuration}
          //   onSeek={e => console.log('onSeek', e)}
        />
      </div>
      <div style={{ padding: `0 ${40 * scale}px` }}>
        <SliderControl
          onChange={handleSeekChange}
          onMouseDown={handleSeekMouseDown}
          onMouseUp={handleSeekMouseUp}
          value={state.played * state.duration}
          duration={state.duration}
        />
      </div>
    </>
  )
}
