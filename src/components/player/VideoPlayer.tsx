import * as React from 'react'
import ReactPlayer from 'react-player'
import { SliderTimeControl } from './SliderTimeControl'
import Duration from './Duration'
import { useAppStore } from 'store'

export interface IVideoPlayerProps {
  url?: string
}

export function VideoPlayer({ url }: IVideoPlayerProps) {
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

  const scale = useAppStore(state => state.scale)
  const updateData = useAppStore(state => state.updateData)

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
    playerRef.current.seekTo(
      parseFloat((e.target.value / state.duration) as unknown as string),
    )
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
    // if (!state.seeking) {
    setState(prev => ({ ...prev, ...state }))
    // }
  }

  const handleDuration = (duration: number) => {
    setState(prev => ({ ...prev, duration }))
  }

  // const handlePlayPause = () => {
  //   setState(prev => ({ ...prev, playing: !state.playing }))
  // }

  const togglePlayPause = () => {
    if (playerRef.current) {
      const player = playerRef.current.getInternalPlayer()
      if (player) {
        if (player.paused) {
          player.play()
        } else {
          updateData({
            vidTime: playerRef.current.getInternalPlayer().currentTime,
          })
          player.pause()
        }
      }
    }
  }

  const handleSpaceKeyPress = (event: any) => {
    if (event.key === ' ') {
      togglePlayPause()
    }
  }

  React.useEffect(() => {
    // Add event listener when the component mounts
    document.addEventListener('keydown', handleSpaceKeyPress)

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleSpaceKeyPress)
    }
  }, [])

  const handlePlay = () => {
    setState(prev => ({ ...prev, playing: true }))
  }

  const handlePause = () => {
    setState(prev => ({ ...prev, playing: false }))
  }

  return (
    <div className="relative">
      <div className="pt-[56.25%] relative" onMouseDown={togglePlayPause}>
        <ReactPlayer
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
          light={state.light}
          playing={state.playing}
          muted={state.muted}
          onProgress={handleProgress}
          onPlay={() => {
            handlePlay()
          }}
          onPause={() => {
            handlePause()
          }}
          onDuration={handleDuration}
          //   onSeek={e => console.log('onSeek', e)}
        />
      </div>

      <SliderTimeControl
        onChange={handleSeekChange}
        onMouseDown={handleSeekMouseDown}
        onMouseUp={handleSeekMouseUp}
        value={state.played * state.duration}
        duration={state.duration}
      />

      <div
        className="relative"
        style={{
          zIndex: 0,
          margin: `${24 * scale}px ${40 * scale}px ${16 * scale}px ${
            40 * scale
          }px`,
          padding: `${12 * scale}px 0`,
        }}
      >
        <div
          className="absolute top-0 left-[-12px]"
          style={{ left: `${-14 * scale}px` }}
        >
          <Duration size={14} seconds={0} />
        </div>
        <div className="absolute top-0" style={{ right: `${-14 * scale}px` }}>
          <Duration size={14} seconds={state.duration} />
        </div>
        <div
          className="absolute top-0 bottom-0 h-full text-right"
          style={{
            left: `calc(${
              (state.played * state.duration * 100) / state.duration
            }% - ${16 * scale}px)`,
          }}
        >
          <Duration size={16} seconds={state.played * state.duration} />
        </div>
      </div>
      {/* <SliderControl
          onChange={handleSeekChange}
          onMouseDown={handleSeekMouseDown}
          onMouseUp={handleSeekMouseUp}
          value={state.played * state.duration}
          duration={state.duration}
        /> */}
    </div>
  )
}
