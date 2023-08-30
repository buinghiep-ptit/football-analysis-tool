import { useScale } from 'store'
import { BodyPass } from './BodyPass'
import { Location } from './Location'
import { PassBackheel } from './PassBackheel'
import { PassDeflected } from './PassDeflected'
import { PassMiscommunication } from './PassMiscommunication'
import { PassType } from './PassType'
import { Players } from './Players'
import { Team } from './Team'
import { TimeRow } from './TimeRow'
import { Technique } from './Technique'
import { PassHeight } from './PassHeight'
import { Outcome } from './Outcome'

export const Pass = () => {
  const scale = useScale(state => state.scale)

  return (
    <div className="relative">
      <div
        className="flex flex-row"
        style={{ margin: `${16 * scale}px`, gap: `${62 * scale}px` }}
      >
        <div className="w-[54.21%] ">
          <div className="flex flex-col" style={{ gap: `${16 * scale}px` }}>
            <TimeRow />
            <Team />
            <Players />
            <Location />
            <PassBackheel />
            <PassDeflected />
            <PassMiscommunication />
            <div className="flex flex-col " style={{ gap: `${4 * scale}px` }}>
              <BodyPass />
              <PassType />
            </div>
          </div>
        </div>
        <div className="flex-grow">
          <div className="flex flex-col" style={{ gap: `${8 * scale}px` }}>
            <Technique />
            <PassHeight />
            <Outcome />
          </div>
        </div>
      </div>
    </div>
  )
}
