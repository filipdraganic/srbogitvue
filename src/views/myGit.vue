<template>

    <div class="container-fluid row">
        <div class="jumbotron col-3 d-none d-md-block">
            <div class="btn-group-vertical">
                <button class="btn btn-outline-primary active"> Beograd na vodi </button>
                <button class="btn btn-outline-primary">Autoput Milos Veliki</button>
                <button class="btn btn-outline-primary">Brojevi Nbg blokova</button>
                <button class="btn btn-outline-primary">Robna kuca Temerin</button>

            </div>
        </div>

    </div>
</template>

<script>
	import headerLoggedOut from "./headerLoggedOut";

	export default {
		name: "myGit",

        created() {
			headerLoggedOut.methods.setActiveBtn("btn5")
		}


	}

</script>

<style scoped>

</style>