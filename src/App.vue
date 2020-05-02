<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      shrink-on-scroll
      prominent
      scroll-threshold="500"
    >
      <v-toolbar-title class="ml-8">Sebastian Dietze</v-toolbar-title>

      <v-spacer/>

      <v-btn icon href="https://www.facebook.com/sebastian.dietze.77/">
       <v-icon>{{icons.mdiFacebook}}</v-icon>
      </v-btn>

      <v-btn icon href="https://twitter.com/SebastianDiet20">
        <v-icon>{{icons.mdiTwitter}}</v-icon>
      </v-btn>

      <v-btn icon href="https://www.xing.com/profile/Sebastian_Dietze9">
        <v-icon>{{icons.mdiXing}}</v-icon>
      </v-btn>

      <v-btn icon title="coming soon">
        <v-icon>{{icons.mdiLinkedin}}</v-icon>
      </v-btn>

      <v-btn icon href="https://github.com/S3-D1">
        <v-icon>{{icons.mdiGithub}}</v-icon>
      </v-btn>

    </v-app-bar>

    <v-content>
      <Home/>
    </v-content>
    <v-footer
      primary
      padless>
      <v-card
        padless
        width="100%">
        <v-divider/>

        <v-card-text class="white--text text-center">
          &copy;{{ new Date().getFullYear() }} — <strong>Sebastian Dietze</strong>
        </v-card-text>

        <v-divider/>

        <v-card-text class="white--text text-center">
          <v-btn href="datenschutzerklaerung.html" target="_blank">Datenschutzerklärung</v-btn>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import Home from '@/views/Home.vue';
import {
  mdiFacebook, mdiGithub, mdiTools, mdiTwitter, mdiXing, mdiLinkedin,
} from '@mdi/js';

export default {
  name: 'App',

  components: {
    Home,
  },

  data: () => ({
    icons: {
      mdiTools,
      mdiFacebook,
      mdiTwitter,
      mdiXing,
      mdiLinkedin,
      mdiGithub,
    },
  }),
};
</script>
