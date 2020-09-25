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
        @load.prevent="selected(index)"
        @click="selecteddata(event)"
        :class="[answered && correctIndex == index ? 'correctanswer' : '']"
      >
        {{ answer }}
      </p>
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
      current: 0,

      selectedAnswer: null,
      shuffledAnswer: [],
      correctIndex: null,
      answeredques: 0,
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
      this.current++;
      this.answeredques++;
      this.$emit("submitdata", [
        this.correctIndex,
        this.selectedAnswer,
        this.answeredques,
        this.current,
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
