<template>
  <div class="home">
    <form @submit.prevent="" class="search-box">
      <input
        type="text"
        placeholder="What are you looking for?"
        v-model="search"
      />
      <input type="submit" value="Search" />
    </form>
  </div>
</template>

<script></script>
