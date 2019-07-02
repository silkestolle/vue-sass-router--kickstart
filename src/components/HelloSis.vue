<template>
  <div class="hello-sis">
    <h1 class="hello-sis__headline">{{ msg }}</h1>
  </div>
</template>

<script>

export default {
  name: 'HelloSis',
  components: {
  },
  data() {
    return {
      msg: 'Hello Sis',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hello-sis {
  &__headline {
    font-style: italic;
  }
}
</style>
