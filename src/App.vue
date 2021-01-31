<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/get-recipe">Procurar Receita</router-link>
  </div>
  <router-view />
  <div id="footer">
    feito por
    <a
      href="https://www.linkedin.com/in/leandro-eduardo-koller/"
      target="_blank"
      >Leandro Koller</a
    >, com <a href="https://vuejs.org/" target="_blank">Vue</a>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav,
#footer {
  padding: 24px;
  background-color: rgb(224, 227, 240);
}

#footer {
  a {
    color: #42b983;
    font-weight: bold;
  }
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.logo {
  margin: 16px;
  width: fit-content;
  align-self: center;
}

.home,
.get_recipe {
  background-image: url(https://wallpaperaccess.com/full/1412206.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-bottom: 1.6rem;
}

h2 {
  color: rgb(224, 227, 240);
  font-family: "Playfair Display";
  font-weight: 400;
  font-size: 1.8rem;
  text-shadow: 0 0 16px #2c3e50;
}

h3 {
  color: #42b983;
}

textarea {
  resize: vertical;
}

hr {
  width: 100%;
  border: 1px solid #2c3e50;
  margin-top: 1.2rem;
  margin-bottom: 0;
}
</style>
