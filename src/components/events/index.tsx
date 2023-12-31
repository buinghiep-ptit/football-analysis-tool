import React, { useEffect, useState } from 'react'
import TabsEvent from './TabsEvent'
import ButtonsEvent from './ButtonsEvent'
import { RecordsEvent } from './RecordsEvent'
import { useAppStore } from 'store'

export const Events = () => {
  const [currentTab, setCurrentTab] = useState(1)
  const scale = useAppStore(state => state.scale)
  const data = useAppStore(state => state.data)
  const records = useAppStore(state => state.records)

  useEffect(() => {
    if (data.id) {
      const record = records?.find((r: any) => r.id === data.id)
      if (record) setCurrentTab(2)
    }
  }, [data])

  return (
    <div className="bg-neutral-8 overflow-hidden flex-grow">
      <div className="flex flex-col w-[100%] h-[100%] relative">
        <TabsEvent currentTab={currentTab} setCurrentTab={setCurrentTab} />
        {currentTab === 1 && <ButtonsEvent />}

        {currentTab === 2 && (
          <>
            <RecordsEvent />
            <div
              className="absolute bottom-0 left-0 w-full h-[36px]"
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
