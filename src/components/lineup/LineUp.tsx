import { ILineUp, IPlayer } from 'models'
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
  lineUp?: ILineUp
  listActivePlayer?: IPlayer[]
  updateData: (data: any) => void
}

const LineUp = ({ lineUp, listActivePlayer, updateData }: IProps) => {
  const scale = useAppStore(state => state.scale)

  const handleMouseDown = (player: IPlayer) => {
    const idx = listActivePlayer?.findIndex(p => p.id === player.id)
    if (idx !== -1 && idx !== undefined) {
      listActivePlayer?.splice(idx, 1)
      updateData({
        listActivePlayer: [...(listActivePlayer?.slice(-1) ?? [])],
      })
      return
    }
    updateData({
      listActivePlayer: [...(listActivePlayer?.slice(-1) ?? []), player],
      teamName: lineUp?.teamName,
    })
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
        {lineUp?.players?.map((player, index) => (
          <div key={index} onMouseDown={() => handleMouseDown(player)}>
            <Item
              scale={scale}
              top={player?.top}
              left={player?.left}
              imgUrl={player?.imgUrl}
              num={player?.jerseyNo}
              name={player?.name}
              isActive={
                !!listActivePlayer?.length &&
                !!listActivePlayer
                  ?.filter(p1 => p1.teamId === lineUp.teamId)
                  .find(p2 => p2.id === player.id)
              }
              isFirst={
                player.id ===
                (listActivePlayer?.filter(p => p.teamId === lineUp.teamId) ??
                  [])[0]?.id
              }
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default LineUp
