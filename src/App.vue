<template>
  <div id="app">
    <div class="app">

    <ProgressBar />
    <QuizQuestion></QuizQuestion>
    </div>
  </div>
</template>

<script>
import ProgressBar from "./components/ProgressBar.vue";
import QuizQuestion from "./components/QuizQuestion.vue";
export default {
  name: "App",
  components: {
    ProgressBar,
    QuizQuestion,
  },
 
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #ced0d5;
  background: #252c4a;
  padding: 0;
  margin: auto;
  box-sizing: border-box;
  max-width: 1024px;
  height: 100vh;
  
}

.app{
  width: 80%;
  margin: auto;

}
</style>
