import { IPlayer } from 'models'
import { useState } from 'react'
import { useAppStore } from 'store'

export interface ItemProps {
  top?: string
  left?: string
  imgUrl?: string
  num?: string
  name?: string
  isActive?: boolean
  isFirst?: boolean
}

const Item = ({
  scale,
  top,
  left,
  imgUrl,
  num,
  name,
  isActive,
  isFirst,
}: ItemProps & { scale: number }) => {
  return (
    <div
      className={`absolute cursor-pointer`}
      style={{
        left: `${left}`,
        top: `${top}`,
      }}
    >
      <div className="flex flex-col items-center translate-x-[-50%] translate-y-[-2px] gap-[4px] ">
        <img
          src={
            isActive
              ? !isFirst
                ? '/assets/images/shirt-green.svg'
                : '/assets/images/shirt-yellow.svg'
              : imgUrl
          }
          width={36 * scale}
          height={28 * scale}
          alt=""
        />
        <span
          className=" absolute top-[2px] text-neutral-9 font-bebas"
          style={{ fontSize: `${scale * 20}px` }}
        >
          {num}
        </span>
        <span
          className="text-neutral-0 font-semibold"
          style={{ fontSize: `${scale * 13}px`, whiteSpace: 'nowrap' }}
        >
          {name}
        </span>
      </div>
    </div>
  )
}

export interface IProps {
  lineUp?: {
    logo?: string
    pos?: number
    teamName?: string
    players: IPlayer[]
  }
}

const LineUp = ({ lineUp }: IProps) => {
  const scale = useAppStore(state => state.scale)
  const data = useAppStore(state => state.data)
  // const updateData = useAppStore(state => state.updateData)
  const [listActivePlayer, setListActivePlayer] = useState<number[]>(
    data.listActivePlayer ?? [],
  )

  // useEffect(() => {
  //   if (!data?.lineup) return
  //   console.log(lineUp?.pos, data.lineupPos)
  //   if (lineUp?.pos === data.lineupPos) {
  //     setListActivePlayer(listActivePlayer.slice(-1))
  //     updateData({
  //       listActivePlayer: (data?.listActivePlayer ?? []).slice(-1),
  //     })
  //   } else {
  //     setListActivePlayer([])
  //     updateData({
  //       listActivePlayer: [],
  //     })
  //   }
  // }, [data.lineup])

  const handleMouseDown = (idx: number) => {
    setListActivePlayer(prev => [...prev.slice(-1), idx])
    // updateData({
    //   listActivePlayer: [...(data.listActivePlayer ?? []).slice(-1), idx],
    // })
  }

  return (
    <div className="flex-1">
      <div
        className="flex flex-row justify-center items-center bg-neutral-8"
        style={{
          gap: `${48 * scale}px`,
          // padding: `${20 * scale}px 0 ${12 * scale}px 0`,
          height: 48 * scale,
        }}
      >
        <span
          className=" font-semibold text-blue-4 underline cursor-pointer"
          style={{ fontSize: `${14 * scale}px` }}
        >
          Dự bị
        </span>

        <span
          className=" font-semibold text-blue-4 underline cursor-pointer"
          style={{ fontSize: `${14 * scale}px` }}
        >
          Huấn luyện viên
        </span>
      </div>
      <div className="flex-1 relative">
        <img src="/assets/images/lineup-bg.png" width={'100%'} alt="" />
        <img
          src={lineUp?.logo}
          width={28 * scale}
          height={28 * scale}
          style={{ position: 'absolute', top: 12 * scale, left: 12 * scale }}
        />
        {lineUp?.players.map((p, index) => (
          <div key={index} onMouseDown={() => handleMouseDown(index)}>
            <Item
              scale={scale}
              top={p?.top}
              left={p?.left}
              imgUrl={p?.imgUrl}
              num={p?.jerseyNo}
              name={p?.name}
              isActive={
                (listActivePlayer ?? []).findIndex((p: any) => p === index) !==
                -1
              }
              isFirst={index === (listActivePlayer ?? [])[0]}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default LineUp
