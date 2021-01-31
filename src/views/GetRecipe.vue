<template>
  <div class="get_recipe">
    <img class="logo" alt="Logo da Bom de Garfo" src="../assets/logo.png" />
    <RecipeSearch />
  </div>
</template>

<script>
import RecipeSearch from "@/components/RecipeSearch.vue";
export default {
  name: "GetRecipe",
  setup() {
    return {
      RecipeSearch,
    };
  },
};
</script>

<style lang="scss" scoped></style>
