<template>
  <main class="main">
    <div class="main-body">
      <div class="hero">
        <div class="hero-right">
          <svg
            class="image-blob blob1"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#003CEE"
              d="M42.9,-42.4C53.9,-31.9,60,-15.9,59.7,-0.3C59.5,15.4,52.9,30.8,41.9,44.9C30.8,59,15.4,71.7,-2.8,74.5C-21,77.3,-41.9,70.1,-52.6,56C-63.2,41.9,-63.5,21,-61.2,2.3C-59,-16.5,-54.2,-32.9,-43.5,-43.5C-32.9,-54,-16.5,-58.6,-0.3,-58.4C15.9,-58.1,31.9,-52.9,42.9,-42.4Z"
              transform="translate(100 100)"
            />
          </svg>
          <svg
            class="image-blob blob2"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#9AD1D4"
              d="M59.2,-57.4C75.8,-42.7,87.6,-21.3,87.8,0.2C88,21.7,76.6,43.5,60,59.2C43.5,74.9,21.7,84.5,0.5,84C-20.7,83.4,-41.3,72.7,-54.6,57C-67.9,41.3,-73.9,20.7,-71.3,2.6C-68.8,-15.5,-57.7,-31.1,-44.4,-45.9C-31.1,-60.6,-15.5,-74.6,2.9,-77.5C21.3,-80.4,42.7,-72.2,59.2,-57.4Z"
              transform="translate(100 100)"
            />
          </svg>

          <img class="profile-picture" src="/profile.png" />
        </div>
        <div class="hero-left">
          <div class="hero-body">
            <h1 class="title hero-title">
              Hello
              <div class="moving">👋</div>
            </h1>
            <h2 class="subtitle hero-subtitle">Moi, c'est Quentin</h2>
          </div>
          <div class="hero-description">
            <p>
              Je suis <span class="gradient">Développeur Web</span> et passionné
              de nouvelles technologies
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
        <div class="shape-divider">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
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
          Passionné d'informatique depuis mon plus jeune âge, j'ai d'abord
          exploré la <span class="tooltip">création de petits jeux</span>, avant
          de plonger dans le <span class="tooltip">JavaScript</span> et le
          développement web avec des frameworks comme
          <span class="tooltip">VueJS</span>. Mon parcours m'a aussi mené vers
          le <span class="tooltip">backend</span>, et je développe aujourd'hui
          un intérêt croissant pour l'expérience utilisateur et
          <span class="tooltip">le développement mobile</span>. Curieux et
          créatif, je conçois régulièrement des outils pour répondre à mes
          propres besoins ou simplement pour expérimenter de nouvelles
          technologies. Chaque projet devient une occasion d'apprentissage que
          je partage avec
          <span class="tooltip">la communauté open source</span>, convaincu que
          le savoir doit circuler pour se renforcer. Engagé dans une veille
          technologique constante, je reste attentif aux tendances et
          innovations pour anticiper les évolutions du secteur et enrichir mes
          compétences.
        </p>
      </div>
      <div class="projects">
        <div class="header">Mes projets</div>

        <div class="projects-body">
          <Project
            :icon="CibNpm"
            title="Modules node.js"
            description="L'ensemble des modules node.js que j'ai créés"
            link="https://www.npmjs.com/~armaldio"
          ></Project>

          <Project
            :icon="CibNpm"
            title="Armaldio"
            description="Un site web personnel"
            link="https://armaldio.xyz"
          ></Project>

          <Project
            :icon="CibNpm"
            title="Armaldio-cli"
            description="Un utilitaire de gestion de projet"
            link="https://github.com/armaldio/armaldio-cli"
          ></Project>

          <Project
            :icon="CibNpm"
            title="Armaldio-theme"
            description="Un thème pour Armaldio"
            link="https://github.com/armaldio/armaldio-theme"
          ></Project>
        </div>
      </div>

      <div class="journey">
        <div class="header">Mon parcours</div>

        <Timeline :items="timeline"></Timeline>
      </div>

      <div class="contact">
        <div class="header">Contact</div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import CibVueJs from '~icons/cib/vue-js'
import CibTypescript from '~icons/cib/typescript'
import CibElectron from '~icons/cib/electron'
import CibNpm from '~icons/cib/npm'

