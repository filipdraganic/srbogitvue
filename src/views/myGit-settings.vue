<template>
    <div class="justify-content-center container-fluid">
        <div class="row m-2">
            <a class="btn btn-outline-primary" v-on:click="$router.push({name:'myGit'})" style="float: left"> <i class="fas fa-arrow-left"></i> Nazad!</a>

        </div>
        <br>
        <div class="row">
            <h2 style="margin-left: auto; margin-right: auto; text-align: center">Settings</h2>

        </div>
        <hr>
        <br>
        <div class="text-center">
            <h3>Ime repozitorijuma</h3>
            <input class="form-control" type="search" placeholder="Beograd na vodi" style="max-width: 300px; margin-right: auto; margin-left: auto;">
            <button class="btn btn-primary m-2" style="margin-bottom: auto; margin-top: auto">Primeni</button>
        </div>

        <br>
        <hr>
        <br>

        <div class="text-center ">
            <h3>Current contributors</h3>
            <div class="justify-content-center" style="max-width: 300px; padding: 0 !important; margin-right: auto; margin-left: auto">
                <ul class="list-group my-custom-scrollbar table-wrapper-scroll-y" style="max-width: 300px">
                    <li class="list-group-item " style="">
                        <div class="row justify-content-between">
                            <span class="col-10">Vasko Mijatovic</span>
                            <button class="col-2 close" type="button" >&times;</button>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="row justify-content-between">
                            <span class="col-10">Dragutin Manijak</span>
                            <button class="col-2 close" type="button" >&times;</button>

                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="row justify-content-between">
                            <span class="col-10">Eros Peroti</span>
                            <button class="col-2 close" type="button" >&times;</button>

                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="row justify-content-between">
                            <span class="col-10">Neki tamo lik</span>
                            <button class="col-2 close" type="button" >&times;</button>

                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="row justify-content-between">
                            <span class="col-10">Jeff</span>
                            <button class="col-2 close" type="button" >&times;</button>
                        </div>
                    </li>
                </ul>

                <div class="mt-1 justify-content-center">

                    <a class=" col-12 btn btn-success" data-toggle="modal" data-target="#addUserToTask">Add new user</a>
                </div>
            </div>
        </div>



        <div id="addUserToTask" class="modal fade" role="dialog" aria-labelledby="myModalLabel"
             aria-hidden="true">
            <div class="modal-dialog">

                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header">

                        <h4 class="modal-title">Add new user</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <!-- Form -->
                        <ul class="list-group my-custom-scrollbar table-wrapper-scroll-y" >

                            <a href="#" class="list-group-item list-group-item-action close" data-dismiss="modal">Dapibus ac facilisis in</a>
                            <a href="#" class="list-group-item list-group-item-action close" data-dismiss="modal">Morbi leo risus</a>
                            <a href="#" class="list-group-item list-group-item-action close" data-dismiss="modal">Porta ac consectetur ac</a>
                            <a href="#" class="list-group-item list-group-item-action close" data-dismiss="modal">Vestibulum at eros</a>
                            <a href="#" class="list-group-item list-group-item-action close" data-dismiss="modal">Dapibus ac facilisis in</a>
                            <a href="#" class="list-group-item list-group-item-action close" data-dismiss="modal">Morbi leo risus</a>
                            <a href="#" class="list-group-item list-group-item-action close" data-dismiss="modal">Porta ac consectetur ac</a>
                            <a href="#" class="list-group-item list-group-item-action close" data-dismiss="modal">Vestibulum at eros</a>

                        </ul>
                    </div>

                </div>

            </div>
        </div>

        <hr style="background: red">
        <br>

        <div class="jumbotron" style="background: white; border: red 2px solid !important; margin-right: auto;
        margin-left: auto; max-width: 300px; text-align: center; padding: 10px">

            <h2> Opasno po zivot </h2>

            <button class="btn btn-danger mt-3 container-fluid"><i class="fas fa-trash"></i> Delete Repository</button>
            <br>
            <button class="btn btn-danger mt-2 container-fluid"><i class="fas fa-crown"></i> Transfer Ownership</button>
            <br>
            <button class="btn btn-danger mt-2 container-fluid"><i class="fas fa-archive"></i> Archive </button>
            <br>
            <button class="btn btn-danger mt-2 container-fluid"><i class="fas fa-globe"></i> Make public </button>

        </div>

    </div>
</template>

<script>
    export default {
        name: "myGit-settings"
    }
</script>

<style scoped>

</style>