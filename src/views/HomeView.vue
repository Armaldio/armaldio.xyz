<template>
  <main class="main">
    <div class="main-body">
      <div class="hero">
        <!-- <div class="hero-right"> -->
        <!-- <svg
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
          </svg> -->

        <!-- <img class="profile-picture" src="/profile.png" /> -->
        <!-- </div> -->
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
      <div class="main-wrapper">
        <div class="cv">
          <div class="btn">
            <MaterialSymbolsPictureAsPdf></MaterialSymbolsPictureAsPdf>
            <a href="/CV.pdf"> Mon CV </a>
          </div>
        </div>
        <div class="intro">
          <div class="intro-wrapper">
            <div class="header">A propos de moi</div>
            <div class="about-me">
              Passionné d'informatique depuis mon plus jeune âge, j'ai d'abord
              exploré la
              <span class="tooltip">création de petits jeux</span>, avant de
              plonger dans le <span class="tooltip">JavaScript</span> et le
              développement web avec des frameworks comme
              <span class="tooltip">VueJS</span>.
              <br />
              Mon parcours m'a aussi mené vers le
              <span class="tooltip">backend</span>, et je développe aujourd'hui
              un intérêt croissant pour l'expérience utilisateur et
              <span class="tooltip">le développement mobile</span>.
              <br />
              Curieux et créatif, je conçois régulièrement des outils pour
              répondre à mes propres besoins ou simplement pour expérimenter de
              nouvelles technologies. Chaque projet devient une occasion
              d'apprentissage que je partage avec
              <span class="tooltip">la communauté open source</span>, convaincu
              que le savoir doit circuler pour se renforcer.
              <br />
              Engagé dans une veille technologique constante, je reste attentif
              aux tendances et innovations pour anticiper les évolutions du
              secteur et enrichir mes compétences.
            </div>
          </div>
        </div>
        <div class="projects">
          <div class="projects-wrapper">
            <!-- <div class="header">Mes projets</div> -->
            <div class="projects-body">
              <Project
                class="project project-pipelab"
                :icon="CibNpm"
                title="Pipelab"
                active
                description="Un outil d'automatisation à destination des développeurs de jeux vidéo"
                link="https://pipelab.app"
              >
                <template #icon>
                  <img
                    src="https://avatars.githubusercontent.com/u/176024061?s=48&v=4"
                  />
                </template>
              </Project>

              <Project
                class="project project-pipelab"
                :icon="CibNpm"
                title="Modules Node.js"
                description="L'ensemble des modules Node.js que j'ai créés"
                link="https://www.npmjs.com/~armaldio"
              ></Project>

              <Project
                class="project project-pipelab"
                title="Greenworks Prebuilds"
                description="Un site pour télécharger des builds automatisés de Greenworks"
                link="https://greenworks-prebuilds.armaldio.xyz/"
              >
                <template #icon>
                  <img
                    height="48"
                    src="https://greenworks-prebuilds.armaldio.xyz/assets/home-c45b0c47.png"
                  />
                </template>
              </Project>

              <Project
                class="project project-pipelab"
                :icon="CibDiscord"
                title="Discord Construct Community"
                description="Une communauté Discord pour les utilisateurs du moteur de jeux 'Construct'"
                link="https://discord.gg/dZDU7Re"
              ></Project>

              <Project
                class="project project-pipelab"
                :icon="CibNpm"
                title="Awesome Construct"
                description="Une liste awesome à propos de Construct"
                link="https://github.com/ConstructCommunity/awesome-construct"
              >
                <template #icon>
                  <img
                    height="48"
                    src="https://raw.githubusercontent.com/sindresorhus/awesome/main/media/logo.svg"
                  />
                </template>
              </Project>

              <Project
                class="project project-pipelab"
                :icon="CibGithub"
                title="Github"
                description="Retrouvez tous mes projets sur Github"
                link="https://github.com/Armaldio"
              ></Project>
            </div>
          </div>
        </div>

        <div class="journey">
          <div class="journey-wrapper">
            <div class="header">Mon parcours</div>
            <!-- <Timeline :items="timeline"></Timeline> -->
            <div id="timeline"></div>
          </div>
        </div>

        <!-- <div class="contact">
        <div class="contact-wrapper">
          <div class="header">Contact</div>
          <div class="btn email">
            <CibEmail></CibEmail>
            <span>Email</span>
          </div>
        </div>
      </div> -->
      </div>
      <div class="footer">Armaldio - Quentin Goinaud</div>
    </div>
  </main>
</template>

