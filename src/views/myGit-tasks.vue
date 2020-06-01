<template>
    <div  style="height: 400px; width: 100%">

        <div class="row ml-1" id="mainMenu" style="">
            <button class="btn btn-outline-primary m-2 col-3" data-toggle="modal" data-target="#newTaskModal"> Create new Task</button>

            <div class="row mr-1" style="margin-left: auto">

                <input class="form-control col-8" style="margin-top: auto; margin-bottom: auto" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 ml-1 col-3" id="searchBtn" >Search</button>
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