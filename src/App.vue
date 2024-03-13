<template>
  <div id="app">
    <nav></nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap");

body,
html {
  font-family: "Montserrat", sans-serif;
  // outline: 1px solid blue;
}

* {
  // outline: 1px solid red;
}
</style>
