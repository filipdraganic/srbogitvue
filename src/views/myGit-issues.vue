<template>
    <div class="" style="max-width: 100%; padding: 0 ">


        <ul class="nav nav-tabs" id="myTab" role="tablist" style="width: 100%">
            <li class="nav-item">
                <a class="nav-link active" id="opened-tab" data-toggle="tab" href="#opened" role="tab" aria-controls="opened" aria-selected="true" style="border-bottom: white 2px solid">Opened</a>
            </li>
            <li class="nav-item" >
                <a class="nav-link" id="closed-tab" data-toggle="tab" href="#closed" role="tab" aria-controls="closed" aria-selected="false" style="border-bottom: white 4px solid">Closed</a>
            </li>
            <li style="margin-left: auto; margin-right: 10px">
                <button class="btn btn-outline-primary m-2 col-11 col-lg-12"  data-toggle="modal" data-target="#newIssueModal"> Create new Issue</button>
            </li>
        </ul>



        <div class="tab-content" id="myTabContent" style="width: 100%; ">
            <div class="tab-pane fade show active  "  id="opened" role="tabpanel" aria-labelledby="open-tab" style="width: 100%">

                <div id="accordionOpened" style="text-align: left; width: 100%;overflow-y: auto; max-height: 400px " >
                    <div class="card">
                        <div class="card-header" id="headingOneOpen">
                            <h5 class="mb-0">
                                <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOneOpen" aria-expanded="true" aria-controls="collapseOneOpen">
                                    Issue #1 - Liftovi ne rade
                                </button>
                            </h5>
                        </div>

                        <div id="collapseOneOpen" class="collapse show" aria-labelledby="headingOneOpen" data-parent="#accordionOpened">
                            <div class="card-body">
                                Vec danima liftovi ne rade, dajte da se malo uozbiljimo u ovome
                            </div>
                            <hr>
                            <div class="row container mb-2 ml-2">
                                <button class="btn btn-danger">Close issue</button>

                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingTwoOpen">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwoOpen" aria-expanded="false" aria-controls="collapseTwo">
                                    Issue #2 - Nije dovoljno daleko od vode
                                </button>
                            </h5>
                        </div>
                        <div id="collapseTwoOpen" class="collapse" aria-labelledby="headingTwoOpen" data-parent="#accordionOpened">
                            <div class="card-body">
                                Lorem ipsum
                            </div>
                            <hr>
                            <div class="row container mb-2 ml-2">
                                <button class="btn btn-danger">Close issue</button>

                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingThreeOpen">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThreeOpen" aria-expanded="false" aria-controls="collapseThree">
                                    Issue #3 - Poplaava na 583. spratu
                                </button>
                            </h5>
                        </div>
                        <div id="collapseThreeOpen" class="collapse" aria-labelledby="headingThreeOpen" data-parent="#accordionOpened">
                            <div class="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                            <hr>
                            <div class="row container mb-2 ml-2">
                                <button class="btn btn-danger">Close issue</button>

                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingFourOpen">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFouOpen" aria-expanded="false" aria-controls="collapseFour">
                                    Issue #4 - Trzni centar ne radi i dalje
                                </button>
                            </h5>
                        </div>
                        <div id="collapseFouOpen" class="collapse" aria-labelledby="headingFourOpen" data-parent="#accordionOpened">
                            <div class="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                            <hr>
                            <div class="row container mb-2 ml-2">
                                <button class="btn btn-danger">Close issue</button>

                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingFiveOpen">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFiveOpen" aria-expanded="false" aria-controls="collapseFive">
                                    Issue #5 - Stanovi previse jeftini
                                </button>
                            </h5>
                        </div>
                        <div id="collapseFiveOpen" class="collapse" aria-labelledby="headingFiveOpen" data-parent="#accordionOpened">
                            <div class="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                            <hr>
                            <div class="row container mb-2 ml-2">
                                <button class="btn btn-danger">Close issue</button>

                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingSixOpen">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSixOpen" aria-expanded="false" aria-controls="collapseSix">
                                    Issue #6 - Stanovi preskupi
                                </button>
                            </h5>
                        </div>
                        <div id="collapseSixOpen" class="collapse" aria-labelledby="headingSixOpen" data-parent="#accordionOpened">
                            <div class="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                            <hr>
                            <div class="row container mb-2 ml-2">
                                <button class="btn btn-danger">Close issue</button>

                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingSevenOpen">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSevenOpen" aria-expanded="false" aria-controls="collapseSeven">
                                    Issue #7 - Test issue
                                </button>
                            </h5>
                        </div>
                        <div id="collapseSevenOpen" class="collapse" aria-labelledby="headingSevenOpen" data-parent="#accordionOpened">
                            <div class="card-body">
                                Da li radi aaaaaaaa
                            </div>
                            <hr>
                            <div class="row container mb-2 ml-2">
                                <button class="btn btn-danger">Close issue</button>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="tab-pane fade show my-custom-scrollbar" id="closed" role="tabpanel" aria-labelledby="close-tab">

                <div id="accordion" style="text-align: left;">
                    <div class="card">
                        <div class="card-header" id="headingOne">
                            <h5 class="mb-0">
                                <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Issue #1 - Beton popucao
                                </button>
                            </h5>
                        </div>

                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                            <div class="card-body">
                                Zabetonirali asfalt
                            </div>
                            <hr>
                            <div class="row container mb-2 ml-2">
                                <button class="btn btn-danger">Reopen issue </button>

                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingTwo">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Issue #2 - Liftovi rade
                                </button>
                            </h5>
                        </div>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div class="card-body">
                                Zamenili sajle
                            </div>
                            <hr>
                            <div class="row container mb-2 ml-2">
                                <button class="btn btn-danger">Reopen issue </button>

                            </div>
                        </div>
                    </div>

                </div>

            </div>



        </div>
    </div>

</template>

<script>
	export default {
		name: "myGit-issues"
	}
</script>

<style scoped>

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
        border-top: black 2px solid;
        border-radius: 0 ;
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
    }

</style>