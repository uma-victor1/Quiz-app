<template>
  <div id="app">
    <div class="app">
      
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
        <buttonComponent  @increment="add" :answered="progress.answered" @submit="submitAnswer"  :array="childdata" :total='current' ></buttonComponent>
       
      </div>
    </div>
  </div>
</template>

<script>

import QuizQuestion from "./components/QuizQuestion.vue";
import buttonComponent from "./components/buttonComponent";
export default {
  name: "App",
  components: {
   
    QuizQuestion,
    buttonComponent,
  },
  data() {
    return {
      progress: {
        answered: 2,
        totalQues: 20,
      },
      questions: [],
      
      correctAnswers: [],
      childdata: [],
     answered: 0,
     correctanswer: null,
     correctIndex:null,
     selectedAnswer:null,
     current:0
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
      
     
      if (this.selectedAnswer === null){
        alert('please choose an answer mofo')
      }
    },
    
    submitdata(value) {
      this.progress.answered ++
       this.answered = true;
      this.childdata = value;
      this.answered = this.childdata[2]
      this.correctIndex = this.childdata[0]
      this.selectedAnswer = this.childdata[1]
      this.current = this.childdata[3]
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
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200&display=swap');

#app {
  font-family: 'Josefin Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #ced0d5;
  background: #252c4a;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
 
  height: 100vh;
}

.app {
  width: 80%;
  margin: auto;
   max-width: 900px;
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
