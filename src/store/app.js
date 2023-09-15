// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  persist: true,
  state: () => ({
    applied: false,
  }),
  actions: {
    apply() {
      this.applied = true
    }
  }
})
