 <template class="" style="height: 100%">
 <div>

    <div class="" style="  background: #fff; ">
        <div class="d-none d-md-block " style=" position: fixed; right: 0; left: 0; top: 50px; bottom: 0;">
            <div class="container-fluid row " style="height: 100%; margin-bottom:-50px">
                <div class=" col-2" style="padding: 0; border-radius: 0 !important; height: 100%; margin-bottom:auto; background:white">
                    <div class="btn-group-vertical" style="width: 100%;height: 100%; border: none; border-right: grey 2px solid; ">
                        <button class="dugmici btn btn-outline-primary active" v-on:click="$router.push({name:'beogradNaVodi'})" id="btn1"> Beograd na vodi </button>
                        <button class="dugmici btn btn-outline-primary">Autoput Milos Veliki</button>
                        <button class="dugmici btn btn-outline-primary">Brojevi Nbg blokova</button>
                        <button class="dugmici btn btn-outline-primary">Robna kuca Temerin</button>

                        <div style="margin: auto"></div>

                        <button class="dugmici btn btn-outline-success" style=""><i class="fas fa-plus"/> Create new Repository</button>


                    </div>

                </div>

                <div class="col-10">


                    <!--            Git koji treba da se pokaze na kompu-->
                    <div class="row" style="margin-left: auto; margin-top: auto; margin-bottom: auto">

                        <h2 style="margin-right: 10px">Beograd na vodi</h2>
                        <i class="fas fa-lock" style="margin-top: auto; margin-bottom: auto;"/>

                        <a class="btn btn-outline-primary" style="margin:auto 30px 0 auto"><i class="fas fa-download" style="margin-right: 4px"/>Download repository</a>

                    </div>
                    <hr>
                    <p style="border: black 2px solid; border-radius: 5px; padding: 5px">Belgrade Waterfront, known in Serbian as
                        Belgrade on Water (Београд на води / Beograd
                        na vodi), is an urban renewal development
                        project headed by the Government of Serbia
                        aimed at improving Belgrade's cityscape and
                        economy by revitalizing the Sava amphitheater,
                        a neglected stretch of land on the right bank of
                        the Sava river, between the Belgrade Fair and
                        Branko's bridge. It was started in 2014 with the
                        reconstruction of the Belgrade Cooperative
                        building, which was finished in June of the same
                        year. It is the second largest mixed use complex</p>

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
                        <div class="tab-pane fade show active" id="wiki" role="tabpanel" aria-labelledby="home-tab">
                            <div class=" ">
                                        <textarea class="ml-3" disabled name="Wiki" id="wikiTA" cols="" rows="10" style="box-sizing: border-box; width: 96%; height: 100%; border: 0; background: white ">
                                        Belgrade on Water (Београд на води / Beograd
                                        na vodi), is an urban renewal development
                                        project headed by the Government of Serbia
                                        aimed at improving Belgrade's cityscape and
                                        economy by revitalizing the Sava amphitheater,
                                        a neglected stretch of land on the right bank of
                                        the Sava river, between the Belgrade Fair and
                                        Branko's bridge. It was started in 2014 with the
                                        reconstruction of the Belgrade Cooperative
                                        building, which was finished in June of the same
                                        year. It is the second largest mixed use complex</textarea>
                                <br>
                                <a v-on:click="editWikiTextArea" class="btn-outline-success btn" id=""><i
                                        class="fas fa-pen" id="penIcon"/>  <span id="editBtn"> Edit</span></a>

                            </div>

                        </div>

                        <div class="tab-pane fade " id="files" role="tabpanel" aria-labelledby="profile-tab">
                            <my-git-files></my-git-files>
                        </div>
                        <div class="tab-pane fade " id="issues" role="tabpanel" aria-labelledby="contact-tab">
                            <my-git-issues></my-git-issues>
                        </div>
                        <div class="tab-pane fade " id="forks" role="tabpanel" aria-labelledby="forks-tab" style="padding:0">
                            <my-git-forks></my-git-forks>
                        </div>
                        <div class="tab-pane fade" id="tasks" role="tabpanel" aria-labelledby="tasks-tab">
                            <my-git-tasks></my-git-tasks>
                        </div>
                        <div class="tab-pane fade" id="revisions" role="tabpanel" aria-labelledby="revisions-tab">
                            <my-git-revisions></my-git-revisions>
                        </div>

                    </div>




                </div>

            </div>

        </div>
    </div>
     <div class="d-md-none">
             <div class="mt-1" style="padding: 0; border-radius: 0 !important; height: 100%; min-height: 500px; margin-bottom:auto; background:white">
                 <div class="btn-group-vertical" style="width: 100%; ">
                     <button class="dugmad btn btn-outline-primary" v-on:click="$router.push({name:'beogradNaVodi'})"> Beograd na vodi </button>
                     <button class="dugmad btn btn-outline-primary">Autoput Milos Veliki</button>
                     <button class="dugmad btn btn-outline-primary">Brojevi Nbg blokova</button>
                     <button class="dugmad btn btn-outline-primary">Robna kuca Temerin</button>


                     <div style="margin: auto"></div>

                     <button class="dugmici btn btn-outline-success" style=""><i class="fas fa-plus"></i> Create new Repository</button>

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

                     <div class="row container">
                         <h4 class="col-6">Assigned to</h4>
                         <i class="fa fa-users fa-2x dropdown-toggle" type="button" id="dropdownMenu"
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
<!--    <div>-->
<!--        <div class=" d-none d-md-block">-->
<!--            <div class="row container-fluid " style="height: 100%">-->
<!--            <div class="col-3 btn-group-vertical" style="padding: 0; height: 100%; border: black 1px solid !important; ">-->
<!--                <button class="dugmad btn btn-outline-primary active"> Beograd na vodi </button>-->
<!--                <button class="dugmad btn btn-outline-primary">Autoput Milos Veliki</button>-->
<!--                <button class="dugmad btn btn-outline-primary">Brojevi Nbg blokova</button>-->
<!--                <button class="dugmad btn btn-outline-primary">Robna kuca Temerin</button>-->

<!--                <button class="dugmad btn btn-outline-primary" style="margin-top: 100%">Create new Repository</button>-->


<!--                </div>-->
<!--                <div class="col-3">-->
<!--                    <button class="btn">Nesto drugo</button>-->
<!--                </div>-->
<!--                <div class="col-3">-->
<!--                    <button class="btn"> Nesto</button>-->
<!--                </div>-->
<!--                <div class="col-3">-->
<!--                    <button class="btn">Nesto drugo</button>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
</template>

<script>
	import headerLoggedOut from "./headerLoggedOut";
	import MyGitFiles from "./myGit-files";
	import MyGitIssues from "./myGit-issues";
	import MyGitForks from "./myGit-forks";
    import MyGitRevisions from "./myGit-revisions";
    import MyGitTasks from "./myGit-tasks";
    import BeogradNaVodi from "./beogradNaVodi";

	export default {
		name: "myGit",
		components: {BeogradNaVodi, MyGitTasks, MyGitRevisions, MyGitForks, MyGitIssues, MyGitFiles},
		created() {
			headerLoggedOut.methods.setActiveBtn("btn5")
		},

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
        border-radius: 0 10px 10px 10px;
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
         height: 200px;
         overflow: auto;
     }
    .table-wrapper-scroll-y {
        display: block;
    }

</style>