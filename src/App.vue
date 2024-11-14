<template>
  <header>
    <nav class="wrapper">
      <div class="links">
        <a class="btn" href="https://github.com/Armaldio" target="_blank">
          <CibGithub class="icon"></CibGithub>
          <span class="label">Github</span>
        </a>
        <a class="btn" href="https://www.linkedin.com/in/quentin-goinaud/" target="_blank">
          <CibLinkedin class="icon"></CibLinkedin>
          <span class="label">LinkedIn</span>
        </a>
        <a class="btn" href="mailto:quentin.goinaud+armaldio.xyz@gmail.com" target="_blank">
          <CibGmail class="icon"></CibGmail>
          <span class="label">Contact</span>
        </a>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import CibGithub from '~icons/cib/github'
import CibLinkedin from '~icons/cib/linkedin'
import CibGmail from '~icons/cib/gmail'
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: right;
  height: 64px;
}

.links {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 4px;
}

a,
a::visited {
  color: #000;
  font-style: normal;
  text-decoration: none;
}

.icon {
  font-size: 1.8rem;
  color: #000;
}

.btn {
  background: #eee;
  padding: 8px 16px;
  border-radius: 12px;
  display: flex;
  align-items: end;

  color: #000;
  font-style: normal;
  text-decoration: none;

  .label {
    margin-left: 8px;
    font-size: 1.5rem;
  }
}

@media screen and (max-width: 960px) {
  .wrapper {
    justify-content: center;
  }

  .btn {
    .label {
      font-size: 1rem;
    }

    .icon {
      font-size: 1.4rem;
    }
  }
}

@media screen and (max-width: 480px) {
  .btn {
    .label {
      font-size: 0.8rem;
    }

    .icon {
      font-size: 1rem;
    }
  }
}
</style>
