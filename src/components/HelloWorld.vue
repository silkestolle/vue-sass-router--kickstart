<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/sis">Say hello to Sis...</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  components: {
  },
  data() {
    return {
      msg: 'Hello World',
    };
  },
};
</script>

<style scoped>

</style>
