<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <RecipeForm />
  </div>
</template>

<script>
// @ is an alias to /src
import RecipeForm from "@/components/RecipeForm.vue";

export default {
  name: "Home",
  components: {
    RecipeForm,
  },
};
</script>

<style lang="scss" scoped>
.home {
  background-image: url(https://wallpaperaccess.com/full/1412206.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}
</style>
