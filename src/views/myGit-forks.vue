<template>
    <div  style="height: 400px; width: 100%">
        <ul class="list-group my-custom-scrollbar" id="listgrupa">
            <li class="list-group-item">Cras justo odio <a class="btn btn-outline-success dugmic">Approve fork</a> <a class="btn btn-outline-danger dugmic">Disapprove fork</a></li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Morbi leo risus</li>
            <li class="list-group-item">Porta ac consectetur ac</li>
            <li class="list-group-item">Vestibulum at eros</li>

        </ul>
    </div>

</template>

<script>
	export default {
		name: "myGit-forks"
	}
</script>

<style scoped>
    .dugmic{
        margin-left: auto;
    }

    .my-custom-scrollbar {
        position: relative;
        height: 200px;
        overflow: auto;
        width: 100%;
    }

    #listgrupa{
        height: 100%;
    }
</style>