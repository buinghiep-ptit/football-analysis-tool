import { useAppStore } from 'store'
import { Pass } from './passes'

export const Properties = () => {
  const data = useAppStore(state => state.data)

  if (data?.currentKey === '1' || !data?.currentKey) return <Pass />
  else return <></>
}
