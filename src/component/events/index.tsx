import React from 'react'
import TabsEvent from './TabsEvent'
import ButtonsEvent from './ButtonsEvent'

export const Events = () => {
  return (
    <div className="bg-neutral-8 overflow-hidden">
      <div className="flex flex-col gap-0 h-[100%]">
        <TabsEvent />
        <ButtonsEvent />
      </div>
    </div>
  )
}
