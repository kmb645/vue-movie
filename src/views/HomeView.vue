<template>
  <div class="home">
    <form @submit.prevent="searchMovies()" class="search-box">
      <input
        type="text"
        placeholder="Search for a movie, tv show, person....."
        v-model="search"
      />
      <input type="submit" value="Search" :disabled="loading" />
    </form>
    <Movie-list :movies="movies" />
  </div>
</template>

<script>
import { ref } from "vue";
import env from "@/env.js";

import MovieList from "@/components/MovieList.vue";
export default {
  components: { MovieList },
  setup() {
    const search = ref("");
    const movies = ref([]);
    let loading = false;
    const searchMovies = () => {
      if (search.value != "") {
        loading = true;
        fetch(
          `${env.baseUrl}search/movie?api_key=${env.apiKey}&query=${search.value}`
        )
          .then((response) => response.json())
          .then((data) => {
            loading = false;
            movies.value = data.results;
          })
          .catch(() => {
            loading = false;
          });
      }
    };
    return { search, movies, searchMovies, loading };
  },
};
</script>
<style lang="scss" scoped>
.home {
  .search-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;
    input {
      display: block;
      appearance: none;
      border: none;
      outline: none;
      background: none;
      border-radius: 4px;
      &[type="text"] {
        width: 100%;
        color: #fff;
        background-color: #496583;
        font-size: 20px;
        padding: 10px 16px;
        margin-bottom: 15px;
        transition: 0.4s;
        &::placeholder {
          color: #f3f3f3;
        }
        &:focus {
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
        }
      }
      &[type="submit"] {
        width: 100%;
        max-width: 300px;
        background-color: $background-submit;
        padding: 16px;
        border-radius: 8px;
        color: #fff;
        font-size: 20px;
        text-transform: uppercase;
        transition: 0.4s;
        &:active {
          background-color: #388070;
        }
      }
    }
  }
}
</style>
