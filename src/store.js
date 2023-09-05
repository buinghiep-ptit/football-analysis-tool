import { create } from 'zustand'

export const useAppStore = create(set => {
  return {
    playing: true,
    scale: 1,
    updateScale: newScale => set(() => ({ scale: newScale })),
    togglePlaying: () => set(state => ({ playing: !state.playing })),
    currentKey: '1',
    updateKey: newKey => set(() => ({ currentKey: newKey })),
    data: {},
    updateData: newData =>
      set(state => ({ data: { ...state.data, ...newData } })),
  }
})
