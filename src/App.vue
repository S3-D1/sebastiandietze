<template>
  <v-app class="background">
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title class="ml-8">Sebastian Dietze</v-toolbar-title>

      <v-spacer/>

      <v-menu offset-y open-on-hover>
        <template v-slot:activator="{ on }">
          <v-btn
            v-on="on"
            icon
            class="mx-1"
          >
            <v-icon>{{icons.mdiShieldAccount}}</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="media in socialMedia" :key="media.link">
            <v-btn icon :key="media.link" :href="media.link" v-if="media.link!=null">
              <v-icon>{{media.icon}}</v-icon>
            </v-btn>
            <v-btn icon :key="media.link" title="coming soon" v-if="media.link==null">
              <v-icon>{{media.icon}}</v-icon>
            </v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
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
          <strong>&copy;{{ new Date().getFullYear() }} |
          Sebastian Dietze
          <v-btn icon href="mailto:kontakt@sebastiandietze.de">
            <v-icon>{{icons.mdiEmailSend}}</v-icon>
          </v-btn>
          |</strong>
          <template v-for="media in socialMedia">
            <v-btn icon :key="media.link" :href="media.link" v-if="media.link!=null">
              <v-icon>{{media.icon}}</v-icon>
            </v-btn>
            <v-btn icon :key="media.link" title="coming soon" v-if="media.link==null">
              <v-icon>{{media.icon}}</v-icon>
            </v-btn>
          </template>
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
  mdiFacebook, mdiGithub, mdiTools, mdiTwitter, mdiXing, mdiLinkedin, mdiEmailSend,
  mdiShieldAccount,
} from '@mdi/js';

export default {
  name: 'App',

  components: {
    Home,
  },

  data: () => ({
    icons: {
      mdiTools,
      mdiEmailSend,
      mdiShieldAccount,
    },
    socialMedia: [
      {
        icon: mdiFacebook,
        link: 'https://www.facebook.com/sebastian.dietze.77/',
      },
      {
        icon: mdiTwitter,
        link: 'https://twitter.com/SebastianDiet20',
      },
      {
        icon: mdiXing,
        link: 'https://www.xing.com/profile/Sebastian_Dietze9',
      },
      {
        icon: mdiLinkedin,
        link: null,
      },
      {
        icon: mdiGithub,
        link: 'https://github.com/S3-D1',
      },
    ],
  }),
};
</script>
