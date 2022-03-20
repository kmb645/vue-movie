<template>
  <div class="home">
    <form @submit.prevent="" class="search-box">
      <input
        type="text"
        placeholder="Search for a movie, tv show, person....."
        v-model="search"
      />
      <input type="submit" value="Search" />
    </form>
  </div>
</template>

<script></script>
<style lang="scss" scoped>
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
      background-color: #428883;
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
</style>
