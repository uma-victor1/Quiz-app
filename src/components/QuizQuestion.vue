<template>
  <div class="quiz-question">
    <div>
      <p>
        <span class="ques">Question {{answered}}</span>
        /
        {{totalQues}}
      </p>

      <div class="ques-box">
        <p>Shebi you said you will buy car this year. Where e dey, abi make i mind my business? 😏</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuizQuestion",
  props: [],
  data() {
    return {
      answered: 1,
      totalQues: 20,
    };
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
.ques-box{
     font-size: 1.1rem;
     color: #e7e8eb;
}
</style>
 