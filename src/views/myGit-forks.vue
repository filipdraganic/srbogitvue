<template>
    <div  style="height: 400px; width: 100%">
        <ul class="list-group my-custom-scrollbar" id="listgrupa">
            <li class="list-group-item">Request #86 by Mihajlo Karamazon <a class="btn btn-outline-success dugmic ml-2" style="float: right">Approve fork</a> <a class="btn btn-outline-danger dugmic" style="float: right">Disapprove fork</a></li>
            <li class="list-group-item">Request #73 by Vukota Miraz in <a class="btn btn-outline-success dugmic ml-2" style="float: right">Approve fork</a> <a class="btn btn-outline-danger dugmic" style="float: right">Disapprove fork</a></li>
            <li class="list-group-item">Request #67 by Gregor Orfelin <a class="btn btn-outline-success dugmic ml-2" style="float: right">Approve fork</a> <a class="btn btn-outline-danger dugmic" style="float: right">Disapprove fork</a></li>
            <li class="list-group-item">Request #52 by Delibata Milonic <a class="btn btn-outline-success dugmic ml-2" style="float: right">Approve fork</a> <a class="btn btn-outline-danger dugmic" style="float: right">Disapprove fork</a></li>
            <li class="list-group-item">Request #1 by Dzems Kilibari <a class="btn btn-outline-success dugmic ml-2" style="float: right">Approve fork</a> <a class="btn btn-outline-danger dugmic" style="float: right">Disapprove fork</a></li>

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