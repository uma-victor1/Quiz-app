<template>
  <div id="app">
    <div class="app">
      <ProgressBar />
      <QuizQuestion
        :ongoing="progress"
        :currentQuestion="questions[current].question"
        :currentObject="questions[current]"
        :counter="current"
      ></QuizQuestion>
      <buttonComponent @increment="add"></buttonComponent>
    </div>
  </div>
</template>

<script>
import ProgressBar from "./components/ProgressBar.vue";
import QuizQuestion from "./components/QuizQuestion.vue";
import buttonComponent from "./components/buttonComponent";
export default {
  name: "App",
  components: {
    ProgressBar,
    QuizQuestion,
    buttonComponent,
  },
  data() {
    return {
      progress: {
        answered: 1,
        totalQues: 20,
      },
      questions: [],
      current: 0,
    };
  },
  mounted() {
    let vm = this;
    fetch(
      "https://opentdb.com/api.php?amount=10&category=31&difficulty=easy&type=multiple",
      {
        method: "get",
      }
    )
      .then((data) => {
        return data.json();
      })
      .then((response) => {
        vm.questions = response.results;
      });
  },
  methods: {
    add() {
      this.current++;
    },
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
  height: calc(100vh);
}

.app {
  width: 80%;
  margin: auto;
}
button {
  background-color: #107eeb;
  border: none;
  color: white;
  border-radius: 1em;
  outline: none;
  padding: 1.2em 2.3em;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}
</style>
