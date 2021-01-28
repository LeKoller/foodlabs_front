<template>
  <div class="main_container">
    <h2>Criando uma nova receita!</h2>
    <form @submit.prevent="createRecipe">
      <label for="name">Nome: </label>
      <input type="text" name="name" placeholder="... da receita" />

      <label for="description">Descrição: </label>
      <textarea
        name="description"
        cols="30"
        rows="4"
        placeholder="... sobre a receita"
      ></textarea>

      <label for="instructions">Instruções: </label>
      <textarea
        name="instructions"
        cols="30"
        rows="4"
        placeholder="... como fazer"
      ></textarea>

      <hr />

      <div class="tags_container">
        <label for="tag">Tags: </label>
        <div
          class="tag_and_button"
          v-for="(input, index) in state.tagsList"
          :key="index"
        >
          <input
            type="text"
            name="tag"
            v-model="input.tag"
            placeholder="... o nome da tag"
          />
          <div class="button_case">
            <button
              @click="addTag(input.tag, index)"
              :id="`tag_${index}`"
              class="add_button"
            >
              <md-icon @click="removeTag(index)" class="material-icons"
                >add_circle_outline</md-icon
              >
            </button>
          </div>
        </div>
      </div>

      <hr />

      <div class="ingredients_container">
        <label for="ingredients">Ingredientes: </label>
        <div
          class="ingredient_and_button"
          v-for="(input, index) in state.ingredientsList"
          :key="index"
        >
          <div class="small_container">
            <div class="inputs">
              <input
                class="ingredient_name"
                type="text"
                placeholder="... nome do ingrediente"
                v-model="input.ingredient"
              />
              <input
                class="ingredient_unit"
                type="text"
                placeholder="... tipo de unidade de medida"
                v-model="input.unit"
              />
              <input
                class="ingredient_amount"
                type="number"
                placeholder="... quantidade"
                v-model="input.amount"
              />
            </div>
            <div class="button_case">
              <button
                @click="
                  addIngredient(
                    input.ingredient,
                    input.unit,
                    input.amount,
                    index
                  )
                "
                :id="`ingredient_${index}`"
                class="add_button"
              >
                <md-icon @click="removeIngredient(index)" class="material-icons"
                  >add_circle_outline</md-icon
                >
              </button>
            </div>
          </div>
          <hr />
        </div>
      </div>

      <button type="submit" class="submit_button">Criar receita!</button>
    </form>
  </div>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  name: "RecipeForm",
  setup() {
    const state = reactive({
      tagsList: [{ name: "" }],
      ingredientsList: [""],
    });

    const tagsNumber = computed(() => state.tagsList.length);
    const ingredientsNumber = computed(() => state.ingredientsList.length);

    function createRecipe() {
      return null;
    }

    function addTag(tag, id) {
      state.tagsList.push({ name: tag });
      const addButton = document.getElementById(`tag_${id}`);
      addButton.disabled = true;
    }

    function removeTag(id) {
      const clickedAddButton = document.getElementById(`tag_${id}`);
      if (clickedAddButton.disabled == true) {
        state.tagsList.pop();
      }
      const lastAddButton = document.getElementById(
        `tag_${tagsNumber.value - 1}`
      );
      lastAddButton.disabled = false;
    }

    function addIngredient(ingredient, unit, amount, id) {
      state.ingredientsList.push({
        name: ingredient,
        unit: unit,
        amount: amount,
      });
      const addButton = document.getElementById(`ingredient_${id}`);
      addButton.disabled = true;
    }

    function removeIngredient(id) {
      const clickedAddButton = document.getElementById(`ingredient_${id}`);
      if (clickedAddButton.disabled === true) {
        state.ingredientsList.pop();
      }
      const lastAddButton = document.getElementById(
        `ingredient_${ingredientsNumber.value - 1}`
      );
      lastAddButton.disabled = false;
    }

    return {
      state,
      createRecipe,
      tagsNumber,
      addTag,
      removeTag,
      ingredientsNumber,
      addIngredient,
      removeIngredient,
    };
  },
};
</script>

<style lang="scss" scoped>
h2 {
  color: #42b983;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

@supports (backdrop-filter: blur()) {
  .main_container {
    backdrop-filter: blur(4px);
    background-color: rgba($color: #000000, $alpha: 0.3);
    width: 40%;
    display: flex;
    flex-direction: column;
    margin-left: 30%;
    padding: 16px;
    border: 1px solid rgba($color: #2c3e50, $alpha: 0.8);
    border-radius: 16px;

    form {
      display: flex;
      flex-direction: column;
      width: 96%;
      align-self: center;
      margin-left: 2%;

      .submit_button {
        width: fit-content;
        margin: 0;
        margin-top: 16px;
        align-self: center;
        background-color: #aa3939;
        padding: 8px;
        border: none;
        border-radius: 6px;
        color: white;
        font-family: "Roboto";
        font-size: 1rem;
        font-weight: 500;
        outline: none;
        cursor: pointer;
        transition: all 0.25s ease;

        &:hover {
          transform: scale(1.1, 1.1);
          box-shadow: 0 0 16px #2c3e50;
        }

        &:active {
          transform: scale(0.8, 0.8);
        }
      }

      hr {
        width: 100%;
        border: 1px solid #2c3e50;
        margin-top: 1.2rem;
        margin-bottom: 0;
      }

      .tags_container,
      .ingredients_container {
        display: flex;
        flex-direction: column;

        .tag_and_button,
        .ingredient_and_button {
          display: flex;

          .inputs {
            display: flex;
            flex-direction: column;
            width: 100%;

            input {
              margin-top: 0.6rem;
              width: 100%;
            }
          }

          .button_case {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
          }

          .add_button {
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

        .ingredient_and_button {
          flex-direction: column;
          margin-top: 0.6rem;

          .small_container {
            display: flex;
            flex-direction: row;
          }
        }
      }

      label {
        margin-top: 1.6rem;
        margin-bottom: 0;
        color: #42b983;
        font-weight: bold;
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
      }
    }
  }
}
</style>
