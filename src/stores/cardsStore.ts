import { defineStore } from 'pinia'
import type { PageState } from '../types/types'
import { getCards } from '../utils/api'

export const useCardsStore = defineStore('cards', {
  state: () => ({
    data: null as PageState | null,
    loading: false,
    error: null as string | null
  }),
  actions: {
    async fetchInitialData(url: string) {
      this.loading = true
      this.error = null
      try {
        const response = await getCards(url)
        this.data = response
      } catch (error) {
        this.error = (error as Error).message
      } finally {
        this.loading = false
      }
    }
  }
})
