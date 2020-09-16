<template>
  <div>
    <div class="progress">
      <div class="progress-bar">
        <div class="status">40</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "ProgressBar",
  props: [],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.progress {
  margin-top: 0;
  padding-top: 3em;
}
.progress-bar {
  border: 2px solid #233858;
  border-radius: 5em;
}
.status {
  width: 70%;
  height: 100%;
  padding: 0.7em 0;
  background-color: #fd4e68;
  border-radius: 5em;
  text-align: center;
}
</style>

