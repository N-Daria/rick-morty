<template>
  <form class="filter" @submit.prevent="onsubmit">
    <input type="text" class="filter__input" placeholder="Character's name" v-model="form.name" />

    <select name="" id="" class="filter__select" v-model="form.status">
      <option value="">Character's status</option>
      <option value="alive">alive</option>
      <option value="unknown">unknown</option>
      <option value="dead">dead</option>
    </select>

    <button type="submit" class="filter__button">Применить</button>
  </form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useCardsStore } from '../stores/cardsStore'

const store = useCardsStore()

const form = reactive({
  name: '',
  status: ''
})

const onsubmit = () => {
  const name = form.name.toLocaleLowerCase()
  const status = form.status.toLocaleLowerCase()

  if (name && status) {
    store.changefilterQuery(`character/?name=${name}&status=${status}`)
  } else if (name) {
    store.changefilterQuery(`character/?name=${name}`)
  } else if (status) {
    store.changefilterQuery(`character/?status=${status}`)
  } else if (!name && !status) {
    store.changefilterQuery(`character/`)
  }
}
</script>

<style scoped>
.filter {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-right: 50px;
}

.filter__input,
.filter__select,
.filter__button {
  padding: 0.75rem;
  font-weight: 400;
  color: rgb(245, 245, 245);
  background-color: rgb(60, 62, 68);
  border-radius: 0.5rem;
  box-shadow:
    rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  transition: all 0.3s linear;
  font-size: 18px;
  margin: 0 5px;

  &:hover {
    background-color: darkGray;
    opacity: 1;
  }

  &::placeholder {
    color: rgb(245, 245, 245);
  }
}

.filter__button {
  background-color: black;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    opacity: 0.5;
  }
}

.filter__select {
  appearance: none;
}
</style>
