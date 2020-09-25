<template>
  <div>
    <button :disabled="total < 9" @click="submit">
      <slot>submit</slot>
    </button>
  </div>
</template>

<script>
import { bus } from "../main";
export default {
  data() {
    return {
  
    };
  },
  props: ["array", "total",'answered'],
 
  methods: {
    submit() {
      this.$emit("submit");
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