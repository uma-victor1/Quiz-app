<template>
  <div>
    <button @click="update">
      <slot>Next</slot>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    update() {
      this.$emit("increment");
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
  margin-top: 3em;
  display: flex;
}
</style>