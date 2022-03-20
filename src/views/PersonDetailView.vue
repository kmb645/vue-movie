<template>
  <div class="person-detail">
    <h2>{{ person.name }}</h2>
    <p>{{ person.birthday }}</p>
    <ImagePerson :movie="person" />
    <p>{{ person.place_of_birth }}</p>
  </div>
</template>
<script>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import env from "@/env.js";
import ImagePerson from "@/components/ImagePerson.vue";
export default {
  setup() {
    const person = ref({});
    const route = useRoute();
    onBeforeMount(() => {
      fetch(`${env.baseUrl}/person/${route.params.id}?api_key=${env.apiKey}`)
        .then((response) => response.json())
        .then((data) => {
          person.value = data;
        });
    });
    return { person };
  },
  components: { ImagePerson },
};
</script>

<style lang="scss" scoped>
.person-detail {
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
