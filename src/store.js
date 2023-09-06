import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useAppStore = create(
  persist(
    set => ({
      playing: true,
      scale: 1,
      updateScale: newScale => set(() => ({ scale: newScale })),
      togglePlaying: () => set(state => ({ playing: !state.playing })),
      pauseVid: () => set(() => ({ playing: false })),
      currentKey: '',
      updateKey: newKey => set(() => ({ currentKey: newKey })),
      data: {},
      updateData: (newData, isReplace) =>
        set(state => ({
          data: isReplace ? newData : { ...state.data, ...newData },
        })),
      removeData: () => set(() => ({ data: {} })),
      records: [],
      addRecord: record =>
        set(state => ({ records: [...state.records, record] })),
      removeRecord: recordId =>
        set(state => ({
          records: [...state.records].filter(r => r.id !== recordId),
        })),
      editRecord: record =>
        set(state => {
          const idx = [...state.records].findIndex(r => r.id === record.id)
          const newRecords = [...state.records]
          if (idx !== -1) newRecords[idx] = record

          return { records: newRecords }
        }),
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
