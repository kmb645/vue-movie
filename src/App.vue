<template>
  <header>
    <AppNavigation />
  </header>
  <main>
    <router-view />
  </main>
</template>
<script>
import AppNavigation from "@/components/AppNavigation.vue";
export default {
  components: { AppNavigation },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sens-serif;
  &::selection {
    background: transparentize(#428883, 0.5);
  }
}
body {
  background-color: $background-primary;
}
a {
  text-decoration: none;
}
header {
  border-bottom: 1px solid $background-border;
  background-color: $background-secondary;
}
</style>
