<!--
 // todo
- Hover card show badges tech
- https://github.com/michalsnik/aos/issues/87#issuecomment-313558488
 -->
<template>
  <div id="home">
    <div id="clip" class="hidden-sm-and-down"></div>
    <v-container fluid class="fullHeight">
      <div
        class="entry text-center text-sm-left"
        :class="{ 'top-padded': $vuetify.breakpoint.mdAndUp,
                 'center-aligned-img': $vuetify.breakpoint.smAndDown }"
      >
        <v-img
          class="mb-5 profile-pic"
          src="https://fr.gravatar.com/userimage/60115314/7100a2db99dac4b3ba928ce1a1ea0012.png?size=150"
        />
        <span>Hey, I'm Quentin "Armaldio" Goinaud</span>
      </div>
      <v-layout :column="$vuetify.breakpoint.mdAndDown" wrap class="pt-5">
        <v-flex xs6>
          <div class="text-xs-left resume">
            <p class="headline">
              <v-icon large class="mr-3">fas fa-language</v-icon>
              French, English
            </p>
            <p class="headline">
              <v-icon large class="mr-3">fas fa-graduation-cap</v-icon>
              Epitech Lyon
            </p>
            <p class="headline">
              <v-icon large class="mr-3">fas fa-door-open</v-icon>
              Open
            </p>
            <br>
            <p class="headline">
              <v-icon large class="mr-3">fas fa-desktop</v-icon>
              Full Stack developer
            </p>
            <p class="headline">
              <v-icon large class="mr-3">fab fa-github</v-icon>
              Open Source contributor
            </p>
            <p class="headline">
              <v-icon large class="mr-3">fas fa-rocket</v-icon>
              Tech enthusiast
            </p>
            <br>
            <v-btn
              class="mailtoui mr-2"
              href="mailto:contact@armaldio.xyz"
              color="green"
              rounded>
              Hire me
              <v-icon small right dark>far fa-envelope</v-icon>
            </v-btn>
            <v-btn
              class="mr-2"
              color="red"
              rounded
              href="https://drive.google.com/file/d/1Q0UYpDYvfpHm7XqsdgcPetq2LlJoClHW/view"
              target="_blank">
              View my resume (FR)
            </v-btn>
            <v-btn class="mr-2" href="https://github.com/sponsors/Armaldio" color="blue" rounded>
              Support me
              <v-icon small right dark>fas fa-money-bill</v-icon>
            </v-btn>
          </div>
        </v-flex>
        <v-flex xs6 class="text-center hidden-sm-and-down">
          <div class="d-inline-flex pt-5">
            <img class="code-image" :src="codeImg" height="250">
          </div>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid>
      <div class="split split-1 hidden-sm-and-down"></div>

      <div class="display-3 py-3" id="websites">
        Websites
      </div>
      <div class="right-shape"></div>
      <flickity :class="{'small-card': $vuetify.breakpoint.xsOnly}"
                :options="flickityOptions">
        <div class="carousel-cell" v-for="(project, i) in websites" :key="i">
          <Project :key="i" :project="project"/>
        </div>
      </flickity>

      <div class="split split-2 hidden-sm-and-down"></div>

      <div class="display-3 py-3" id="apps">
        Apps
      </div>
      <flickity :class="{'small-card': $vuetify.breakpoint.xsOnly}"
                :options="flickityOptionsInverted">
        <div class="carousel-cell" v-for="(project, i) in apps" :key="i">
          <Project :key="i" :project="project"/>
        </div>
      </flickity>

      <div class="split split-3 hidden-sm-and-down"></div>

      <div class="display-3 py-3" id="other">
        Other
      </div>
      <flickity :class="{'small-card': $vuetify.breakpoint.xsOnly}"
                :options="flickityOptionsCentered">
        <div class="carousel-cell"
             v-for="(project, i) in other" :key="i">
          <Project :key="i" :project="project"/>
        </div>
      </flickity>

      <!--<div class="split split-4 hidden-sm-and-down"></div>-->

      <div class="display-3 pb-3 mt-5" id="certificates">
        Certificates
      </div>
      <div class="certificates mt-5">
        <v-container grid-list-sm fluid>
          <v-layout row wrap justify-center>
            <v-flex
              v-for="certificate in certificates"
              :key="certificate.image"
              xs12
              sm6
              lg4
            >
              <a target="_blank" :href="certificate.link">
                <v-img
                  :src="certificate.image"
                  :lazy-src="certificate.image"
                  class="grey lighten-2"
                  contain
                >
                </v-img>
              </a>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    </v-container>
    <div class="split split-5 hidden-sm-and-down"></div>
  </div>
