<template>
  <div class="navigation">
    <ul>
      <li v-for="(link, index) in links" :key="index">
        <router-link :to="link.url" @click="resetSearch">
          <br />
          <span>{{ link.text }}</span>
        </router-link>
      </li>
      <li>
        <AppSearch @search="search" />
      </li>
    </ul>
  </div>
</template>

<script>
import AppSearch from "@/components/AppSearch";

export default {
  name: "AppNavigation",
  components: { AppSearch },
  data() {
    return {
      links: [
        {
          url: "/movies",
          text: "Movies",
          icon: "film",
          transform: "shrink-6",
        },
        {
          url: "/tv-shows",
          text: "TV shows",
          icon: "star",
          transform: "shrink-7",
        },
        {
          url: "/person",
          text: "Person",
          icon: "tv",
          transform: "shrink-8",
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
ul {
  margin: 0;
  padding: 0;
  display: flex;
}
li {
  height: 60px;
  width: 50px;
  border-left: 1px solid $background-border;
  list-style: none;
  display: inline-block;
  box-sizing: border-box;

  &:last-child {
    flex-grow: 1;
    border-right: 1px solid $background-border;
  }
  input {
    display: block;
    appearance: none;
    border: none;
    outline: none;
    background: none;
    &[type="text"] {
      width: 100%;
      color: #fff;
      background-color: #496583;
      font-size: 20px;
      padding: 120px;
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
      padding: 19px;
      color: #fff;
      font-size: 20px;
      transition: 0.4s;
      &:active {
        background-color: #388070;
      }
    }
  }
}
a {
  display: block;
  height: 100%;
  text-align: center;
  color: $color-text-primary;
  text-decoration: none;

  &:hover {
    color: $color-text-secondary;
  }

  &.router-link-active {
    background: $background-active;
    background: radial-gradient(
      circle,
      $background-active-gradient1,
      $background-active-gradient2
    );
    color: $color-text-secondary;
  }
}
span {
  display: none;
}
.navigation {
  margin: 0 auto;
}
.icon {
  margin-top: 15px;
}

@include sm {
  li {
    width: 90px;
  }
  span {
    display: inline;
    padding: 0 10px;
  }
  .icon {
    margin-top: 3px;
  }
}
</style>
