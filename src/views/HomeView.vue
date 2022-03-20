<template>
  <div class="home">
    <form @submit.prevent="searchMovies()" class="search-box">
      <input
        type="text"
        :required="true"
        placeholder="Search for a movie, tv show, person....."
        v-model="search"
      />
      <label class="container"
        >Movie
        <input
          type="radio"
          checked="checked"
          name="radio"
          value="movie"
          v-model="catType"
          @click="setCatType('movie')"
        />
        <span class="checkmark"></span>
      </label>
      <label class="container"
        >TV show
        <input
          type="radio"
          name="radio"
          value="tv"
          @click="setCatType('tv')"
          v-model="catType"
        />
        <span class="checkmark"></span>
      </label>
      <label class="container"
        >Person
        <input
          type="radio"
          name="radio"
          @click="setCatType('person')"
          value="person"
          v-model="catType"
        />
        <span class="checkmark"></span>
      </label>

      <input type="submit" value="Search" :disabled="loading" />
    </form>
    <component :is="`${catType}C`" :data="movies" />

    <div v-if="notfound" class="not-found">Oops! Record doesn't exist</div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import env from "@/env.js";

import movieC from "@/components/movieC.vue";
import tvC from "@/components/tvC.vue";
import personC from "@/components/personC.vue";

export default {
  components: { tvC, movieC, personC },
  setup() {
    const search = ref("");
    const movies = ref([]);
    let loading = ref(false);
    let notfound = ref(false);
    let catType = reactive("movie");
    const setCatType = (p) => (catType = p);
    const searchMovies = () => {
      if (search.value != "") {
        fetch(
          `${env.baseUrl}search/${catType}?api_key=${env.apiKey}&query=${search.value}`
        )
          .then((response) => response.json())
          .then((data) => {
            movies.value = data.results;
            loading = false;
            notfound.value = movies.value.length === 0;
          });
      }
    };
    return {
      search,
      movies,
      searchMovies,
      loading,
      notfound,
      catType,
      setCatType,
    };
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
  .not-found {
    text-align: center;
    color: red;
  }

  /* The container */
  .container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: white;
  }

  /* Hide the browser's default radio button */
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  /* Create a custom radio button */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border-radius: 50%;
  }

  /* On mouse-over, add a grey background color */
  .container:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* When the radio button is checked, add a blue background */
  .container input:checked ~ .checkmark {
    background-color: #2196f3;
  }

  /* Create the indicator (the dot/circle - hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the indicator (dot/circle) when checked */
  .container input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the indicator (dot/circle) */
  .container .checkmark:after {
    top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }
}
</style>
