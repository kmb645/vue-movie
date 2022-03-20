<template>
  <img :src="urlImg" alt="Movie Poster" />
</template>
<script>
import env from "@/env.js";
export default {
  props: ["movie"],
  computed: {
    urlImg() {
      return this.movie.profile_path != null
        ? `${env.imgPath}${this.movie.profile_path}`
        : require("@/assets/poster-not-available.png");
    },
  },
};
</script>
