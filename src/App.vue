<template>
    <div id="app">
   
      <p>
        <!-- use router-link component for navigation. -->
        <!-- specify the link by passing the `to` prop. -->
        <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
        <router-link to="/">Home</router-link>
        <router-link to="/About">About</router-link>
      </p>
      <!-- route outlet -->
      <!-- component matched by the route will render here -->
      <router-view></router-view>
    </div>
</template>

<script>
  export default {
    
  }
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
p{
  text-align: center;
}
P > a{
  color: white;
  margin-left: .5em;
}

</style>