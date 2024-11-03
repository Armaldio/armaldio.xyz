<template>
  <header>
    <nav class="wrapper">
      <div class="links">
        <a href="https://github.com/Armaldio">
          <CibGithub class="icon"></CibGithub>
        </a>
        <a href="https://www.linkedin.com/in/quentin-goinaud/">
          <CibLinkedin class="icon"></CibLinkedin>
        </a>
        <RouterLink to="/#contact">
          <CibGmail class="icon"></CibGmail>
          Contact
        </RouterLink>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import CibGithub from '~icons/cib/github'
import CibLinkedin from '~icons/cib/linkedin'
import CibGmail from '~icons/cib/gmail'
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: right;
}

.links {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

a,
a::visited {
  color: #000;
}

.icon {
  font-size: 1.8rem;
  color: #000;
}
</style>
