<template>
  <h1>sfdgdgr</h1>

  <div v-if="loading" class="loading">Загрузка</div>

  <div v-else-if="error" class="error">{{ error }}</div>

  <ul v-else>
    <li v-for="character in data?.results" :key="character.id">{{ character }}</li>
  </ul>
</template>
jhj

<script setup lang="ts">
import { onMounted } from 'vue'
import { useCardsStore } from './stores/cardsStore'
import { storeToRefs } from 'pinia'

const store = useCardsStore()
const { data, loading, error } = storeToRefs(store)

onMounted(() => {
  store.fetchInitialData('character')
})
</script>

<style scoped>
.loading {
  margin: 0px;
  color: rgb(32, 35, 41);
  border: none;
  font-weight: 900;
  z-index: 1;
  font-size: 5.625rem;
}

.error {
  margin: 0px;
  color: rgb(32, 35, 41);
  border: none;
  font-weight: 900;
  z-index: 1;
  font-size: 5.625rem;
  color: red;
}
</style>
