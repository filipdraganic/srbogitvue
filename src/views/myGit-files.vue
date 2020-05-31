<template>
    <div style="height: 400px">
        <div class="row justify-content-center" id="mainMenu" style="">
            <button class="btn btn-outline-primary m-2"> Create new item</button>
            <button class="btn btn-outline-success m-2" data-toggle="modal" data-target="#uploadModal"> Upload file</button>
            <button class="btn btn-outline-warning m-2" v-on:click="renameItems"> Rename item</button>
            <button class="btn btn-outline-danger m-2" v-on:click="deleteItems"> Delete items</button>
            <div class="col-2"></div>
            <input class="form-control col-2" style="margin-top: auto; margin-bottom: auto" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 ml-2" id="searchBtn" v-on:click="goToSearch()">Search</button>
        </div>

        <div class="row justify-content-center" id="deleteMenu" hidden>
            <button class="btn btn-outline-danger m-2" v-on:click="deleteItems"> Delete items</button>

        </div>

        <div class="row justify-content-center" id="renameMenu" hidden>
            <button class="btn btn-outline-warning m-2" v-on:click="renameItems"> Rename items</button>

        </div>


        <hr>

            <div class="table-wrapper-scroll-y my-custom-scrollbar" id="mainTable"  >

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
                    <tr>
                        <th scope="row">1 <i class="fas fa-folder"></i></th>
                        <td>Belgrade Tower</td>
                        <td>1/13/2012 9:00AM</td>
                        <td>Folder</td>
                    </tr>
                    <tr>
                        <th scope="row">2 <i class="fas fa-file"></i></th>
                        <td>BW Arcadia</td>
                        <td>1/13/2012 9:00AM</td>
                        <td>Folder</td>
                    </tr>
                    <tr>
                        <th scope="row">3 <i class="fas fa-file"></i></th>
                        <td>BW Residences</td>
                        <td>1/13/2012 9:00AM</td>
                        <td>Folder</td>
                    </tr>
                    <tr>
                        <th scope="row">4 <i class="fas fa-file"></i></th>
                        <td>BW Vista</td>
                        <td>1/13/2012 9:00AM</td>
                        <td>Folder</td>
                    </tr>
                    <tr>
                        <th scope="row">5 <i class="fas fa-file"></i></th>
                        <td>BW Central</td>
                        <td>1/13/2012 9:00AM</td>
                        <td>Folder</td>
                    </tr>
                    <tr>
                        <th scope="row">6 <i class="fas fa-file"></i></th>
                        <td>BW Park</td>
                        <td>1/13/2012 9:00AM</td>
                        <td>Folder</td>
                    </tr>
                    <tr>
                        <th scope="row">7 <i class="fas fa-file"></i></th>
                        <td>BW Hotel Belgrade</td>
                        <td>1/13/2012 9:00AM</td>
                        <td>Folder</td>
                    </tr>
                    <tr>
                        <th scope="row">8 <i class="fas fa-file"></i></th>
                        <td>BW Terraces</td>
                        <td>1/13/2012 9:00AM</td>
                        <td>Folder</td>
                    </tr>
                    <tr>
                        <th scope="row">9 <i class="fas fa-file"></i></th>
                        <td>BW Parking</td>
                        <td>1/13/2012 9:00AM</td>
                        <td>Folder</td>
                    </tr>
                    <tr>
                        <th scope="row">10 <i class="fas fa-file"></i></th>
                        <td>BW Savamala</td>
                        <td>1/13/2012 9:00AM</td>
                        <td>Folder</td>
                    </tr>
                    <tr>
                        <th scope="row">11 <i class="fas fa-file"></i></th>
                        <td>BW Penthaus</td>
                        <td>1/13/2012 9:00AM</td>
                        <td>Folder</td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div class="table-wrapper-scroll-y my-custom-scrollbar" id="deleteTable" hidden>

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
                    <tbody>
                    <tr>
                        <th scope="row">1 <i class="fas fa-folder"></i></th>
                        <td>Belgrade Tower</td>
                        <td>1/13/2012 9:00AM</td>
                        <td>Folder</td>
                        <td><div class="checkbox">
                            <input type="checkbox" id="check1" value=""/>
                            <label for="check1"></label>
                        </div></td>

                    </tr>
                    <tr>
                        <th scope="row">2 <i class="fas fa-file"></i></th>
                        <td>BW Arcadia</td>
                        <td>1/13/2012 9:00AM</td>
                        <td>File</td>
                        <td><div class="checkbox">
                            <input type="checkbox" id="check2" value=""/>
                            <label for="check2"></label>
                        </div></td>
                    </tr>
                    <tr>
                        <th scope="row">3 <i class="fas fa-file"></i></th>
                        <td>BW Residences</td>
                        <td>1/13/2012 9:00AM</td>
                        <td>File</td>
                        <td>
                            <div class="checkbox">
                                <input type="checkbox" id="check3" value=""/>
                                <label for="check3"></label>
                            </div>
                        </td>

                    </tr>
                    <tr>
                        <th scope="row">4 <i class="fas fa-file"></i></th>
                        <td>BW Vista</td>
                        <td>1/13/2012 9:00AM</td>
                        <td>File</td>
                        <td>
                            <div class="checkbox">
                                <input type="checkbox" id="check4" value=""/>
                                <label for="check4"></label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">5 <i class="fas fa-file"></i></th>
                        <td>BW Central</td>
                        <td>1/13/2012 9:00AM</td>
                        <td>File</td>
                        <td>
                            <div class="checkbox">
                                <input type="checkbox" id="check5" value=""/>
                                <label for="check5"></label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">6 <i class="fas fa-file"></i></th>
                        <td>BW Park</td>
                        <td>1/13/2012 9:00AM</td>
                        <td>File</td>
                        <td>
                            <div class="checkbox">
                                <input type="checkbox" id="check6" value=""/>
                                <label for="check6"></label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">7 <i class="fas fa-file"></i></th>
                        <td>BW Hotel Belgrade</td>
                        <td>1/13/2012 9:00AM</td>
                        <td>File</td>
                        <td>
                            <div class="checkbox">
                                <input type="checkbox" id="check11" value=""/>
                                <label for="check11"></label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">8 <i class="fas fa-file"></i></th>
                        <td>BW Terraces</td>
                        <td>1/13/2012 9:00AM</td>
                        <td>File</td>
                        <td>
                            <div class="checkbox">
                                <input type="checkbox" id="check7" value=""/>
                                <label for="check7"></label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">9 <i class="fas fa-file"></i></th>
                        <td>BW Parking</td>
                        <td>1/13/2012 9:00AM</td>
                        <td>File</td>
                        <td>
                            <div class="checkbox">
                                <input type="checkbox" id="check8" value=""/>
                                <label for="check8"></label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">10 <i class="fas fa-file"></i></th>
                        <td>BW Savamala</td>
                        <td>1/13/2012 9:00AM</td>
                        <td>File</td>
                        <td>
                            <div class="checkbox">
                                <input type="checkbox" id="check9" value=""/>
                                <label for="check9"></label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">11 <i class="fas fa-file"></i></th>
                        <td>BW Penthaus</td>
                        <td>1/13/2012 9:00AM</td>
                        <td>File</td>
                        <td>
                            <div class="checkbox">
                                <input type="checkbox" id="check10" value=""/>
                                <label for="check10"></label>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div class="table-wrapper-scroll-y my-custom-scrollbar" id="renameTable" hidden >

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
                    <tr>
                        <th scope="row">1 <i class="fas fa-folder"></i></th>
                        <td><input type="text" placeholder="Belgrade Tower" id="input1"> </td>
                        <td>1/13/2012 9:00AM</td>
                        <td>Folder</td>
                    </tr>
                    <tr>
                        <th scope="row">2 <i class="fas fa-file"></i></th>
                        <td><input type="text" placeholder="BW Arcadia" id="input2"> </td>
                        <td>1/13/2012 9:00AM</td>
                        <td>Folder</td>
                    </tr>
                    <tr>
                        <th scope="row">3 <i class="fas fa-file"></i></th>
                        <td><input type="text" placeholder="BW Residences" id="input3"> </td>
                        <td>1/13/2012 9:00AM</td>
                        <td>Folder</td>
                    </tr>
                    <tr>
                        <th scope="row">4 <i class="fas fa-file"></i></th>
                        <td><input type="text" placeholder="BW Vista" id="input4"> </td>
                        <td>1/13/2012 9:00AM</td>
                        <td>Folder</td>
                    </tr>
                    <tr>
                        <th scope="row">5 <i class="fas fa-file"></i></th>
                        <td><input type="text" placeholder="BW Central" id="input5"> </td>
                        <td>1/13/2012 9:00AM</td>
                        <td>Folder</td>
                    </tr>
                    <tr>
                        <th scope="row">6 <i class="fas fa-file"></i></th>
                        <td><input type="text" placeholder="BW Park" id="input6"> </td>
                        <td>1/13/2012 9:00AM</td>
                        <td>Folder</td>
                    </tr>
                    <tr>
                        <th scope="row">7 <i class="fas fa-file"></i></th>
                        <td><input type="text" placeholder="BW Hotel Belgrade" id="input7"> </td>
                        <td>1/13/2012 9:00AM</td>
                        <td>Folder</td>
                    </tr>
                    <tr>
                        <th scope="row">8 <i class="fas fa-file"></i></th>
                        <td><input type="text" placeholder="BW Terraces" id="input8"> </td>
                        <td>1/13/2012 9:00AM</td>
                        <td>Folder</td>
                    </tr>
                    <tr>
                        <th scope="row">9 <i class="fas fa-file"></i></th>
                        <td><input type="text" placeholder="BW Parking" id="input9"> </td>
                        <td>1/13/2012 9:00AM</td>
                        <td>Folder</td>
                    </tr>
                    <tr>
                        <th scope="row">10 <i class="fas fa-file"></i></th>
                        <td><input type="text" placeholder="BW Savamala" id="input10"> </td>
                        <td>1/13/2012 9:00AM</td>
                        <td>Folder</td>
                    </tr>
                    <tr>
                        <th scope="row">11 <i class="fas fa-file"></i></th>
                        <td><input type="text" placeholder="BW Penthaus" id="input11"> </td>
                        <td>1/13/2012 9:00AM</td>
                        <td>Folder</td>
                    </tr>
                    </tbody>
                </table>
            </div>



    </div>
</template>

<script>
	export default {
		name: "myGit-files"
	}
</script>

<style scoped>
    .my-custom-scrollbar {
        position: relative;
        height: 79%;
        overflow: auto;
    }
    .table-wrapper-scroll-y {
        display: block;
    }
</style>