<template>
  <div class="under_construction">
    <v-card class="mx-auto my-5 align-content-center text-center" max-width="500px">
      <v-icon size="100%" color="white">{{ icons.mdiTools }}</v-icon>

      <v-card-title>Hier wird gebaut!</v-card-title>
      <v-divider class="ma-2" />
      <v-icon color="white">{{ icons.mdiFormatQuoteOpenOutline }}</v-icon>
      <v-card-text class="text-center">
        Jeden Tag ein bisschen besser!
        <br /><br />
        Die Summe vieler kleiner Schritte erzeugt ein riesiges Ergebnis!
      </v-card-text>
      <v-icon color="white">{{ icons.mdiFormatQuoteCloseOutline }}</v-icon>
    </v-card>
  </div>
</template>

<script>
import { mdiTools, mdiFormatQuoteOpenOutline, mdiFormatQuoteCloseOutline } from "@mdi/js";

export default {
  name: "UnderConstruction",
  data: () => ({
    icons: {
      mdiTools,
      mdiFormatQuoteCloseOutline,
      mdiFormatQuoteOpenOutline
    }
  })
};
</script>

<style scoped></style>
