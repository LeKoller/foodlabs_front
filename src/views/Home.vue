<template>
  <div class="home">
    <img class="logo" alt="Logo da Bom de Garfo" src="../assets/logo.png" />
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

<style lang="scss" scoped></style>
