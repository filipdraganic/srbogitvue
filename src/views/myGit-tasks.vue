<template>
    <div  style="height: 400px; overflow: scroll" class="justify-content-lg-center justify-content-center">

        <div class="row m-2" id="mainMenu" style="">
            <button class="btn btn-outline-primary m-2 col-11 col-lg-3" data-toggle="modal" data-target="#newTaskModal"> Create new Task</button>

            <div class="row m-2" style="">

                <input class="form-control col-8 col-lg-8" style="margin-top: auto; margin-bottom: auto" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success ml-2 col-3 col-lg-3" id="searchBtn" >Search</button>
            </div>
        </div>

        <div>
            <ul class="list-group my-custom-scrollbar" id="listgrupa">
                <li class="list-group-item">Task #82 Popraviti lift <a class="btn btn-outline-success dugmic ml-5" style="float: right" data-toggle="modal" data-target="#editTaskModal"><i
                        class="fas fa-tasks"/>  View details</a> </li>

                <li class="list-group-item">Task #72 Nauciti kako se popravlja lift <a class="btn btn-outline-success dugmic ml-5" style="float: right" data-toggle="modal" data-target="#editTaskModal"><i
                        class="fas fa-tasks"/>  View details</a></li>

                <li class="list-group-item">Task #42 Zavrsiti seriju <a class="btn btn-outline-success dugmic ml-5" style="float: right" data-toggle="modal" data-target="#editTaskModal"><i
                        class="fas fa-tasks"/>  View details</a> </li>

                <li class="list-group-item">Task #29 Skuvati rucak <a class="btn btn-outline-success dugmic ml-5" style="float: right" data-toggle="modal" data-target="#editTaskModal"><i
                        class="fas fa-tasks"/>  View details</a>
                </li>

                <li class="list-group-item">Task #25 Kupiti luk <a class="btn btn-outline-success dugmic ml-5" style="float: right" data-toggle="modal" data-target="#editTaskModal"><i
                        class="fas fa-tasks"/>  View details</a>
                </li>
            </ul>
        </div>



    </div>
</template>

<script>
    export default {
        name: "myGit-tasks"
    }
</script>

<style scoped>

</style>