<script setup lang="ts">
import CibVueJs from '~icons/cib/vue-js'
import CibTypescript from '~icons/cib/typescript'
import CibElectron from '~icons/cib/electron'
import CibNpm from '~icons/cib/npm'
import CibGithub from '~icons/cib/github'
import CibDiscord from '~icons/cib/discord'
import CibEmail from '~icons/cib/gmail'

import MaterialSymbolsPictureAsPdf from '~icons/material-symbols/picture-as-pdf'

import Project from '@/components/Project.vue'
// import Timeline from '@/components/Timeline.vue'
import type { Timeline as TimelineModel } from '@/models/timeline'
import { Timeline, DataSet } from 'vis-timeline/standalone'
import { onMounted } from 'vue'

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

// var tasks = [
//   {
//     id: 'Task 1',
//     name: 'Redesign website',
//     start: '2016-12-28',
//     end: '2016-12-31',
//     progress: 20,
//     dependencies: 'Task 2, Task 3',
//     custom_class: 'bar-milestone' // optional
//   },
// ]
// var gantt = new Gantt("#timeline", tasks);
// DOM element where the Timeline will be attached

const groups = new DataSet([
  { id: 1, content: 'Etudes' },
  { id: 2, content: 'Travail' },
  { id: 3, content: 'Freelance' },
])

const items = new DataSet([
  // Education (Etudes)
  {
    id: 1,
    group: 1,
    content: 'Baccalauréat STI2D',
    start: '2013-09-01',
    end: '2015-06-01',
    className: 'done',
  },
  {
    id: 2,
    group: 1,
    content: 'Epitech',
    start: '2015-10-01',
    end: '2020-09-01',
    className: 'done',
  },
  {
    id: 4,
    group: 1,
    content: 'BeCAMe',
    start: '2017-09-01',
    end: '2020-09-01',
    className: 'done',
  },
  {
    id: 5,
    group: 1,
    content: 'Indy',
    start: '2018-04-01',
    end: '2018-07-01',
    className: 'done',
  },
  {
    id: 6,
    group: 1,
    content: 'UQAR',
    start: '2018-09-01',
    end: '2019-05-01',
    className: 'done',
  },

  // Work (Travail)
  {
    id: 7,
    group: 2,
    content: 'Knitiv (Part-Time)',
    start: '2019-10-01',
    end: '2020-10-01',
    className: 'done',
  },
  {
    id: 8,
    group: 2,
    content: 'Knitiv (Full-Time)',
    start: '2020-10-01',
    end: new Date().toISOString().split('T')[0],
    className: 'ongoing',
  },

  // Freelance
  {
    id: 9,
    group: 3,
    content: 'Freelance/Open Source',
    start: '2016-01-01',
    end: new Date().toISOString().split('T')[0],
    className: 'ongoing',
  },
  {
    id: 10,
    group: 3,
    content: 'Administrateur Communauté Discord',
    start: '2015-11-15',
    end: new Date().toISOString().split('T')[0],
    className: 'ongoing',
  },
  {
    id: 11,
    group: 3,
    content: 'Direct Nature',
    start: '2016-07-01',
    end: '2016-10-01',
    className: 'done',
  },
  {
    id: 12,
    group: 3,
    content: 'Socotec',
    start: '2019-07-01',
    end: '2019-08-01',
    className: 'done',
  },
])

const options = {
  stack: true,
  showCurrentTime: true,
  groupOrder: function (a, b) {
    return a.value - b.value
  },
  // zoomMin: 1000 * 60 * 60 * 24 * 30 * 12, // Minimum zoom level (1 year)
  // zoomMax: 1000 * 60 * 60 * 24 * 30 * 12 * 10, // Maximum zoom level (10 years)
}

onMounted(() => {
  const container = document.getElementById('timeline')
  if (!container) {
    console.error('Failed to find the element with id="timeline"')
    return
  }

  // Create a Timeline
  const timeline = new Timeline(container, items, groups, options)
  console.log('timeline', timeline)
})
</script>

<style scoped>
.main {
  /* --main-bg-color: #f0f0f0; */
  /* --main-bg-color: rgba(167, 199, 231); */
  /* --main-bg-color: #5900ff; */
  /* --main-bg-color: rgb(104, 88, 232); */

  /* --main-bg-color: rgb(0, 0, 0, 0.05); */
  --main-bg-color: #0e8a91;
  --main-text-color: #000;

  --btn-hover-color: #0011ff38;
  --btn-hover-box-shadow: 0 0.5em 0.5em -0.4em rgba(0, 0, 0, 1);
  --btn-hover-transform: translateY(-0.25em);

  --border-radius: 2rem;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  width: 100%;
  overflow: hidden;

  .main-body {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--main-bg-color);

    .main-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 80%;
    }
  }
}

