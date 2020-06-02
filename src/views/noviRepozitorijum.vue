<template>
    <div>

        <div class="" style="height: 100%;  background: #fff; ">
            <div class=" " style=" position: fixed; right: 0; left: 0; top: 60px; bottom: 0;">
                <div class="container-fluid row " style="height: 100%; margin: 0; padding:0;">
                    <div class=" col-lg-2 col-md-2 col-0  d-none d-md-block" style="padding: 0; border-radius: 0 !important; border-right: grey 2px solid; height: auto !important;  background:white">
                        <div class="btn-group-vertical" style="width: 100%;height: 100%; border: none; border-right: grey 1px solid; ">
                            <button class="dugmici btn btn-outline-primary" v-on:click="$router.push({name:'beogradNaVodi'})" id="btn1"> Beograd na vodi </button>
                            <button class="dugmici btn btn-outline-primary">Autoput Milos Veliki</button>
                            <button class="dugmici btn btn-outline-primary">Brojevi Nbg blokova</button>
                            <button class="dugmici btn btn-outline-primary">Robna kuca Temerin</button>
                            <button class="dugmici btn btn-outline-primary active">Novi repozitorijum</button>

                            <div style="margin: auto"></div>

                            <button class="dugmici btn btn-outline-success" style="" v-on:click="$router.push({name:'noviRepozitorijum'})"><i class="fas fa-plus"/> Create new Repository</button>


                        </div>

                    </div>

                    <div class="col-12 col-lg-10 col-md-10 col-sm-12" style="overflow-y: scroll">

                        <!--            Git koji treba da se pokaze na kompu-->
                        <div class="row" style="margin-left: auto; margin-top: auto; margin-bottom: auto">

                            <h2 style="margin-right: 10px">Novi repozitorijum</h2>
                            <i class="fas fa-lock" style="margin-top: auto; margin-bottom: auto;"/>
                            <a class="btn btn-outline-primary" v-on:click="$router.push({name:'settings'})" style="margin: auto 0 auto auto; float: right"> <i class="fas fa-cogs"></i> Settings </a>

                            <a class="btn btn-outline-primary ml-1" style="margin:auto 0 auto auto"><i class="fas fa-download" style="margin-right: 4px"/>Download repository</a>

                        </div>
                        <hr>


                        <div style="border: black 2px solid; border-radius: 5px; padding: 5px ">
                                    <textarea class="ml-3" disabled name="Wiki" id="overviewTA" cols="" rows="10" style="box-sizing: border-box; width: 96%; height: 100%; border: 0; background: white ">

                                    </textarea>

                            <a v-on:click="editOverviewTextArea" class="btn-outline-success btn" id="editOverviewBtn">
                                <i class="fas fa-pen" id="penOverviewIcon"/>
                                <span id="editOverviewBtntxt"> Edit</span>
                            </a>

                        </div>
                        <br><br>

                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="wiki-tab" data-toggle="tab" href="#wiki" role="tab" aria-controls="home" aria-selected="true">Wiki</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="files-tab" data-toggle="tab" href="#files" role="tab" aria-controls="profile" aria-selected="false">Files</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="issues-tab" data-toggle="tab" href="#issues" role="tab" aria-controls="contact" aria-selected="false">Issues</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="forks-tab" data-toggle="tab" href="#forks" role="tab" aria-controls="forks" aria-selected="true">Forks</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="tasks-tab" data-toggle="tab" href="#tasks" role="tab" aria-controls="tasks" aria-selected="false">Tasks</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="revisions-tab" data-toggle="tab" href="#revisions" role="tab" aria-controls="revisions" aria-selected="false">Revisions</a>
                            </li>
                        </ul>

                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="wiki" role="tabpanel" aria-labelledby="home-tab" style="border-radius: 0 10px 10px 10px;">
                                <div class=" ">
                                        <textarea class="ml-3" disabled name="Wiki" id="wikiTA" cols="" rows="10" style="box-sizing: border-box; width: 96%; height: 100%; border: 0; background: white ">
                                       </textarea>
                                    <br>
                                    <a v-on:click="editWikiTextArea" class="btn-outline-success btn" id=""><i
                                            class="fas fa-pen" id="penIcon"/>  <span id="editBtn"> Edit</span></a>

                                </div>

                            </div>

                            <div class="tab-pane fade " id="files" role="tabpanel" aria-labelledby="profile-tab">
                                <div style="height: 400px; overflow-y: scroll; " >
                                    <div class="row justify-content-start justify-content-lg-center ml-2  " id="mainMenu" style="">
                                        <button class="btn btn-outline-primary m-2" > Create new item</button>
                                        <button class="btn btn-outline-success m-2" data-toggle="modal" data-target="#uploadModal"> Upload file</button>
                                        <button class="btn btn-outline-warning m-2"> Rename item</button>
                                        <button class="btn btn-outline-danger m-2"> Delete items</button>

                                        <div class="row m-2" style="">
                                            <input class="form-control col-8" style="margin-top: auto; margin-bottom: auto" type="search" placeholder="Search" aria-label="Search">
                                            <button class="btn btn-outline-success col-3 my-2 ml-2" id="searchBtn">Search</button>
                                        </div>
                                    </div>

                                    <div class="row justify-content-center" id="deleteMenu" hidden>
                                        <button class="btn btn-outline-danger m-2" v-on:click="deleteItems"> Delete items</button>

                                    </div>

                                    <div class="row justify-content-center" id="renameMenu" hidden>
                                        <button class="btn btn-outline-warning m-2" v-on:click="renameItems"> Rename items</button>

                                    </div>

                                    <div class="row justify-content-center" id="createItemMenu" hidden>
                                        <button class="btn btn-outline-danger" v-on:click="cancelCreateItem"> Cancel</button>

                                    </div>


                                    <hr>

                                    <div class="" id="mainTable"  >

                                        <table class="table table-bordered table-striped mb-0" style="overflow: scroll" >
                                            <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Ime projekta</th>
                                                <th scope="col">Starost</th>
                                                <th scope="col">Type</th>
                                            </tr>
                                            </thead>
                                            <tbody>

                                            </tbody>
                                        </table>
                                    </div>

                                    <div class="" id="deleteTable" hidden>

                                        <table class="table table-bordered table-striped mb-0">
                                            <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Ime projekta</th>
                                                <th scope="col">Starost</th>
                                                <th scope="col">Type</th>
                                                <th scope="col">Delete?</th>

                                            </tr>
                                            </thead>
                                            <tbody></tbody>
                                        </table>
                                    </div>

                                    <div class="" id="renameTable" hidden >

                                        <table class="table table-bordered table-striped mb-0">
                                            <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Ime projekta</th>
                                                <th scope="col">Starost</th>
                                                <th scope="col">Type</th>
                                            </tr>
                                            </thead>
                                            <tbody>

                                            </tbody>
                                        </table>
                                    </div>

                                    <div id="createItemView" hidden>
                                        <div class="row container justify-content-center">
                                            <h4 class="" style="margin-top: auto; margin-bottom: auto; margin-right: 10px">File name</h4>
                                            <form class="" style="margin-bottom: auto; margin-top: auto">

                                                <input  type="text" id="imeFajla" placeholder="filename.py" style="margin-top: 10px" required >
                                                <button class="btn btn-outline-primary m-2" v-on:click="createItem" type="submit" style="float:right; margin-left: auto"> Create item</button>
                                            </form>

                                        </div>
                                        <hr>

                                        <div class="container table-wrapper-scroll-y my-custom-scrollbar " style="width: 100%; height: 100%; box-sizing: border-box;">
                                            <textarea name="newItemTA" id="newItemTA" cols="" rows="" style="width: 100%; height: 100%; box-sizing: border-box;"></textarea>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="tab-pane fade " id="issues" role="tabpanel" aria-labelledby="contact-tab">

                                <div class="" style="max-width: 100%; padding: 0 ">
                                    <ul class="nav nav-tabs" id="myTab1" role="tablist">
                                        <li class="nav-item">
                                            <a class="nav-link active" id="opened-tab" data-toggle="tab" href="#opened" role="tab" aria-controls="opened" aria-selected="true" style="border-bottom: white 2px solid">Opened</a>
                                        </li>
                                        <li class="nav-item" >
                                            <a class="nav-link" id="closed-tab" data-toggle="tab" href="#closed" role="tab" aria-controls="closed" aria-selected="false" style="border-bottom: white 4px solid">Closed</a>
                                        </li>
                                    </ul>

                                    <div class="tab-content" id="myTabContent1" style="width: 100%; ">
                                        <div class="tab-pane fade show active  "  id="opened" role="tabpanel" aria-labelledby="open-tab" style="width: 100%"></div>
                                        <div class="tab-pane fade show my-custom-scrollbar" id="closed" role="tabpanel" aria-labelledby="close-tab"></div>



                                    </div>
                                </div>


                            </div>
                            <div class="tab-pane fade " id="forks" role="tabpanel" aria-labelledby="forks-tab" style="padding:0">

                            </div>
                            <div class="tab-pane fade" id="tasks" role="tabpanel" aria-labelledby="tasks-tab">
                                <div  style="height: 400px; overflow: scroll" class="justify-content-lg-center justify-content-center">

                                    <div class="row m-2" id="mainMenu1" style="">
                                        <button class="btn btn-outline-primary m-2 col-11 col-lg-3" data-toggle="modal" data-target="#newTaskModal"> Create new Task</button>

                                        <div class="row m-2" style="">

                                            <input class="form-control col-8 col-lg-8" style="margin-top: auto; margin-bottom: auto" type="search" placeholder="Search" aria-label="Search">
                                            <button class="btn btn-outline-success ml-2 col-3 col-lg-3" id="searchBtn1" >Search</button>
                                        </div>
                                    </div>

                                    <hr>


                                </div>
                            </div>
                            <div class="tab-pane fade" id="revisions" role="tabpanel" aria-labelledby="revisions-tab">

                            </div>

                        </div>



                    </div>

                </div>

            </div>


        </div>



        <div id="uploadModal" class="modal fade" role="dialog" aria-labelledby="myModalLabel"
             aria-hidden="true">
            <div class="modal-dialog">

                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header">

                        <h4 class="modal-title">File upload form</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <!-- Form -->
                        <form >
                            Select file : <input type='file' name='file' id='file' class='form-control' ><br>
                            <input type='button' class='btn btn-info' value='Upload' id='btn_upload'>
                        </form>
                    </div>

                </div>

            </div>
        </div>

        <div class="modal fade" id="newTaskModal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 style="text-align: center">New Task</h3>

                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body text-center">
                        <!-- Form -->
                        <div class="row container">

                            <h4 class="col-6">Task name:</h4>
                            <input class="col-6" type="text" placeholder="Task name">
                        </div>

                        <br>

                        <div class="row container">
                            <h4 class="col-6">Assigned to</h4>
                            <i class="fa fa-users fa-2x dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="background: white"></i>
                            <div class="dropdown-menu " aria-labelledby="dropdownMenu2">
                                <ul class="list-group my-custom-scrollbar table-wrapper-scroll-y" style="max-width: 200px">
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

                                <div class="dropdown-divider "></div>
                                <div class="container justify-content-center">

                                    <a class=" col-12 btn btn-success" data-toggle="modal" data-target="#addUserToTask">Add new user</a>
                                </div>
                            </div>
                        </div>
                        <br>

                        <div class="row container mb-1">
                            <h4 class="col-6">Pocetni rok</h4>
                            <input type="date">
                        </div>

                        <div class="row container">
                            <h4 class="col-6">Krajnji rok</h4>
                            <input type="date">
                        </div>

                        <br>
                        <div class="container">
                            <h4>Tekst taska</h4>
                            <textarea name="taskTA" id="taskTA" cols="" rows="" style="width: 100%; height: 100%"></textarea>
                        </div>
                        <br>
                        <div class="container">
                            <button class="btn btn-outline-success" data-dismiss="modal">Create task</button>
                        </div>
                    </div>

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

        <div class="modal fade" id="editTaskModal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 style="text-align: center">Edit task</h3>

                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body text-center">
                        <!-- Form -->
                        <div class="row container">

                            <h4 class="col-6">Task name:</h4>
                            <input class="col-6" type="text" placeholder="Trenutno ime taska">
                        </div>

                        <br>

                        <div class="row container justify-content-start">
                            <h4 class="col-6">Assigned to</h4>
                            <i class="fa fa-users fa-2x dropdown-toggle col-6" type="button" id="dropdownMenu"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                               style="background: white"/>
                            <div class="dropdown-menu " aria-labelledby="dropdownMenu">
                                <ul class="list-group my-custom-scrollbar table-wrapper-scroll-y" style="max-width: 200px">
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

                                <div class="dropdown-divider "></div>
                                <div class="container justify-content-center">

                                    <a class=" col-12 btn btn-success" data-toggle="modal" data-target="#addUserToTask">Add new user</a>
                                </div>
                            </div>
                        </div>
                        <br>

                        <div class="row container mb-1 justify-content-start">
                            <h4 class="mr-2 col-6">Pocetni rok  </h4>
                            <input type="date">
                        </div>

                        <div class="row container justify-content-start">
                            <h4 class="mr-2 col-6">Krajnji rok</h4>
                            <input type="date">
                        </div>

                        <br>
                        <div class="container">
                            <h4>Tekst taska</h4>
                            <textarea name="taskTA" id="editTaskTA" cols="" rows="" style="width: 100%; height: 100%"></textarea>
                        </div>
                        <br>
                        <div class="container">
                            <button class="btn btn-outline-success" data-dismiss="modal">Save changes task</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>





    </div>
