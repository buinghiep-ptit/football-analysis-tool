import { create } from 'zustand'

export const useScale = create(set => {
  return {
    scale: 1,
    updateScale: newScale => set(() => ({ scale: newScale })),
  }
})
