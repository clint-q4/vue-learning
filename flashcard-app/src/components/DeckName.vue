<template>
  <h1>{{name}}</h1>
</template>

<script>
  export default {
    name: 'DeckName',
    props: ['name']
  }
</script>

<style scoped>
  h1 {
    font-size: 3rem;
    font-weight: bold;
  }
</style>
