import * as React from 'react'

export interface Item {
  label: string
  icon: JSX.Element
  active?: boolean
}

export interface INavItemProps {
  item: Item
}

export function NavItem({ item }: INavItemProps) {
  const { label, icon, active } = item
  return (
    <li
      className={`flex p-2 justify-end items-cent cursor-pointer${
        active ? ' bg-primary text-white' : ''
      }`}
    >
      <h3 className=" mr-2">{label}</h3>
      {icon}
    </li>
  )
}
