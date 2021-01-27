<template>
  <div class="main_container">
    <form @submit.prevent="createRecipe">
      <label for="name">Name: </label>
      <input type="text" name="name" />

      <label for="description">Description: </label>
      <textarea name="description" cols="30" rows="4"></textarea>

      <label for="instructions">Instructions: </label>
      <textarea name="instructions" cols="30" rows="4"></textarea>

      <hr />

      <div class="tags_container">
        <label for="tag">Tag: </label>
        <div class="tag_and_button">
          <input type="text" name="tag" />
          <button>
            <md-icon class="material-icons">add_circle_outline</md-icon>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "RecipeForm",
  setup() {
    function createRecipe() {
      return null;
    }

    return {
      createRecipe,
    };
  },
};
</script>

<style lang="scss" scoped>
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
    width: 40%;
    display: flex;
    margin-left: 30%;
    padding: 16px;
    border: 1px solid rgba($color: #2c3e50, $alpha: 0.8);
    border-radius: 8px;

    form {
      display: flex;
      flex-direction: column;
      width: 96%;
      align-self: center;
      margin-left: 2%;

      hr {
        width: 100%;
        border: 1px solid #2c3e50;
        margin-top: 1.2rem;
        margin-bottom: 0;
      }

      .tags_container {
        display: flex;
        flex-direction: column;

        .tag_and_button {
          display: flex;

          button {
            margin-left: 8px;
          }
        }
      }

      label {
        margin-top: 1.6rem;
        margin-bottom: 0.4rem;
        color: #42b983;
        font-weight: bold;
        align-self: flex-start;
        text-shadow: 0px 0px 1px #141414;
      }

      input,
      textarea {
        align-self: center;
        width: 100%;
      }
    }
  }
}
</style>
