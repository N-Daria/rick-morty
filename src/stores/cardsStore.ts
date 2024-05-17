import { defineStore } from 'pinia'
import type { PageState } from '../types/types'
import { fetchData } from '../utils/api'

export const useCardsStore = defineStore('cards', {
  state: () => ({
    characters: null as PageState | null,
    loading: false,
    error: null as string | null
  }),
  actions: {
    async fetchInitialData(url: string) {
      this.loading = true
      this.error = null
      try {
        const response = await fetchData(url)
        this.characters = response
      } catch (error) {
        this.error = (error as Error).message
      } finally {
        this.loading = false
      }
    }
  }
})
