<template>
  <div id="app">
    <div class="app">
      <ProgressBar />
      <QuizQuestion
        
        :ongoing="progress"
        :currentQuestion="questions[current].question"
        :currentObject="questions[current]"
        :question="questions"
        :counter="current"
        :correctanswer="correctanswer"
        :answered="answered"
        @submitdata="submitdata"
        
      ></QuizQuestion>
      <div class="nav">
        <buttonComponent @increment="add" :answered="answered" @submit="submitAnswer" :array="childdata" ></buttonComponent>
       
      </div>
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
      correctAnswers: [],
      childdata: [],
     answered: false,
     correctanswer: null,
     correctIndex:null,
     selectedAnswer:null
    };
  },
 beforeCreate() {
   
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
        this.questions = response.results;
      });
  },
  methods: {
    add() {
      this.current++;
     
      if (this.selectedAnswer === null){
        alert('please choose an answer mofo')
      }
    },
    submitdata(value) {
       this.answered = true;
      this.childdata = value;
      this.answered = this.childdata[2]
      this.correctIndex = this.childdata[0]
      this.selectedAnswer = this.childdata[1]
    },
    submitAnswer() {
      let correctAnswer = false;
      if (this.childdata[1] === this.childdata[0]) {
        correctAnswer = true;
        this.childdata[1] = null
        this.progress.answered++;
        console.log(correctAnswer);
        alert('submitted')
      }
      this.correctanswer = correctAnswer
      this.answered = true
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
  height: 100%;
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
.nav {
  display: flex;
  width: 50%;
  margin: auto;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-bottom: 3em;
}
</style>
