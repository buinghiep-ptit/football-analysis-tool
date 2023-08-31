import React, { useState } from 'react'
import TabsEvent from './TabsEvent'
import ButtonsEvent from './ButtonsEvent'
import { RecordsEvent } from './RecordsEvent'
import { useScale } from 'store'

export const Events = () => {
  const [currentTab, setCurrentTab] = useState(1)

  const scale = useScale(state => state.scale)
  return (
    <div className="bg-neutral-8 overflow-hidden">
      <div className="flex flex-col w-[100%] h-[100%] relative">
        <TabsEvent currentTab={currentTab} setCurrentTab={setCurrentTab} />
        {currentTab === 1 && <ButtonsEvent />}

        {currentTab === 2 && (
          <>
            <RecordsEvent />
            <div
              className=" absolute bottom-0 left-0 w-full h-[36px]"
              style={{
                background:
                  'linear-gradient(180deg, rgba(52, 58, 64, 0.00) 0%, #343A40 100%)',
                height: `${36 * scale}px`,
                zIndex: 10,
              }}
            ></div>
          </>
        )}
      </div>
    </div>
  )
}
