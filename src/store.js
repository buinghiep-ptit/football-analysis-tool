import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useAppStore = create(
  persist(
    set => ({
      playing: true,
      scale: 1,
      updateScale: newScale => set(() => ({ scale: newScale })),
      togglePlaying: () => set(state => ({ playing: !state.playing })),
      currentKey: '1',
      updateKey: newKey => set(() => ({ currentKey: newKey })),
      data: {},
      updateData: newData =>
        set(state => ({ data: { ...state.data, ...newData } })),
    }),
    {
      name: 'fb-analysis',
      getStorage: () => ({
        setItem: (...args) => window.localStorage.setItem(...args),
        removeItem: (...args) => window.localStorage.removeItem(...args),
        getItem: async (...args) =>
          new Promise(resolve => {
            if (typeof window === 'undefined') {
              resolve(null)
            } else {
              setTimeout(() => {
                resolve(window.localStorage.getItem(...args))
              }, 0)
            }
          }),
      }),
    },
  ),
)
