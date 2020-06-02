<template>
    <div  style="height: 400px; width: 100%">
        <ul class="list-group my-custom-scrollbar" id="listgrupa" style="overflow: auto">
            <li class="list-group-item row">
                <span class="col-lg-6">Request #86 by Mihajlo Karamazon</span>
                <a class="btn btn-outline-success dugmic mb-2 ml-lg-2 col-lg-3" style="float: right"><i class="fas fa-code-branch"/>  Approve fork</a>
                <a class="btn btn-outline-danger dugmic col-lg-3" style="float: right"><i class="fas fa-times-circle"/>  Disapprove fork</a>
            </li>
            <li class="list-group-item row">
                <span class="col-lg-6">Request #73 by Vukota Miraz</span>
                <a class="btn btn-outline-success dugmic mb-2 ml-lg-2 col-lg-3" style="float: right"><i class="fas fa-code-branch"/>  Approve fork</a>
                <a class="btn btn-outline-danger dugmic col-lg-3" style="float: right"><i class="fas fa-times-circle"/>  Disapprove fork</a>
            </li>
            <li class="list-group-item row">
                <span class="col-lg-6">Request #67 by Gregor Orfelin</span>
                <a class="btn btn-outline-success dugmic mb-2 ml-lg-2 col-lg-3" style="float: right"><i class="fas fa-code-branch"/>  Approve fork</a>
                <a class="btn btn-outline-danger dugmic col-lg-3" style="float: right"><i class="fas fa-times-circle"/>  Disapprove fork</a>
            </li>
            <li class="list-group-item row">
                <span class="col-lg-6">Request #52 by Delibata Milonic</span>
                <a class="btn btn-outline-success dugmic mb-2 ml-lg-2 col-lg-3" style="float: right"><i class="fas fa-code-branch"/>  Approve fork</a>
                <a class="btn btn-outline-danger dugmic col-lg-3" style="float: right"><i class="fas fa-times-circle"/>  Disapprove fork</a>
            </li>
            <li class="list-group-item row">
                <span class="col-lg-6">Request #1 by Dzems Kilibari</span>
                <a class="btn btn-outline-success dugmic mb-2 ml-lg-2 col-lg-3" style="float: right"><i class="fas fa-code-branch"/>  Approve fork</a>
                <a class="btn btn-outline-danger dugmic col-lg-3" style="float: right"><i class="fas fa-times-circle"/>  Disapprove fork</a>
            </li>
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