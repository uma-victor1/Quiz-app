<template>
  <div class="quiz-question" v-if="question.length">
    <div>
      <p>
        <span class="ques">Question {{ counter + 1 }}</span>
        /
        {{ question.length }}
      </p>

      <div class="ques-box">
        <p>{{ currentQuestion | replace | apostroph }}😏</p>
      </div>
    </div>
    <div class="answer-container">
      <p
        class="answer"
        v-for="(answer, index) in shuffledAnswer"
        :key="index"
        @click.prevent="selected(index)"
        @click="selecteddata(event)"
        :class="[
        !answeredques && selectedAnswer === index ? 'selected' : 
      answered && correctIndex  == index ? 'correctanswer' : ''

        ]"
      >{{ answer }}</p>
    </div>
    
  </div>
</template>

<script>
import { bus } from "../main";
import _ from "lodash";
export default {
  name: "QuizQuestion",
  components: {},
  props: {
    ongoing: {
      type: Object,
    },
    currentQuestion: {
      type: String,
    },
    currentObject: {
      type: Object,
    },
    counter: {
      type: Number,
    },
    question: {},
    answered: Boolean,
  },
  data() {
    return {
      selectedAnswer: null,
      shuffledAnswer: [],
      correctIndex: null,
      answeredques: false,
    };
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
    currentObject: {
      immediate: true,
      handler() {
        this.selectedAnswer = null;
        this.shuffleAnswers();
        this.answeredques = false;
        this.answered = false;
      },
    },
  },
  methods: {
    selected(index) {
      this.selectedAnswer = index;
       this.answered = true;
      bus.$emit("changeIt", [
        this.correctIndex,
        this.selectedAnswer,
        this.answeredques,
      ]);
    },
    selecteddata(event) {
       this.answered = true;
      this.$emit("submitdata", [
        this.correctIndex,
        this.selectedAnswer,
        this.answeredques,
      ]);
    },
    shuffleAnswers() {
      let answer = [
        ...this.currentObject.incorrect_answers,
        this.currentObject.correct_answer,
      ];
      this.shuffledAnswer = _.shuffle(answer);
      this.correctIndex = this.shuffledAnswer.indexOf(
        this.currentObject.correct_answer
      );
    },
  },
  computed: {
    answers() {
      let answer = [...this.currentObject.incorrect_answers];
      answer.push(this.currentObject.correct_answer);
      return answer;
    },
    // totalques(){
    //   total = th
    // }
  },
};
</script>

<style scoped>
.quiz-question {
  margin-top: 3em;
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
  margin-top: 5em;
}
.answer {
  border-radius: 1.4em;
  border: 4px solid #233858;
  padding: 0.9em 0;
  text-align: center;
  color: #b2b5bf;
  margin-bottom: 1em;
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
