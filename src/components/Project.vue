<template>
  <div class="project">
    <icon class="icon"></icon>
    <div class="title">{{ title }}</div>
    <div class="description">{{ description }}</div>
    <a :href="link" target="_blank">Voir le projet</a>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  icon: DefineComponent
  description: string
  title: string
  link: string
}>()
</script>

<style scoped>
.icon {
  font-size: 2rem;
}

.title {
  font-size: 1.5rem;
  font-weight: bold;
}

.description {
  font-size: 1.2rem;
}

.project {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #000000;
  border-radius: 0.5rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #0011ff38;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    text-decoration: none;
  }
}
</style>
