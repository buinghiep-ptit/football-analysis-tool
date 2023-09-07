import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useAppStore = create(
  persist(
    set => ({
      playing: false,
      scale: 1,
      updateScale: newScale => set(() => ({ scale: newScale })),
      togglePlaying: () => set(state => ({ playing: !state.playing })),
      pauseVid: () => set(() => ({ playing: false })),
      data: {
        bodypass: '4',
        curVidTime: 50.571437,
        currentKey: '1',
        eventName: 'Pass (1)',
        id: 1242569139926,
        listActivePlayer: [
          {
            id: 20,
            imgUrl: '/assets/images/shirt-white.svg',
            jerseyNo: '09',
            left: '20%',
            name: 'Đ.V. Hậu',
            teamId: 2,
            top: '75%',
          },
          {
            id: 22,
            imgUrl: '/assets/images/shirt-white.svg',
            jerseyNo: '11',
            left: '50%',
            name: 'Đ.V. Hậu',
            teamId: 1,
            top: '82.5%',
          },
        ],
        outcome: '2',
        passbackheel: true,
        passdeflected: true,
        passtype: '2',
        startLocation: { x: 94, y: 70 },
        status: 0,
        teamName: 'HNFC',
      },
      updateData: (newData, isReplace) =>
        set(state => ({
          data: isReplace ? newData : { ...state.data, ...newData },
        })),
      removeData: () => set(() => ({ data: {} })),
      records: [
        {
          bodypass: '8',
          curVidTime: 46.960998,
          currentKey: '1',
          eventName: 'Pass (1)',
          id: 1139841158433,
          listActivePlayer: [
            {
              id: 8,
              imgUrl: '/assets/images/shirt-white.svg',
              jerseyNo: '08',
              left: '70%',
              name: 'H.T. Tài',
              teamId: 1,
              top: '57.5%',
            },
            {
              id: 10,
              imgUrl: '/assets/images/shirt-white.svg',
              jerseyNo: '10',
              left: '80%',
              name: 'R. Gustavo',
              teamId: 1,
              top: '75%',
            },
          ],
          outcome: '2',
          passbackheel: true,
          passdeflected: true,
          passtype: '7',
          startLocation: { x: 93, y: 38 },
          status: 1,
          teamName: 'CAHN FC',
        },
        {
          bodypass: '4',
          curVidTime: 50.571437,
          currentKey: '1',
          eventName: 'Pass (1)',
          id: 1242569139926,
          listActivePlayer: [
            {
              id: 20,
              imgUrl: '/assets/images/shirt-white.svg',
              jerseyNo: '09',
              left: '20%',
              name: 'Đ.V. Hậu',
              teamId: 2,
              top: '75%',
            },
            {
              id: 22,
              imgUrl: '/assets/images/shirt-white.svg',
              jerseyNo: '11',
              left: '50%',
              name: 'Đ.V. Hậu',
              teamId: 1,
              top: '82.5%',
            },
          ],
          outcome: '2',
          passbackheel: true,
          passdeflected: true,
          passtype: '2',
          startLocation: { x: 94, y: 70 },
          status: 0,
          teamName: 'HNFC',
        },
      ],
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
