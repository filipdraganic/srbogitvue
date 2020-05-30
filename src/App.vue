<template>

  <div>

    <webapp-header>

    </webapp-header>

    <router-view>


    </router-view>




    <webapp-footer>

    </webapp-footer>

  </div>

</template>


<script>

  import Home from "./views/Home";
  import headerLoggedIn from "./views/headerLoggedIn";
  import headerLoggedOut from "./views/headerLoggedOut";
  import footer from "./views/footer";


  export default {
    name: 'App',
    components: {
      'home': Home,
      'webapp-footer': footer,
      'webapp-header': headerLoggedOut,
      'headerLoggedIn': headerLoggedIn,

    },
    data() {
      return{
        loginStatus: 0
      }
    },

    created() {
      console.log("nesto iz app")
    },

    methods: {

    }
  }
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
