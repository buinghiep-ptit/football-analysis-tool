import { ReactElement } from 'react'

export interface TableColumn<T> {
  id: T | string
  label: string
  minWidth?: number
  maxWidth?: number
  width?: number
  align?: 'center' | 'right' | 'left'
  status?: (param?: any) => ReactElement | string
  actions?: (x?: any) => any
  action?: (param?: any) => ReactElement
  format?: (param: any) => string | null | ReactElement
  media?: (param: any) => string | null | ReactElement
  link?: (param: any) => string | null | ReactElement
  sticky?: any
}
