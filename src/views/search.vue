<template>

    <div class="container">

        <h3 style="margin: 20px; text-align: center">Search Results</h3>
        <hr>
        <div class="row justify-content-center" style="margin-top: 20px">

            <button class="inline btn btn-outline-primary dugmad " id="peopleBtn" v-on:click="peopleSelected(true)" @click="activeBtn = 'btn1'" :class="{active: activeBtn === 'btn1'}" style="min-width: 130px">People</button>
            <button class="inline btn btn-outline-primary dugmad" v-on:click="peopleSelected(false)" @click="activeBtn = 'btn2'" :class="{active: activeBtn === 'btn2'}" style="min-width: 130px">Repositories</button>

        </div>

        <div id="searchDiv">
            <!--            People search-->

            <div class="row justify-content-center" v-if="people">
                <input class="col-10 myInput" type="text"   placeholder="Search for names..">

            </div>

            <div class="row justify-content-center" v-else>
                <input class="col-10 myInput" type="text"   placeholder="Search for repositores..">

            </div>

            <div class="row justify-content-center" v-if="people">

                <ul  class="col-10 myUL">
                    <li><a v-on:click="idiNaProfil()">Zdeslav Popovic</a></li>
                    <li><a v-on:click="idiNaProfil()">Vasko Mijatovic</a></li>
                    <li><a v-on:click="idiNaProfil()">Sredoje Simic</a></li>
                    <li><a v-on:click="idiNaProfil()">Dragisa Darkovic</a></li>
                    <li><a v-on:click="idiNaProfil()">Marinko Dapcevic</a></li>
                    <li><a v-on:click="idiNaProfil()">David Pejic</a></li>
                    <li><a v-on:click="idiNaProfil()">Nikola Obradovic</a></li>
                </ul>
            </div>


            <!--            Repositories search-->



            <div class="row justify-content-center" v-else>

                <ul  class="col-10 myUL">
                    <li><a href="#">5G</a></li>
                    <li><a href="#">Chemtrails</a></li>
                    <li><a href="#">Korean Air Lines Flight 007</a></li>
                    <li><a href="#">New World Order</a></li>
                    <li><a href="#">Flat Earth</a></li>
                    <li><a href="#">Illuminati</a></li>
                    <li><a href="#">George Soros</a></li>
                </ul>
            </div>
        </div>

    </div>


</template>

<script>

    import $ from 'jquery'

	export default {
		name: "search",


		data() {
			return {
                people: true,
                activeBtn: 'btn1'
			}
		},
        methods:{
			peopleSelected: function (istina) {
                this.people = istina


			},
			idiNaProfil: function () {
				this.$router.push({path: "vaskoMijatovicProfil"})

			}
        }
	}
</script>

<style scoped>

     .active {
        background: #2196f3 !important;
    }

    .myInput {
        background-position: 10px 12px; /* Position the search icon */
        background-repeat: no-repeat; /* Do not repeat the icon image */
        width: 100%; /* Full-width */
        font-size: 16px; /* Increase font-size */
        padding: 12px 20px 12px 40px; /* Add some padding */
        border: 1px solid #ddd; /* Add a grey border */
        margin-bottom: 12px; /* Add some space below the input */
        margin-top: 20px;
    }
    .myUL {
        /* Remove default list styling */
        list-style-type: none;
        padding: 0;
        margin: 20px;

    }

    .myUL li a {
        border: 1px solid #ddd; /* Add a border to all links */
        margin-top: -1px; /* Prevent double borders */
        background-color: #f6f6f6; /* Grey background color */
        padding: 12px; /* Add some padding */
        text-decoration: none; /* Remove default text underline */
        font-size: 18px; /* Increase the font-size */
        color: black; /* Add a black text color */
        display: block; /* Make it into a block element to fill the whole list */
    }

    .myUL li a:hover:not(.header) {
        background-color: #eee; /* Add a hover effect to all links, except for headers */
    }
</style>