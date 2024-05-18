import { defineStore } from 'pinia'
import type { PageState, CharacterState } from '../types/types'
import { fetchData } from '../utils/api'

export const useCardsStore = defineStore('cards', {
  state: () => ({
    pageStatus: null as PageState | null,
    loading: false,
    error: null as string | null,
    currentPage: 1,
    characters: null as CharacterState[] | null,
    filterQuery: ''
  }),
  actions: {
    async fetchInitialData(url: string) {
      this.loading = true
      this.error = null

      try {
        if (
          url.includes('character') &&
          this.filterQuery.includes('character') &&
          url !== this.filterQuery
        ) {
          this.filterQuery = this.filterQuery.replace('character/?', '&')
        }

        const fullUrl = this.filterQuery ? `${url}${this.filterQuery}` : url
        const response = await fetchData(fullUrl)

        this.characters = response.results
        this.pageStatus = response.info

        if (response.info.next) {
          this.currentPage = parseInt(response.info.next.split('page=').reverse()) - 1
        } else {
          this.currentPage = 1
        }
      } catch (error) {
        this.error = (error as Error).message
      } finally {
        this.loading = false
      }
    },

    async changePage(url: string) {
      this.fetchInitialData(url)
    },

    async changefilterQuery(url: string) {
      this.filterQuery = url
      this.fetchInitialData('')
    }
  }
})
