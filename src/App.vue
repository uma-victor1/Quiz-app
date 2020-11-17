<template>
  <div id="app">
    <!-- use router-link component for navigation. -->
    <!-- specify the link by passing the `to` prop. -->
    <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
    <div class="navigation">
      <router-link to="/">Home</router-link>
      <router-link to="/About">About</router-link>
      <router-link :to="{ name: 'Contact', params: { id: '1234' } }"
        >Contact</router-link
      >
    </div>

    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#app {
  font-family: "Josefin Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  color: #ced0d5;
  background: #252c4a;
  padding: 0;
  margin: 0;
  box-sizing: border-box;

  height: 100vh;
}
.navigation {
  display: flex;
  justify-content: center;
}
.navigation a {
  color: white;
  margin-left: 0.5em;
}
</style>