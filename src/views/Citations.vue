<template>
  <div>
    <div>
      <UnderConstruction />
    </div>

    <h1 class="title ml-12">Sprüche die mich begleiten</h1>

    <template v-for="cite in citations">
      <Quote :key="cite.quote" :author="cite.footer" :quote="cite.quote" />
    </template>
  </div>
</template>

<script>
import UnderConstruction from "@/components/UnderConstruction";
import Quote from "@/components/Quote";
export default {
  name: "Citations",
  components: { Quote, UnderConstruction },
  data() {
    return {
      citations: [
        {
          quote: "Pläne sind nichts. Planung ist alles",
          footer: "Dwight D. Eisenhower"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
