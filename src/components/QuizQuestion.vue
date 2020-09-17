<template>
  <div class="quiz-question">
    <div>
      <p>
        <span class="ques">Question {{ongoing.answered}}</span>
        /
        {{ongoing.totalQues}}
      </p>

      <div class="ques-box">
        <p>{{currentQuestion | replace | apostroph }}😏</p>
      </div>
    </div>

    <p class="answer"
    v-for='(answer, index) in answers' :key='index'
    >{{ answer }}</p>
  </div>
</template>

<script>
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
  },
  data() {
    return {};
  },
  filters: {
    replace: function (value) {
      return value.replace(/&quot;/g, '"');
    },
    apostroph: function (value) {
      return value.replace(/&#039;/g, "'");
    },
  },
  computed: {
    answers() {
      let answer = [...this.currentObject.incorrect_answers];
      answer.push(this.currentObject.correct_answer);
      return answer;
    }
  },
};
</script>

<style  scoped>
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
.answer {
  width: 100%;
  border-radius: 1.4em;
  border: 4px solid #233858;
  padding: 0.9em 0;
  text-align: center;
  color: #b2b5bf;
  margin-bottom: 1em;
}
</style>
 