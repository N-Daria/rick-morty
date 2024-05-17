<template>
  <li class="card">
    <img class="img" :src="`${character.image}`" :alt="`${character.name}`" />

    <div class="text-block text-block_main">
      <div class="text-block">
        <h2 class="title">{{ character.name }}</h2>
        <p class="text status">
          <span class="status__icon"></span>
          {{ character.status }} - {{ character.species }}
        </p>
      </div>

      <div class="text-block">
        <span class="text-span">Last known location:</span>
        <p class="text">{{ character.location.name }}</p>
      </div>

      <div class="text-block">
        <p class="text-span">First seen in:</p>
        <p class="text">{{ character.location.name }}</p>
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { CharacterState } from '../types/types'

const props = defineProps<{ character: CharacterState }>()
const { character } = props
</script>

<style scoped lang="scss">
// $character-colors: (
//   alive: rgb(85, 204, 68),
//   dead: red,
//   unknown: rgb(158, 158, 158)
// );

.card {
  color: rgb(245, 245, 245);
  width: 600px;
  height: 220px;
  display: flex;
  overflow: hidden;
  background: rgb(60, 62, 68);
  border-radius: 0.5rem;
  margin: 0.75rem;
  box-shadow:
    rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

  .img {
    width: 100%;
    max-width: 220px;
    object-position: center;
    object-fit: cover;
  }

  .text-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .text-block_main {
    padding: 0.75rem;
    justify-content: space-between;
  }

  .title {
    font-size: 1.5rem;
  }

  .text {
    font-size: 18px;
    font-weight: 500;
  }

  .status {
    font-size: 16px;
    display: flex;
    align-items: center;
  }

  .status__icon {
    display: block;
    height: 0.5rem;
    width: 0.5rem;
    margin-right: 0.375rem;
    border-radius: 50%;
  }

  .text-span {
    color: rgb(158, 158, 158);
    font-size: 16px;
    font-weight: 500;
  }

  @media (max-width: 40.625em) {
    flex-direction: column;
    height: initial;
    width: 100%;

    .img {
      height: 300px;
      max-width: none;
    }

    .text-block_main .text-block {
      margin-top: 1.25rem;
    }

    .text-block_main .text-block:first-child {
      margin-top: 0;
    }
  }
}
</style>
