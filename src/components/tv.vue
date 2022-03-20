<template>
  <div class="movies-list">
    <div class="movie" v-for="tv in data" :key="tv.id">
      <router-link :to="'/movie/' + tv.id" class="movie-link">
        <div class="movie-image">
          <ImageView :movie="tv" />
          <div class="type">{{ tv.vote_average }}</div>
        </div>
        <div class="movie-detail">
          <p class="year">{{ tv.first_air_date }}</p>
          <h3>{{ tv.name }}</h3>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
import ImageView from "@/components/ImageView.vue";
export default {
  components: { ImageView },
  props: ["data"],
};
</script>
<style lang="scss">
.movies-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0px 8px;
  .movie {
    max-width: 25%;
    flex: 1 1 50%;
    padding: 16px 8px;
    .movie-link {
      display: flex;
      flex-direction: column;
      height: 100%;
      .movie-image {
        position: relative;
        display: block;
        img {
          display: block;
          width: 100%;
          height: 275px;
          object-fit: cover;
        }
        .type {
          position: absolute;
          padding: 8px 16px;
          background-color: #428883;
          color: #fff;
          bottom: 16px;
          left: 0px;
          text-transform: capitalize;
        }
      }
      .movie-detail {
        background-color: #496583;
        padding: 16px 8px;
        flex: 1 1 100%;
        border-radius: 0px 0px 8px 8px;
        .year {
          color: #aaa;
          font-size: 14px;
        }
        h3 {
          color: #fff;
          font-weight: 600;
          font-size: 18px;
        }
      }
    }
  }
}
</style>
