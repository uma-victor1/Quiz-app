<template>
    <div>
        <P>contact Developer here</P>
        <h2>{{$route.params.id}}</h2>
        <router-link :to="{ name: 'Contact', params: { id: '5646' } }">LinkTitle</router-link>
    </div>
</template>

<script>
    export default {
      mounted () {
          console.log(this.$route.params.id)
      },  
      watch: {
          $route(to, from) {
              console.log('to', to)
              console.log('from', from)
          }
      },
    }
</script>

<style scoped>

</style>