import { useState } from 'react'
import { useScale } from 'store'

export interface IPlayer {
  top: string
  left: string
  imgUrl: string
  num: string
  name: string
  playerIdx: number
  activeIdx: number
}

const Item = ({
  scale,
  top,
  left,
  imgUrl,
  num,
  name,
  playerIdx,
  activeIdx,
}: IPlayer & { scale: number }) => {
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
            activeIdx === playerIdx ? '/assets/images/shirt-yellow.png' : imgUrl
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

const listPlayer = [
  {
    top: '4.5%',
    left: '50%',
    imgUrl: '/assets/images/shirt-white.png',
    num: '01',
    name: 'Đ.V. Hậu',
  },
  {
    top: '17.5%',
    left: '20%',
    imgUrl: '/assets/images/shirt-white.png',
    num: '02',
    name: 'Đ.V. Hậu',
  },
  {
    top: '25%',
    left: '50%',
    imgUrl: '/assets/images/shirt-white.png',
    num: '03',
    name: 'Đ.V. Hậu',
  },
  {
    top: '16%',
    left: '80%',
    imgUrl: '/assets/images/shirt-white.png',
    num: '04',
    name: 'Đ.V. Hậu',
  },
  {
    top: '42.5%',
    left: '15%',
    imgUrl: '/assets/images/shirt-white.png',
    num: '05',
    name: 'Đ.V. Hậu',
  },
  {
    top: '42.5%',
    left: '85%',
    imgUrl: '/assets/images/shirt-white.png',
    num: '06',
    name: 'Đ.V. Hậu',
  },
  {
    top: '57.5%',
    left: '30%',
    imgUrl: '/assets/images/shirt-white.png',
    num: '07',
    name: 'Đ.V. Hậu',
  },
  {
    top: '57.5%',
    left: '70%',
    imgUrl: '/assets/images/shirt-white.png',
    num: '08',
    name: 'Đ.V. Hậu',
  },
  {
    top: '75%',
    left: '20%',
    imgUrl: '/assets/images/shirt-white.png',
    num: '09',
    name: 'Đ.V. Hậu',
  },
  {
    top: '75%',
    left: '80%',
    imgUrl: '/assets/images/shirt-white.png',
    num: '10',
    name: 'Đ.V. Hậu',
  },
  {
    top: '82.5%',
    left: '50%',
    imgUrl: '/assets/images/shirt-white.png',
    num: '11',
    name: 'Đ.V. Hậu',
  },
]

const LineUp = ({ logo }: { logo: string }) => {
  const [activePlayer, setActivePlayer] = useState(-1)
  const scale = useScale(state => state.scale)

  const handleMouseDown = (idx: number) => {
    setActivePlayer(idx)
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
          src={logo}
          width={28 * scale}
          height={28 * scale}
          style={{ position: 'absolute', top: 12 * scale, left: 12 * scale }}
        />
        {listPlayer.map((p, index) => (
          <div key={index} onMouseDown={() => handleMouseDown(index)}>
            <Item
              scale={scale}
              top={p.top}
              left={p.left}
              imgUrl={p.imgUrl}
              num={p.num}
              name={p.name}
              playerIdx={index}
              activeIdx={activePlayer}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default LineUp
