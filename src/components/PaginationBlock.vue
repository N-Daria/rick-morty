<template>
  <ul class="pagination">
    <li>
      <button class="pagination__button" @click="newPage(1)" :disabled="currentPage === 1">
        1
      </button>
    </li>

    <li v-if="currentPage > 2" class="pagination__button pagination__button_dots">...</li>

    <li v-if="currentPage > 1">
      <button class="pagination__button" @click="newPage(currentPage - 1)">
        {{ currentPage - 1 }}
      </button>
    </li>

    <li class="pagination__button pagination__button_current">{{ currentPage }}</li>

    <li v-if="currentPage < totalPages">
      <button class="pagination__button" @click="newPage(currentPage + 1)">
        {{ currentPage + 1 }}
      </button>
    </li>

    <li v-if="currentPage < totalPages - 1" class="pagination__button pagination__button_dots">
      ...
    </li>

    <li>
      <button
        class="pagination__button"
        @click="newPage(totalPages)"
        :disabled="currentPage === totalPages"
      >
        {{ totalPages }}
      </button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCardsStore } from '../stores/cardsStore'
import { computed } from 'vue'

const store = useCardsStore()
const { currentPage, pageStatus } = storeToRefs(store)
const totalPages = computed(() => pageStatus.value?.pages - 1 ?? 0)

// change page
const newPage = (pageNumber: number) => {
  if (pageNumber > 0 && pageNumber <= totalPages.value) {
    store.fetchInitialData(`character/?page=${pageNumber}`)
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  gap: 8px;
  margin: 50px 0;

  li {
    margin: 0 5px;

    &:first-child {
      margin-right: 25px;
    }

    &:last-child {
      margin-left: 25px;
    }
  }

  .pagination__button {
    padding: 0.75rem;
    font-weight: 400;
    font-size: 1.5rem;
    text-align: center;
    color: rgb(245, 245, 245);
    overflow: hidden;
    background: rgb(60, 62, 68);
    border-radius: 0.5rem;
    box-shadow:
      rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    transition: all 0.3s linear;
    min-width: 50px;

    &:hover {
      background-color: darkGray;
      opacity: 1;
    }

    &:disabled {
      background: black;
      opacity: 0.5;
    }
  }

  .pagination__button_current,
  .pagination__button_dots {
    background: black;

    &:hover {
      background: black;
      opacity: 1;
    }
  }

  .pagination__button_current {
    border: rgb(158, 158, 158) 1px solid;
  }
}
</style>
