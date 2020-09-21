<template>
  <div>
    <button @click="update">
      <slot>Next</slot>
    </button>
    <button  @click="submit">
      <slot>submit</slot>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quesdata: [],
    };
  },
  props: ["array"],
  methods: {
    update() {
      this.$emit("increment");
      
    },
    submit(){
      this.$emit("submit");
    }
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
  margin-top: 3em;
  display: flex;
}
button:active{
  background:  #022b53;
}
</style>