<template>
  <v-card max-width="50%" class="ma-4 text-center">
    <blockquote>
      <v-card-text>
        <v-icon color="white" class="mt-4">{{ icons.mdiFormatQuoteOpenOutline }}</v-icon>
        {{ quote }}
        <v-icon color="white" class="mb-8">{{ icons.mdiFormatQuoteCloseOutline }}</v-icon>
      </v-card-text>
      <v-divider class="mx-8" />
      <footer>
        {{ author }}
      </footer>
    </blockquote>
  </v-card>
</template>

<script>
import { mdiFormatQuoteOpenOutline, mdiFormatQuoteCloseOutline } from "@mdi/js";

export default {
  name: "Quote",
  props: ["quote", "author"],
  data: () => ({
    icons: {
      mdiFormatQuoteCloseOutline,
      mdiFormatQuoteOpenOutline
    }
  })
};
</script>

<style scoped></style>
