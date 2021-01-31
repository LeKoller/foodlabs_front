<template>
  <div class="main_container">
    <h2>Procurando uma receita</h2>
    <form @submit.prevent="searchRecipe">
      <label for="id_search">Procure pelo id</label>
      <div class="input_and_button">
        <input type="number" name="id_search" />
        <div class="button_case">
          <button class="search_button">
            <md-icon class="material-icons">search</md-icon>
          </button>
        </div>
      </div>
    </form>
    <div v-show="state.gotRecipe">
      <hr />
      <div class="recipe_case">
        <h3 class="recipe_name">{{ state.recipe.name }}</h3>
        <p class="recipe_description">{{ state.recipe.description }}</p>
        <ul class="recipe_tags">
          <h4>Tags:</h4>
          <li v-for="(tag, index) in state.recipe.tags" :key="index">
            {{ tag.name }}
          </li>
        </ul>
        <ul>
          <h4>Ingredientes:</h4>
          <li
            v-for="(ingredient, index) in state.recipe.ingredients"
            :key="index"
          >
            {{ ingredient.name }} - {{ ingredient.amount }}
            {{ ingredient.unit }}
          </li>
        </ul>
        <p class="recipe_instructions">{{ state.recipe.instructions }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "RecipeSearch",
  setup() {
    const state = reactive({
      gotRecipe: false,
      recipe: {
        name: "Brigadeiro de Champanhe",
        description: "É um brigadeiro gourmet",
        instructions: "Junte espumante ao chocolate branco e deixe ferver",
        tags: [{ name: "doce" }, { name: "gourmet" }],
        ingredients: [
          { name: "chocolate branco", unit: "g", amount: 300 },
          {
            name: "espumante",
            unit: "mL",
            amount: 100,
          },
        ],
      },
    });

    function searchRecipe() {
      state.gotRecipe = !state.gotRecipe;
    }
    return {
      state,
      searchRecipe,
    };
  },
};
</script>

<style lang="scss" scoped>
@supports (backdrop-filter: blur()) {
  .main_container {
    backdrop-filter: blur(4px);
    background-color: rgba($color: #000000, $alpha: 0.3);
    width: 40%;
    display: flex;
    flex-direction: column;
    padding: 16px;
    border: 1px solid rgba($color: #2c3e50, $alpha: 0.8);
    border-radius: 16px;
    align-self: center;

    .recipe_case {
      padding: 0.8rem;
      padding-top: 0.4rem;
      background-color: rgba($color: #000000, $alpha: 0.1);
      margin-top: 1rem;
    }

    p,
    li,
    h4 {
      color: rgb(224, 227, 240);
      font-family: "Playfair Display";
      text-shadow: 0 0 8px #2c3e50;
      text-align: start;
    }

    h4 {
      color: #42b983;
      font-family: "Roboto";
    }

    form {
      display: flex;
      flex-direction: column;
      width: 96%;
      align-self: center;

      .input_and_button {
        display: flex;
        margin-bottom: 1rem;

        .button_case {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        .search_button {
          margin-left: 8px;
          color: #42b983;
          background: none;
          border: none;
          outline: none;
          cursor: pointer;
          transition: all 0.25s ease;

          &:hover {
            text-shadow: 0 0 8px #42b983;
          }

          &:active {
            transform: scale(0.8, 0.8);
          }

          &:disabled {
            cursor: unset;
            color: #2c3e50;
            text-shadow: none;
            transform: none;
          }
        }
      }

      label {
        margin-top: 1.6rem;
        margin-bottom: 0;
        color: #42b983;
        font-family: "Roboto";
        font-size: 1.2rem;
        font-weight: 400;
        align-self: flex-start;
        text-shadow: 0px 0px 8px #0a0a0a;
      }

      input,
      textarea {
        align-self: center;
        width: 100%;
        padding: 0.4rem;
        margin-top: 1rem;
        background-color: rgb(224, 227, 240);
        font-family: "Playfair Display";
        outline: none;
      }
    }
  }
}
</style>