</template>

<script>
import Flickity from 'vue-flickity';
import projects from '../projects';
import Project from '../components/Project';

import codeImg from '../assets/code.svg';
import vueCertificate from '../assets/vue-certificate.jpg';

export default {
  name: 'Home',
  components: {
    Flickity,
    Project,
  },
  data() {
    return {
      codeImg,
      flickityOptions: {
        autoPlay: false,
        prevNextButtons: !this.$vuetify.breakpoint.xsOnly,
        pageDots: this.$vuetify.breakpoint.xsOnly,
      },
      flickityOptionsInverted: {
        autoPlay: false,
        rightToLeft: !this.$vuetify.breakpoint.xsOnly,
        prevNextButtons: !this.$vuetify.breakpoint.xsOnly,
        pageDots: this.$vuetify.breakpoint.xsOnly,
      },
      flickityOptionsCentered: {
        autoPlay: false,
        rightToLeft: false,
        prevNextButtons: !this.$vuetify.breakpoint.xsOnly,
        pageDots: this.$vuetify.breakpoint.xsOnly,
      },

      arrow: false,
      selectedTab: 0,
      projects,

      showCV: false,

      certificateDialog: false,
      selectedImageCertificate: 0,

      certificates: [
        {
          image: vueCertificate,
          link: 'https://ude.my/UC-ZLMRLAWU',
        },
      ],
    };
  },
  computed: {
    websites() {
      return this.projects.filter((project) => project.type === 'website');
    },
    apps() {
      return this.projects.filter((project) => project.type === 'app');
    },
    other() {
      return this.projects.filter((project) => project.type === 'other');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  #clip {
    width: 100%;
    height: 500px;
    position: absolute;
    left: 0;
    top: 0;
    clip-path: polygon(0 0, 100% 0, 100% 80%, 0 40%);
    background-image: linear-gradient(to top, #2196f3, #1d89e1, #177cd0, #1170bf, #0964ae);
  }

  .carousel-cell {
    width: 350px;
    height: 350px;
    margin-right: 50px;
    counter-increment: carousel-cell;
  }

  .carousel-cell {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
  }

  .carousel-cell:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  .small-card, .small-card .carousel-cell {
    width: 250px;
  }

  .flickity-viewport {
    height: 400px !important;
  }

  .fullHeight {
    font-size: 35px;
    position: relative;
  }

  .top-padded {
    padding-top: 92px;
  }

  .center-aligned-img img {
    margin: 0 auto;
  }

  .entry {
    text-align: left;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: flex-start;
    align-content: stretch;
  }

  @media only screen and (max-device-width: 768px) and (orientation: portrait) {
    .fullHeight {
      font-size: 20px;
    }
  }

  @media only screen and (max-device-width: 560px) and (orientation: portrait) {
    .headline, .headline a, .headline i {
      font-size: 16px !important;
    }
  }

  .profile-pic {
    border-radius: 5px;
  }

  @media only screen and (max-device-width: 768px) and (orientation: portrait) {
    .profile-pic {
      width: 100px;
      height: 100px;
    }
  }

  .cursor {
    cursor: pointer;
  }

  .padding-around {
    padding: 0 10px;
  }

  .split {
    position: absolute;
    height: 508px;
    width: 100%;
    left: 0;
    /*background-image: linear-gradient(to top, #2196f3, #1d89e1, #177cd0, #1170bf, #0964ae);*/
    background-color: #2196f3;
  }

  .split-1 {
    clip-path: polygon(0 15%, 0% 100%, 80% 100%);
  }

  .split-2 {
    clip-path: polygon(25% 0%, 100% 0, 100% 100%, 50% 100%);
  }

  .split-3 {
    clip-path: polygon(50% 0%, 97% 0, 80% 70%, 35% 88%, 35% 58%)
  }

  .split-5 {
    clip-path: polygon(13% 86%, 85% 74%, 100% 100%, 0% 100%);
    position: absolute;
    bottom: -65px;
  }

  .display-3 {
    mix-blend-mode: difference;
  }

  .icon-text-align {
    vertical-align: middle;
  }

  .small-card {
    margin: 0 auto !important;
  }

  .flickity-page-dots {
    bottom: 0px;
  }

  /* white circles */
  .flickity-page-dots .dot {
    width: 12px;
    height: 12px;
    opacity: 1;
    background: transparent;
    border: 2px solid white;
  }

  /* fill-in selected dot */
  .flickity-page-dots .dot.is-selected {
    background: white;
  }

</style>
