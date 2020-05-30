<template>
    <div class="container" id="kontejner">

        <h3 id="naslov" >Dobrodosao na stranicu za podrsku, kako Vam mozemo pomoci?</h3>
        <hr>
        <br>

        <div class="row justify-content-center inline">
            <button class="btn inline btn-outline-primary mr-2 ml-2 dugmad col-12 col-md-5"> Nece da se skine repozitorijum </button>

            <button class="btn inline btn-outline-primary mr-2 ml-2 dugmad col-12 col-md-5"> Mnogo se sporo ucitava sve</button>

            <button class="btn inline btn-outline-primary mr-2 ml-2 dugmad col-12 col-md-5"> Nikako da krene </button>

            <button class="btn inline btn-outline-primary mr-2 ml-2 dugmad col-12 col-md-5"> Gde se nalazite</button>
        </div>



        <input class="form-control " id="search"  placeholder="Search for issue" aria-label="Search" style="text-align: center">


        <button class="btn btn-outline-primary my-2 my-sm-2 px-lg-5"  id="searchBtn" type="submit">Search</button>




    </div>
</template>

<script>
	export default {
		name: "support"
	}
</script>

<style scoped>

    #okvirInputa{

    }

    #search{
        margin-bottom: 30px;
        margin-top: 40px;
    }


    .dugmad{
        margin-top: 20px;
        min-height: 60px;
    }
    #kontejner{
        padding: 50px;
        text-align: center;
    }

</style>