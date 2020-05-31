 <template class="" style="height: 100%">
    <div class="" style="  background: #fff; ">
        <div class="d-none d-md-block " style=" position: fixed; right: 0; left: 0; top: 50px; bottom: 0;">
            <div class="container-fluid row " style="height: 100%; margin-bottom:-50px">
                <div class=" col-2 " style="padding: 0; border-radius: 0 !important; height: 100%; margin-bottom:auto; background:white">
                    <div class="btn-group-vertical" style="width: 100%;height: 100%; border: none; border-right: grey 2px solid; ">
                        <button class="dugmici btn btn-outline-primary active" v-on:click="$router.push({name:'beogradNaVodi'})" id="btn1"> Beograd na vodi </button>
                        <button class="dugmici btn btn-outline-primary">Autoput Milos Veliki</button>
                        <button class="dugmici btn btn-outline-primary">Brojevi Nbg blokova</button>
                        <button class="dugmici btn btn-outline-primary">Robna kuca Temerin</button>

                        <div style="margin: auto"></div>

                        <button class="dugmici btn btn-outline-success" style=""><i class="fas fa-plus"></i> Create new Repository</button>


                    </div>

                </div>

                <div class="col-10">
                    <!--            Git koji treba da se pokaze na kompu-->
                    <div class="row" style="margin-left: auto; margin-top: auto; margin-bottom: auto">

                        <h2 style="margin-right: 10px">Beograd na vodi</h2>
                        <i class="fas fa-lock" style="margin-top: auto; margin-bottom: auto;"></i>

                        <a class="btn btn-outline-primary" style="margin:auto 30px 0 auto"><i class="fas fa-download" style="margin-right: 4px"></i>Download repository</a>

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
                            <a class="nav-link" id="ganttChart-tab" data-toggle="tab" href="#ganttChart" role="tab" aria-controls="ganttChart" aria-selected="false">Gantt chart</a>
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
                                <a v-on:click="editWikiTextArea" class="btn-outline-success btn" id=""><i class="fas fa-pen" id="penIcon"></i>  <span id="editBtn"> Edit</span></a>

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
                        <div class="tab-pane fade" id="ganttChart" role="tabpanel" aria-labelledby="ganttChart-tab">Belgrade on Water (Београд на води / Beograd
                            na vodi), is an urban renewal development
                            project headed by the Government of Serbia
                            aimed at improving Belgrade's cityscape and
                            economy by revitalizing the Sava amphitheater,
                            a neglected stretch of land on the right bank of
                            the Sava river, between the Belgrade Fair and
                            Branko's bridge. It was started in 2014 with the
                            reconstruction of the Belgrade Cooperative
                            building, which was finished in June of the same
                            year. It is the second largest mixed use complex</div>
                        <div class="tab-pane fade" id="revisions" role="tabpanel" aria-labelledby="revisions-tab">Belgrade on Water (Београд на води / Beograd
                            na vodi), is an urban renewal development
                            project headed by the Government of Serbia
                            aimed at improving Belgrade's cityscape and
                            economy by revitalizing the Sava amphitheater,
                            a neglected stretch of land on the right bank of
                            the Sava river, between the Belgrade Fair and
                            Branko's bridge. It was started in 2014 with the
                            reconstruction of the Belgrade Cooperative
                            building, which was finished in June of the same
                            year. It is the second largest mixed use complex</div>

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

	export default {
		name: "myGit",
		components: {MyGitForks, MyGitIssues, MyGitFiles},
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
            deleteItems: function(){
                const mainMenu = document.getElementById("mainMenu")
                const deleteMenu = document.getElementById("deleteMenu")
                const mainTable = document.getElementById("mainTable")
                const deleteTable = document.getElementById("deleteTable")


                mainMenu.hidden = !mainMenu.hidden
                deleteMenu.hidden = !deleteMenu.hidden
                mainTable.hidden = !mainTable.hidden
                deleteTable.hidden = !deleteTable.hidden
            },
			renameItems: function(){
				const mainMenu = document.getElementById("mainMenu")
				const renameMenu = document.getElementById("renameMenu")
				const mainTable = document.getElementById("mainTable")
				const renameTable = document.getElementById("renameTable")


				mainMenu.hidden = !mainMenu.hidden
				renameMenu.hidden = !renameMenu.hidden
				mainTable.hidden = !mainTable.hidden
				renameTable.hidden = !renameTable.hidden
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