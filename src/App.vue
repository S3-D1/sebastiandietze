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
      <v-toolbar-title>Sebastian Dietze</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <HelloWorld/>
    </v-content>
    <v-footer>
      <a href="datenschutzerklaerung.html" target="_blank">Datenschutzerklärung</a>
    </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