</template>

<script>
	import MyGitRevisions from "./myGit-revisions";
	import MyGitTasks from "./myGit-tasks";
	import MyGitForks from "./myGit-forks";
	import MyGitIssues from "./myGit-issues";
	export default {
		name: "noviRepozitorijum",
        components: {MyGitIssues, MyGitForks, MyGitTasks, MyGitRevisions},
		methods:{
			editWikiTextArea: function(){
				console.log("Pokusaj edita")
				const textarea = document.getElementById("wikiTA")
				const dugme = document.getElementById("editBtn")
				const penIcon = document.getElementById("penIcon")

				if(textarea.hasAttribute("disabled")){
					textarea.disabled = false
					dugme.textContent = "Done"
					penIcon.classList = "fas fa-check"
				}else{
					textarea.disabled = true
					dugme.textContent = "Edit"
					penIcon.classList = "fas fa-pen"
				}


			},
			editOverviewTextArea: function(){
				console.log("Pokusaj edita")
				const textarea = document.getElementById("overviewTA")
				const dugme = document.getElementById("editOverviewBtntxt")
				const penIcon = document.getElementById("penOverviewIcon")

				console.log(penIcon)

				if(textarea.hasAttribute("disabled")){
					textarea.disabled = false
					penIcon.classList = "fas fa-check"
					dugme.innerText = " Done"
				}else{
					textarea.disabled = true
					penIcon.classList = "fas fa-pen"
					dugme.innerText = " Edit"
				}


			},

			pickDate: function(){
				$('.datepicker').datepicker();
			}
		}
	}
</script>

<style scoped>
    .dugmici{
        max-height: 80px;

    }



    .dugmici.active{
        background: #007bff !important;
    }
    #myTabContent{
        height: 100%;
        background: white !important;
        margin-bottom: auto;
    }
    .tab-pane{
        min-height: 300px;
        padding: 5px;
        background: white !important;
        color: black !important;
        border: black 2px solid ;
    }
    .nav-link.active{
        background: white !important;
        border-radius: 10px 10px 0 0  !important;
        color: #007bff !important;
        border: black 2px solid !important;
        border-bottom: white 2px solid !important;

    }
    .my-custom-scrollbar {
        position: relative;
        overflow: scroll;
    }
    .table-wrapper-scroll-y {
    }
</style>