import MaterialSymbolsPictureAsPdf from '~icons/material-symbols/picture-as-pdf'

import Project from '@/components/Project.vue'
import Timeline from '@/components/Timeline.vue'
import type { Timeline as TimelineModel } from '@/models/timeline'

const timeline: TimelineModel[] = [
  {
    title: 'Développeur Front End',
    company: 'Knitiv',
    place: 'Lyon',
    description: `
    Maintenance et migration d'une application AngularJS vers Vue
    Développement d'un serveur WebSocket/Chat
    Page-builder
    Applications Electron et Ionic.`,
    icon: undefined,
    startDate: '2019-10-01',
  },
  {
    title: 'Freelance / Open Source',
    description: `
Développement de modules JavaScript pour jeux vidéo
Sites web avec Node.js/Express/Stripe et WordPress
Gestion d'une communauté Discord.`,
    icon: undefined,
    startDate: '2016-01-01',
  },
  {
    title: 'Développeur Front End',
    company: 'BeCAMe',
    place: 'Lyon',
    description: `
Développement de front et back-office en React
Mini CRM en Vue
Bot Discord`,
    icon: undefined,
    startDate: '2017-09-01',
    endDate: '2020-10-01',
  },
  {
    title: 'Développeur Fullstack',
    company: 'Indy',
    place: 'Lyon',
    description: `
Développement d'API REST avec Node.js
Intégration avec Meteor.js et Vue.`,
    icon: undefined,
    startDate: '2018-04-01',
    endDate: '2018-08-01',
  },
  {
    title: 'Développeur Polyvalent',
    company: 'Direct Nature',
    place: 'Décines-Charpieu',
    description: `Développements PHP Prestashop, maintenance réseau et support.`,
    icon: undefined,
    startDate: '2016-07-01',
    endDate: '2016-12-01',
  },
  {
    title: "Diplôme d'expert en technologie de l'information",
    company: 'Epitech',
    place: 'France',
    description: ``,
    icon: undefined,
    startDate: '2015-09-01',
    endDate: '2020-08-01',
  },
  {
    title: 'Diplôme en Majeur Informatique',
    company: 'UQAR',
    place: 'Rimouski, Canada',
    description: ``,
    icon: undefined,
    startDate: '2018-09-01',
    endDate: '2019-07-01',
  },
  {
    title: 'Baccalauréat STI2D',
    description: ``,
    icon: undefined,
    company: 'Lycée Frédéric Fays',
    place: 'Villeurbanne',
    startDate: '2013-09-01',
    endDate: '2015-06-01',
  },
]
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  width: 100%;

  .main-body {
    display: flex;
    flex-direction: column;
    gap: 64px;
    max-width: 60%;
  }
}

.hero {
  display: flex;
  flex-direction: row;
  height: 80vh;
}

.hero-left {
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.logos {
  display: flex;
  flex-direction: row;
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

.cv {
  margin-top: 128px;
  background-color: rgb(30, 30, 255);
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
  font-size: 5rem;
  margin-bottom: 16px;
}

.hero-subtitle {
  font-size: 3rem;
  margin-top: 16px;
}

.image-blob {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.blob1 {
  width: 600px;
  left: -50%;
  top: -50px;
}

.blob2 {
  width: 400px;
  left: -80px;
  top: 100px;
}

/* Responsive */
@media screen and (max-width: 1024px) {
  .main .main-body {
    max-width: 80%;
  }

  .main .main-body .hero {
    flex-direction: column;
  }

  .main .main-body .hero-right {
    display: none;
  }

  .logos {
    flex-direction: column;
  }
}

@media screen and (max-width: 768px) {
  .main .main-body {
    max-width: 90%;
  }
}

@media screen and (max-width: 480px) {
  .main .main-body {
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

.projects-body {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.hero-right {
  display: flex;
  align-items: end;
  position: relative;
}

.profile-picture {
  height: 600px;
  transform: perspective();
  z-index: 1;
}

.header {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 24px;
}

.shape-divider {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.shape-divider svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 82px;
}

.shape-divider .shape-fill {
    fill: #FFFFFF;
}
</style>
