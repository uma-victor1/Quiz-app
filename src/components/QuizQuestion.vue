<template>
  <div class="quiz-question">
    <div>
      <p>
        <span class="ques">Question {{ongoing.answered}}</span>
        /
        {{ongoing.totalQues}}
      </p>

      <div class="ques-box">
        <p>{{currentQuestion | replace}}😏</p>
      </div>
    </div>
    <button v-on:click="$emit('add')">next</button>
    
  </div>
</template>

<script>

export default {
  name: "QuizQuestion",
  components: {
    
  },
  props: {
    ongoing: {
      type: Object,
    },
    currentQuestion: {
      type: String,
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
</style>
 