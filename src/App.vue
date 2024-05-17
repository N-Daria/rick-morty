<template>
  <h1 class="header">Rick and Morty characters</h1>

  <div v-if="loading" class="header">Загрузка</div>

  <div v-else-if="error" class="header header__error">Ошибка: {{ error }}</div>

  <main v-else class="main">
    <ul class="characters">
      <CharacterCard v-for="character in data?.results" :key="character.id" :character />
    </ul>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useCardsStore } from './stores/cardsStore'
import { storeToRefs } from 'pinia'
import CharacterCard from './components/CharacterCard.vue'

const store = useCardsStore()
const { data, loading, error } = storeToRefs(store)

onMounted(() => {
  store.fetchInitialData('character')
})
</script>

<style scoped>
.header {
  margin: 0px;
  color: rgb(32, 35, 41);
  font-weight: 900;
  font-size: 60px;
  margin: 50px 0;
  text-align: center;
}

.header__error {
  color: red;
}

.main {
  background: rgb(39, 43, 51);
  padding: 1.5rem;
}

.characters {
  width: 100%;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1920px;
}

@media (max-width: 40.625em) {
  .header {
    font-size: 3.125rem;
  }
}
</style>
