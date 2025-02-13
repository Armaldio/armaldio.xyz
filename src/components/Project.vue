<template>
  <div class="project">
    <div
      class="project-card"
      :class="{ active }"
    >
      <div class="title-wrapper">
        <icon
          v-if="!$slots.icon"
          class="icon"
        ></icon>
        <slot
          v-else
          name="icon"
          class="icon"
        ></slot>

        <div class="title">{{ title }}</div>
      </div>
      <div class="description">{{ description }}</div>
      <a
        :href="link"
        target="_blank"
        class="link"
      >Voir le projet</a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { DefineComponent } from 'vue'

const props = defineProps<{
  icon: DefineComponent
  description: string
  title: string
  link: string
  active: boolean
}>()
</script>

<style scoped>
.icon {
  font-size: 2rem;
  height: 48px;
}

.title {
  font-size: 1.5rem;
  font-weight: bold;
  flex: 1 1 auto;
}

.description {
  font-size: 1.2rem;
  flex: 1 1 auto;
}

.link {
  font-size: 1.2rem;
  color: var(--main-text-color);
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  background-color: var(--main-bg-color);
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  color: white;
}

.project {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  transition: all 0.2s ease-in-out;
  position: relative;
  padding: 1rem;
  border-radius: var(--border-radius);

  .project-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    transition: all 0.2s ease-in-out;
    position: relative;
    padding: 1rem;
    border-radius: var(--border-radius);
    ;
    height: 100%;

    /* &.active {
      transform: scale(1.05);
    } */
  }

  &:hover {
    /* background-color: var(--btn-hover-color); */
    box-shadow: var(--btn-hover-box-shadow);
    transform: var(--btn-hover-transform);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    text-decoration: none;
  }
}

.title-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  width: 100%;
}

@media screen and (max-width: 480px) {
  .title-wrapper {
    .title {
      font-size: 1.2rem;
    }
  }

  .description {
    font-size: 1rem;
  }
}
</style>
