<template>


  <div class="jumbotron row m-lg-5 m-1" >
    <div class="col-lg-9">

      <h1 class="display-4">Србогит</h1>

      <p class="lead">Najsavremeniji i najpatriotickiji websajt za upravljanje projektima koji ce dovesti do bolje i stabilnije Srbije</p>
      <p class="lead">Ako vas ovo privlaci i zelite do Srbija kao nacija napreduje, sta cekate</p>
      <p>Lajk sher sabskrajb!</p>
      <hr class="my-4">

        <div class="row justify-content-center">

          <div class=" col-0 col-sm-4 col-md-4 col-lg-6">

          </div>
          <div class="col-12 col-sm-6 col-md-6 col-lg-12 ">

            <div v-if="!this.$store.getters.getLoggedIn" >
              <div class="d-none d-md-block">
                <p class="lead"  >
                  <a class="btn btn-primary btn-lg text-white" style="background: green" v-on:click="login()" role="button">Prikljuci se sada!</a>
                </p>
              </div>
              <div class="d-md-none">
                <p class="lead nemoguce text-center"  >
                  <a class="btn btn-primary btn-lg text-white " style="background: green" v-on:click="login()" role="button">Prikljuci se sada!</a>
                </p>
              </div>
            </div>


            <div v-else>
              <div class="d-none d-md-block">
                <p class="lead" >
                  <a class="btn btn-primary btn-lg text-white" style="background: green" v-on:click="idiNaGit()" role="button">Idi na moj git</a>
                </p>
              </div>

              <div class="d-md-none">
                <p class="lead text-center" >
                  <a class="btn btn-primary btn-lg text-white" style="background: green" v-on:click="idiNaGit()" role="button">Idi na moj git</a>
                </p>
              </div>

            </div>


          </div>

        </div>

      </div>

      <div class="col-lg-3" id="gitSlika">
        <img src="../assets/git.png" alt="git-logo"  width="300px">
      </div>


  </div>





</template>

<script>
// @ is an alias to /src

import headerLoggedOut from "./headerLoggedOut";

export default {
  name: 'Home',

  created() {

  },

  methods:{
    login: function(){
      headerLoggedOut.methods.clickLoginBtn()
    },
    idiNaGit: function(){
      this.$router.push({path: "my-git"})
    }
  }
}




</script>

<style>

  #gitSlika{
    text-align: center;
  }


  .jumbotron{

    border-radius: 20px !important;
    border: black 1px solid !important;

  }



</style>
