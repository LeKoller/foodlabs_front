import { createStore } from "vuex";

export default createStore({
  state: {
    search: {
      gotRecipe: false,
      recipe: {
        name: "",
        description: "",
        instructions: "",
        tags: [],
        ingredients: [],
      },
    },
    create: {
      name: "",
      description: "",
      instructions: "",
      tagsList: [{ name: "" }],
      ingredientsList: [{ name: "", unit: "", amount: "" }],
    },
  },

  mutations: {
    SET_SEARCH_GOT_RECIPE(state) {
      state.search.gotRecipe = true;
    },
    SET_SEARCH_RECIPE_VALUES(state, recipeAPIObject) {
      const recipe = state.search.recipe;
      recipe.name = recipeAPIObject.name;
      recipe.description = recipeAPIObject.description;
      recipe.instructions = recipeAPIObject.instructions;
      recipe.tags = recipeAPIObject.tags;
      recipe.ingredients = recipeAPIObject.ingredient_set;
    },
    SET_CREATE_ADD_TAG(state, tagObject) {
      state.create.tagsList.push(tagObject);
    },
    SET_CREATE_REMOVE_TAG(state) {
      state.create.tagsList.pop();
    },
    SET_CREATE_ADD_INGREDIENT(state, ingredientObject) {
      state.create.ingredientsList.push(ingredientObject);
    },
    SET_CREATE_REMOVE_INGREDIENT(state) {
      state.create.ingredientsList.pop();
    },
  },

  actions: {
    setSearchGotRecipe({ commit }, searchGotRecipe) {
      commit("SET_SEARCH_GOT_RECIPE", searchGotRecipe);
    },
    setSearchRecipeValues({ commit }, recipeAPIObject) {
      commit("SET_SEARCH_RECIPE_VALUES", recipeAPIObject);
    },
    setCreateAddTag({ commit }, tagObject) {
      commit("SET_CREATE_ADD_TAG", tagObject);
    },
    setCreateRemoveTag({ commit }) {
      commit("SET_CREATE_REMOVE_TAG");
    },
    setCreateAddIngredient({ commit }, ingredientObject) {
      commit("SET_CREATE_ADD_INGREDIENT", ingredientObject);
    },
    setCreateRemoveIngredient({ commit }) {
      commit("SET_CREATE_REMOVE_INGREDIENT");
    },
  },
  modules: {},
});
