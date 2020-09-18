<template>
  <div class="quiz-question">
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
        :class="[selectedAnswer === index ? 'selected' : '']"
      >
        {{ answer }}
      </p>
    </div>
  </div>
</template>

<script>
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
  },
  data() {
    return {
      selectedAnswer: null,
      shuffledAnswer: [],
    };
  },
  filters: {
    replace: function(value) {
      return value.replace(/&quot;/g, '"');
    },
    apostroph: function(value) {
      return value.replace(/&#039;/g, "'");
    },
  },
  watch: {
    currentObject:{
      immediate: true,
      handler(){
        this.selectedAnswer = null;
       this.shuffleAnswers();
      }

    }
  },
  methods: {
    selected(index) {
      console.log(index);
      this.selectedAnswer = index;
    },
    shuffleAnswers() {
      let answer = [
        ...this.currentObject.incorrect_answers,
        this.currentObject.correct_answer
      ];
      this.shuffledAnswer = _.shuffle(answer);
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
