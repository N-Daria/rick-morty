<template>
  <h1 v-if="loading" class="header">Загрузка</h1>

  <h1 v-else-if="error" class="header header__error">Ошибка: {{ error }}</h1>

  <main v-else class="main">
    <h1 class="header">Rick and Morty characters</h1>

    <div class="content">
      <div class="content__info">
        <FilterCharacter />

        <PaginationBlock />
      </div>

      <ul class="characters">
        <CharacterCard v-for="character in characters" :key="character.id" :character />
      </ul>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useCardsStore } from './stores/cardsStore'
import { storeToRefs } from 'pinia'
import CharacterCard from './components/CharacterCard.vue'
import PaginationBlock from './components/PaginationBlock.vue'
import FilterCharacter from './components/FilterCharacter.vue'

const store = useCardsStore()
const { characters, loading, error } = storeToRefs(store)

onMounted(() => {
  store.fetchInitialData('character')
})
</script>

<style scoped>
.header {
  margin: 0px;
  color: white;
  font-weight: 900;
  font-size: 60px;
  margin: 60px 0;
  text-align: center;
}

.header__error {
  color: red;
}

.main {
  background: rgb(39, 43, 51);
  padding: 1.5rem;
  min-height: 100vh;
}

.content {
  margin: 0 auto;
  max-width: 1920px;
}

.characters {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

@media (max-width: 40.625em) {
  .header {
    font-size: 3.125rem;
  }
}

.content__info {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 50px 0;
}
</style>
