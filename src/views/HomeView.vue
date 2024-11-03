<template>
  <main class="main">
    <div class="hero">
      <div class="hero-body">
        <h1 class="title hero-title">
          Hello
          <div class="moving">👋</div>
        </h1>
        <h2 class="subtitle">Moi, c'est Quentin</h2>
      </div>
      <div class="hero-description">
        <p>
          Je suis <span class="gradient">Développeur Web</span> et passionné de
          nouvelles technologies
        </p>
        <div class="logos">
          <div class="logo">
            <CibVueJs class="hero-icons"></CibVueJs>
            Vue
          </div>
          <div class="logo">
            <CibTypescript class="hero-icons"></CibTypescript>
            Typescript
          </div>
          <div class="logo">
            <CibElectron class="hero-icons"></CibElectron>
            Electron
          </div>
        </div>
      </div>
    </div>
    <div class="cv">
      <div class="cv-btn">
        <MaterialSymbolsPictureAsPdf></MaterialSymbolsPictureAsPdf>
        <a href="/CV.pdf"> Mon CV </a>
      </div>
    </div>
    <div class="intro">
      <div class="header">A propos de moi</div>
      <p class="about-me">
        Passionné d'informatique depuis mon plus jeune âge, j'ai d'abord exploré
        la <span class="tooltip">création de petits jeux</span>, avant de
        plonger dans le <span class="tooltip">JavaScript</span> et le
        développement web avec des frameworks comme
        <span class="tooltip">VueJS</span>. Mon parcours m'a aussi mené vers le
        <span class="tooltip">backend</span>, et je développe aujourd'hui un
        intérêt croissant pour l'expérience utilisateur et
        <span class="tooltip">le développement mobile</span>. Curieux et
        créatif, je conçois régulièrement des outils pour répondre à mes propres
        besoins ou simplement pour expérimenter de nouvelles technologies.
        Chaque projet devient une occasion d'apprentissage que je partage avec
        <span class="tooltip">la communauté open source</span>, convaincu que le
        savoir doit circuler pour se renforcer. Engagé dans une veille
        technologique constante, je reste attentif aux tendances et innovations
        pour anticiper les évolutions du secteur et enrichir mes compétences.
      </p>
    </div>
    <div class="projects">
      <div class="header">Mes projets</div>

      <Project :icon="CibNpm"></Project>
    </div>

    <div class="journey">
      <div class="header">Mon parcours</div>

      <Project :icon="CibNpm"></Project>
    </div>

    <div class="contact">
      <div class="header">Contact</div>
    </div>
  </main>
</template>

<script setup lang="ts">
import CibVueJs from '~icons/cib/vue-js'
import CibTypescript from '~icons/cib/typescript'
import CibElectron from '~icons/cib/electron'
import CibNpm from '~icons/cib/npm'

import MaterialSymbolsPictureAsPdf from '~icons/material-symbols/picture-as-pdf'
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
}

.hero {
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.logos {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  .logo {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    font-size: 1.5rem;
  }
}

.hero-icons {
  font-size: 2em;
}

.gradient {
  position: relative;
  font-weight: 800;

  color: #7319fa;
  background-image: -webkit-linear-gradient(45deg, #7319fa, #ff33b4, #ff7e29);
  background-clip: text;
  -webkit-background-clip: text;
  text-fill-color: transparent;
  -webkit-text-fill-color: transparent;
}

.hero-description {
  font-size: 1.4rem;
}

.cv-btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border: 1px solid #000000;
  padding: 1rem;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  color: #000;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  a {
    color: #000;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  &:hover {
    background-color: #0011ff38;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    text-decoration: none;
  }
}

.moving {
  animation: move 1s linear;
}

.moving:hover {
  animation: move 1s linear;
}

@keyframes move {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(10deg);
  }
  50% {
    transform: rotate(-10deg);
  }
  75% {
    transform: rotate(5deg);
  }
  95% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.hero-title {
  display: flex;
  flex-direction: row;
}

/* Responsive */
@media screen and (max-width: 1024px) {
  .main {
    max-width: 60%;
  }
}

@media screen and (max-width: 768px) {
  .main {
    max-width: 80%;
  }
}

@media screen and (max-width: 480px) {
  .main {
    max-width: 90%;
  }
}

@media screen and (max-width: 320px) {
  .main {
    max-width: 100%;
  }
}

.about-me:hover {
  .tooltip {
    outline: 1px solid #5900ff;
    background: #1900ff31;
    transition: all 0.2s ease-in-out;
  }
}
</style>
