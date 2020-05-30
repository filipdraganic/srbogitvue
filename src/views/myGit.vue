<template>

    <div class="container">

        <h1>My Git</h1>
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