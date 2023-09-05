import { useAppStore } from 'store'
import { Pass } from './passes'

export const Properties = () => {
  const currentKey = useAppStore(state => state.currentKey)

  if (currentKey === '1') return <Pass />
  else return <></>
}
