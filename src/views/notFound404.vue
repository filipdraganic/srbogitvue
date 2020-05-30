<template>
    <div id="sve">
        <h1 id="tekst" class="font-weight-bold ">Dodji mi na 404</h1>

        <img id="slika" src="../assets/deliblatskapescara.png" alt="">

    </div>

</template>

<script>
	export default {
		name: "404"
	}
</script>

<style scoped>

    #sve{
        text-align: center;
        margin: auto;
        height: 100%;
        width: 100%;
    }
    #slika{
        object-fit: fill;
        height: 100%;
        width: 100%;
    }
    #tekst{
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

</style>