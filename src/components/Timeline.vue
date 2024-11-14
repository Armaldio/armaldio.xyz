<template>
  <div class="timeline">
    <div class="timeline-svg">
      <div class="center"></div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-65 -140.5 150 141">
        <path
          d="M 0 -20 V 0 M 0 -20 V -35 M 0 -35 V -50 V -70 L 0 -90 M 0 -90 L 0 -120 L 0 -140 M 20 -35 C 20 -20 0 -35 0 -20 M 20 -35 C 20 -50 0 -35 0 -50 M 0 -90 C 0 -105 20 -90 20 -105 L 20 -140"
          stroke="#000"
          stroke-width="0.5"
          fill="none"
        />

        <!-- Baccalauréat STI2D -->
        <g class="timeline-item">
          <circle cx="0" cy="-20" r="1" />
          <text x="0" y="-20" text-anchor="end" dx="-4" class="title">
            Baccalauréat STI2D
          </text>
          <text x="0" y="-16" text-anchor="end" dx="-4" class="company">
            <tspan class="company">Lycée Frédéric Fays</tspan>
            - Villeurbanne
          </text>
          <text x="0" y="-12" text-anchor="end" dx="-4" class="company">
            <tspan class="company">Sept 2013 - Juin 2015</tspan>
          </text>
        </g>

        <!-- Diplôme d'expert en technologie de l'information -->
        <g class="timeline-item">
          <circle cx="0" cy="-50" r="1" />
          <text x="0" y="-50" text-anchor="end" dx="-4" class="title">
            <tspan>Diplôme d'expert</tspan>
            <tspan dx="-4" x="0" y="-46">en technologie de l'information</tspan>
          </text>
          <text x="0" y="-42" text-anchor="end" dx="-4" class="company">
            <tspan class="company">Epitech</tspan>
            - Lyon
          </text>
          <text x="0" y="-38" text-anchor="end" dx="-4" class="company">
            <tspan class="company">Sept 2015 - Août 2020</tspan>
          </text>
        </g>

        <!-- Diplôme en Majeur Informatique -->
        <g class="timeline-item">
          <circle cx="20" cy="-35" r="1" />
          <g x="20" y="-35" text-anchor="start" width="30" height="30" dx="4">
            <foreignObject
              x="20"
              y="-35"
              text-anchor="start"
              width="300"
              height="30"
              dx="4"
            >
              <div class="item-text">Diplôme en Majeur Informatique</div>
              <div class="item-text"></div>
              <div class="company">UQAR</div>
              <div class="location">- Rimouski, Canada</div>
            </foreignObject>
          </g>
          Sept 2018 - Juil 2019
          <!-- <text x="20" y="-35" text-anchor="start" dx="4" class="title">
            <tspan>Diplôme</tspan> <tspan dx="4" x="20" y="-31">en Majeur Informatique</tspan>
          </text> -->
          <!-- <text x="20" y="-30" text-anchor="start" dx="4" class="company">
            <tspan class="company">UQAR</tspan>
            - Rimouski, Canada
          </text> -->
        </g>

        <!-- Développeur Polyvalent -->
        <g class="timeline-item">
          <circle cx="0" cy="-70" r="1" />
          <text x="0" y="-70" text-anchor="end" dx="-4" class="title">
            Développeur Polyvalent
          </text>
          <text x="0" y="-66" text-anchor="end" dx="-4" class="company">
            <tspan class="company">Direct Nature</tspan>
            - Décines-Charpieu
          </text>
          <text x="0" y="-62" text-anchor="end" dx="-4" class="company">
            <tspan class="company">Juil 2016 - Dec 2016</tspan>
          </text>
        </g>

        <!-- Développeur Fullstack -->
        <g class="timeline-item">
          <circle cx="0" cy="-90" r="1" />
          <text x="0" y="-90" text-anchor="end" dx="-4" class="title">
            Développeur Fullstack
          </text>
          <text x="0" y="-86" text-anchor="end" dx="-4" class="company">
            <tspan class="company">Indy</tspan>
            - Lyon
          </text>
          <text x="0" y="-82" text-anchor="end" dx="-4" class="company">
            <tspan class="company">Avr 2018 - Août 2018</tspan>
          </text>
        </g>

        <!-- Développeur Front End -->
        <g class="timeline-item">
          <circle cx="0" cy="-110" r="1" />
          <text x="0" y="-110" text-anchor="end" dx="-4" class="title">
            Développeur Front End
          </text>
          <text x="0" y="-106" text-anchor="end" dx="-4" class="company">
            <tspan class="company">BeCAMe</tspan>
            - Lyon
          </text>
          <text x="0" y="-102" text-anchor="end" dx="-4" class="company">
            <tspan class="company">Sept 2017 - Oct 2020</tspan>
          </text>
        </g>

        <!-- Développeur Front End -->
        <g class="timeline-item">
          <circle cx="0" cy="-130" r="1" />
          <text x="0" y="-130" text-anchor="end" dx="-4" class="title">
            Développeur Front End
          </text>
          <text x="0" y="-126" text-anchor="end" dx="-4" class="company">
            <tspan class="company">Knitiv</tspan>
            - Lyon
          </text>
          <text x="0" y="-122" text-anchor="end" dx="-4" class="company">
            <tspan class="company">Oct 2019 - Aujourd'hui</tspan>
          </text>
        </g>

        <!-- Freelance / Open Source -->
        <g class="timeline-item">
          <circle cx="20" cy="-130" r="1" />
          <text x="20" y="-130" text-anchor="start" dx="4" class="title">
            Freelance / Open Source
          </text>
          <text x="20" y="-126" text-anchor="start" dx="4" class="company">
            <tspan class="company"></tspan>
            Aujourd'hui
          </text>
        </g>
      </svg>
    </div>
    <div class="timeline-body">
      <div class="timeline-item" v-for="item in items" :key="item.title">
        <div class="left">
          <svg
            class="dot"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            :class="{ ongoing: !item.endDate }"
          >
            <circle cx="10" cy="10" r="10" />
          </svg>

          <div class="vertical-bar" :class="{ ongoing: !item.endDate }"></div>
        </div>
        <div class="right">
          <div class="timeline-title">
            <div v-if="item.icon" class="timeline-icon">
              <component :is="item.icon"></component>
            </div>
            <span>{{ item.title }}</span>
          </div>
          <div class="timeline-subtitle">
            <div class="timeline-dates">
              {{ formatDate(item.startDate) }} -
              {{ item.endDate ? formatDate(item.endDate) : "Aujourd'hui" }}
            </div>
            <div class="timeline-company" v-if="item.company">
              &nbsp;- {{ item.company }}
            </div>
            <div class="timeline-place" v-if="item.place">
              &nbsp;- {{ item.place }}
            </div>
          </div>
          <div class="timeline-description">{{ item.description }}</div>
          <div class="spacer"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Timeline } from '@/models/timeline'
