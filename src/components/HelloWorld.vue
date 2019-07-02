<template>
  <div class="hello-world">
    <img src="../assets/logo.png"
         class="hello-world__logo">
    <h1 class="hello-world__headline">{{ msg }}</h1>
    <router-link to="/sis"
                 class="hello-world__link">Say hello to Sis...</router-link>
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

<style lang="scss" scoped>
.hello-world {
  &__logo {
    max-width: 100%;
    height: auto;
    float: right;
  }

  &__headline {
    font-style: italic;
  }
}
</style>
