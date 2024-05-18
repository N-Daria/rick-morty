import { defineStore } from 'pinia'
import type { PageState, CharacterState } from '../types/types'
import { fetchData } from '../utils/api'

export const useCardsStore = defineStore('cards', {
  state: () => ({
    pageStatus: null as PageState | null,
    loading: false,
    error: null as string | null,
    currentPage: 1,
    characters: null as CharacterState[] | null
  }),
  actions: {
    async fetchInitialData(url: string) {
      this.loading = true
      this.error = null
      try {
        const response = await fetchData(url)
        this.characters = response.results
        this.pageStatus = response.info
        this.currentPage = +response.info.next.split('=').reverse()[0] - 1
      } catch (error) {
        this.error = (error as Error).message
      } finally {
        this.loading = false
      }
    }
  }
})
