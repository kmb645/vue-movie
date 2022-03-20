<template>
  <div class="movie-detail">
    <h2>{{ movie.title }}</h2>
    <p>{{ movie.release_date }}</p>
    <ImageView :movie="movie" />
    <p>{{ movie.overview }}</p>
  </div>
</template>
<script>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import env from "@/env.js";
import ImageView from "@/components/ImageView.vue";
export default {
  setup() {
    const movie = ref({});
    const route = useRoute();
    onBeforeMount(() => {
      fetch(`${env.baseUrl}/movie/${route.params.id}?api_key=${env.apiKey}`)
        .then((response) => response.json())
        .then((data) => {
          movie.value = data;
        });
    });
    return { movie };
  },
  components: { ImageView },
};
</script>

<style lang="scss" scoped>
.movie-detail {
  padding: 16px;
  h2 {
    color: #fff;
    font-size: 28px;
    font-wight: 600;
    margin-bottom: 16px;
  }
  .feature-img {
    display: block;
    max-width: 200px;
    margin-bottom: 16px;
  }
  p {
    color: #fff;
    font-size: 18px;
    line-height: 1.4;
  }
}
</style>
