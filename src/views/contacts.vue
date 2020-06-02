<template>
    <div class="container" style="text-align: center">
        <h3>Contacts</h3>
        <div class="row justify-content-center">

            <ul  class="col-10 myUL">
                <li><a v-on:click="idiNaProfil()" style="text-align: left"><i class="fas fa-star" style="color: yellow"></i> Zdeslav Popovic</a></li>
                <li><a v-on:click="idiNaProfil()" style="text-align: left"><i class="fas fa-star" style="color: yellow"></i> Vasko Mijatovic</a></li>
                <li><a v-on:click="idiNaProfil()" style="text-align: left"><i class="fas fa-star" style="color: yellow"></i> Sredoje Simic</a></li>
                <li><a v-on:click="idiNaProfil()" style="text-align: left"><i class="far fa-star" ></i> Dragisa Darkovic</a></li>
                <li><a v-on:click="idiNaProfil()" style="text-align: left"><i class="far fa-star" ></i> Marinko Dapcevic</a></li>
                <li><a v-on:click="idiNaProfil()" style="text-align: left"><i class="far fa-star" ></i> David Pejic</a></li>
                <li><a v-on:click="idiNaProfil()" style="text-align: left"><i class="far fa-star" ></i> Nikola Obradovic</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
	export default {
		name: "contacts",
        methods:{

            idiNaProfil: function () {
                this.$router.push({path: "vaskoMijatovicProfil"})

            }
        }
	}
</script>

<style scoped>
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
</style>