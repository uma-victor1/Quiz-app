<template>
  <div id="app">
    <div class="app">
      <div class="quiz-question" v-if="questions.length">
        <div>
          <p>
            <span class="ques">Question {{ current + 1 }}</span>
            /
            {{ questions.length }}
          </p>

          <div class="ques-box">
            <p>{{ questions[current].question | replace | apostroph }}😏</p>
          </div>
        </div>
        <div class="answer-container">
          <p
            class="answer"
            v-for="(answer, index) in shuffledAnswer"
            :key="index"
            @click="selecteddata(index)"
            :class="[answered && correctIndex == index ? 'correctanswer' : '']"
          >
            {{ answer }}
          </p>
        </div>
      </div>
      <div class="nav">
        <buttonComponent
          :correctAnswer="correctAnswer"
          :questions="questions"
        ></buttonComponent>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import buttonComponent from "./components/buttonComponent";
export default {
  name: "App",
  components: {
    buttonComponent,
  },
  data() {
    return {
      answered: false,
      correctAnswer: 0,
      current: 0,
      questions: [],
      selectedAnswer: null,
      shuffledAnswer: [],
      correctIndex: null,

      currentObject: null,
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

  filters: {
    replace: function (value) {
      return value.replace(/&quot;/g, '"');
    },
    apostroph: function (value) {
      return value.replace(/&#039;/g, "'");
    },
  },

  watch: {
    currrentObject: {
      immediate: true,
      handler() {
        this.shuffleAnswers();

        this.answered = false;
      },
    },
  },

  methods: {
    selected(index) {},
    select() {
      this.current++;
    },
    selecteddata(index) {
      this.answered = true;

      this.selectedAnswer = index;
      if (this.selectedAnswer == this.correctIndex) {
        this.correctAnswer++;
      }
      console.log(index);
      setTimeout(() => {
        this.select();
      }, 1000);
    },
    shuffleAnswers() {
      let answers = [
        ...this.questions[this.current].incorrect_answers,
        this.questions[this.current].correct_answer,
      ];
      this.shuffledAnswer = _.shuffle(answers);
      this.correctIndex = this.shuffledAnswer.indexOf(
        this.questions[this.current].correct_answer
      );
    },
  },
  computed: {
    currrentObject() {
      let currentObject;
      currentObject = this.questions[this.current];

      return currentObject;
    },
    answers() {
      let answer = [...this.questions[this.current].incorrect_answers];
      answer.push(this.questions[this.current].correct_answer);
      return answer;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200&display=swap");

#app {
  font-family: "Josefin Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
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
}
.quiz-question {
  padding-top: 1em;
  color: #70789e;
}
.ques {
  font-size: 1.3rem;
}
.ques-box {
  font-size: 1.1rem;
  color: #e7e8eb;
}
.answer-container {
  margin-top: 1.8em;
}
.answer {
  border-radius: 1.4em;
  border: 3px solid #233858;
  padding: 0.7em 0;
  text-align: center;
  color: #b2b5bf;
  margin-bottom: 1em;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
}
.answer:hover {
  background: #416aa7;
  cursor: pointer;
}
.selected {
  background: #3e6299;
}
.correctanswer {
  background: rgb(112, 248, 112);
}
.incorrectanswer {
  background: rgb(240, 79, 79);
}
</style>