import { defineProps } from 'vue'

const props = defineProps<{
  items: Timeline[]
}>()

const formatDate = (date: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
  }
  return new Intl.DateTimeFormat('en-US', options).format(new Date(date))
}
</script>

<style scoped>
.timeline {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
}

.timeline-body {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
}

.timeline-item {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
  max-width: 100%;

  .right {
    flex: 1 1 auto;
  }

  .left {
    flex: 0 0 auto;
    margin: 14px 0 0 0;

    .dot {
      height: 0.75rem;
      fill: #ccc;
    }

    .vertical-bar {
      width: 0.1rem;
      height: 100%;
      background-color: #ccc;
      margin-top: 16px;
    }

    .ongoing {
      fill: #007bff;
      background-color: #007bff;
    }
  }
}

.left {
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.timeline-icon {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  color: #000;
}

.timeline-title {
  font-size: 1.2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
}

.timeline-subtitle {
  display: flex;
  flex-direction: row;
  font-size: 0.9rem;
  color: #666;
  margin-top: 4px;
}

.timeline-description {
  font-size: 1rem;
}

.spacer {
  height: 24px;
}

/* Responsive Design */
@media (max-width: 600px) {
  .timeline-item {
    flex-direction: column;
  }

  .left {
    width: 100%;
    align-items: flex-start;
  }

  .timeline-title,
  .timeline-dates {
    text-align: left;
  }
}

.timeline-svg {
  position: relative;
  svg {
    width: 100%;

    .timeline-item {
      .title {
        font-size: 4px;
        font-weight: bold;
      }
      .company {
        font-size: 3px;
      }
      .location {
        font-size: 2px;
      }
    }
  }
}

/* .center {
  width: 2px;
  height: 16px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  background: red;
} */

.item-text {
  font-size: 4px;
}

@media screen and (max-width: 1024px) {
  .item-text {
    font-size: 6px;
  }
}
</style>