.hero {
  display: flex;
  flex-direction: row;
  height: 80vh;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 100%;
}

.hero-left {
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;

  .hero-body {
    width: 100%;
  }
}

.logos {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  margin-top: 32px;

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
  width: 100%;
}

.intro {
  color: var(--main-text-color);
  background-color: var(--main-bg-color);
  padding-top: 128px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;

  .intro-wrapper {
    width: 100%;
    position: relative;
    /* border: 1px solid var(--main-text-color); */
    padding: 3rem;
    border-radius: var(--border-radius);
    background-color: #fff;
    box-sizing: border-box;

    .about-me {
      font-size: 1.2rem;
    }
  }
}

.journey {
  color: var(--main-text-color);
  background-color: var(--main-bg-color);
  padding-top: 128px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;

  .journey-wrapper {
    width: 100%;
    position: relative;
    /* border: 1px solid var(--main-text-color); */
    padding: 3rem;
    border-radius: var(--border-radius);
    background-color: #fff;
    box-sizing: border-box;
  }
}

.projects {
  color: var(--main-text-color);
  background-color: var(--main-bg-color);

  padding-top: 128px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .projects-wrapper {
    border-radius: var(--border-radius);
    width: 100%;
  }
}

.project {
  color: var(--main-text-color);
  background-color: #fff;
  height: 204px;
  width: 400px;
  flex: 1 1 auto;
}

.contact {
  color: var(--main-text-color);
  background-color: var(--main-bg-color);

  padding-top: 128px;
  padding-bottom: 128px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .contact-wrapper {
    width: 80%;
    /* border: 1px solid var(--main-text-color); */
    padding: 3rem;
    border-radius: var(--border-radius);
    background-color: #fff;
  }
}

.cv {
  color: var(--main-text-color);
  padding-top: 128px;
  background-color: var(--main-bg-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  width: 100%;
}

.btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: var(--border-radius);
  font-size: 1.2rem;
  color: var(--main-text-color);
  background: white;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  width: 50%;
  text-align: center;

  a {
    color: var(--main-text-color);
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  &:hover {
    background-color: var(--btn-hover-color);
    box-shadow: var(--btn-hover-box-shadow);
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
  margin-bottom: 0;
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
  position: absolute;
  bottom: 0;
  left: 30%;
  top: 0;
  right: 0;
  width: 100%;
  height: 600px;
  transform: perspective();
  z-index: 1;
  border-radius: 50%;

  object-fit: cover;
}

.header {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 24px;
}

.shape-divider {
  width: 100%;
  overflow: hidden;
  line-height: 0;
  /* transform: rotate(180deg); */
  background-color: var(--main-bg-color);
}

.shape-divider svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 82px;
}

.shape-divider .shape-fill {
  fill: #fff;
}

/* Responsive */
@media screen and (max-width: 1280px) {
  .main {
    .main-body {
      .main-wrapper {
        width: 80%;
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .main {
    .main-body {
      .main-wrapper {
        width: 90%;
      }
    }
  }
}

@media screen and (max-width: 960px) {
  .main {
    .main-body {
      .main-wrapper {
        width: 100%;
      }
    }
  }

  .intro {
    .intro-wrapper {
      border-radius: 0;

      .header {
        font-size: 2rem;
      }

      .about-me {
        font-size: 1rem;
      }
    }
  }

  .journey {
    .journey-wrapper {
      border-radius: 0;

      .header {
        font-size: 2rem;
      }

      .about-me {
        font-size: 1rem;
      }
    }
  }

  .projects {
    width: 90%;
  }

  /* .projects {
    padding: 0 16px;
  } */

  .logos {
    flex-direction: column;

    .logo {
      font-size: 1.3rem;
    }
  }
}

@media screen and (max-width: 768px) {
  .hero-title {
    font-size: 4rem;
  }

  .hero-subtitle {
    font-size: 2rem;
  }

  .hero-description {
    font-size: 1.2rem;
  }

  .logos {
    .logo {
      font-size: 1rem;
    }
  }
}

@media screen and (max-width: 480px) {
  .hero-title {
    font-size: 3rem;
  }

  .hero-subtitle {
    font-size: 1.5rem;
  }

  .hero-description {
    font-size: 1rem;
  }
}

:deep(.vis-item .vis-item-overflow) {
  overflow: visible;
}

:deep(.vis-item-content) {
  /* outline: rgb(213, 221, 246) dashed 1px; */
  background-color: #eee;
  border-radius: 4px;
}

:deep(.vis-item.vis-range) {
  padding: 4px;
}

.footer {
  padding: 4px 8px;
  margin-top: 64px;
  color: white;
}
</style>
