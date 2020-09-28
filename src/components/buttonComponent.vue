<template>
  <div>
    <button @click="submit">
      <slot>submit</slot>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      total: null,
    };
  },
  props: ["questions", "correctAnswer"],

  methods: {
    submit() {
      alert("total score = " + this.correctAnswer +' out of ' + this.questions.length);
    },
  },
};
</script>

<style scoped>
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
  margin: auto;
  margin-top: 1em;
  display: flex;
}
button:active {
  background: #022b53;
}
</style>