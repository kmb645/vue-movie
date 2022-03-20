<template>
  <div class="tv-detail">
    <h2>{{ tv.name }}</h2>
    <p>{{ tv.first_air_date }}</p>
    <ImageView :movie="tv" />
    <p>{{ tv.overview }}</p>
  </div>
</template>
<script>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import env from "@/env.js";
import ImageView from "@/components/ImageView.vue";
export default {
  setup() {
    const tv = ref({});
    const route = useRoute();
    onBeforeMount(() => {
      fetch(`${env.baseUrl}/tv/${route.params.id}?api_key=${env.apiKey}`)
        .then((response) => response.json())
        .then((data) => {
          tv.value = data;
        });
    });
    return { tv };
  },
  components: { ImageView },
};
</script>

<style lang="scss" scoped>
.tv-detail {
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
