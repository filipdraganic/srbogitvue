<template>
    <div style="height: 400px; overflow-y: scroll; " >
        <div class="row justify-content-start justify-content-lg-center ml-2  " id="mainMenu" style="">
            <button class="btn btn-outline-primary m-2" v-on:click="createItem()"> Create new item</button>
            <button class="btn btn-outline-success m-2" data-toggle="modal" data-target="#uploadModal"> Upload file</button>
            <button class="btn btn-outline-warning m-2" v-on:click="renameItems()"> Rename item</button>
            <button class="btn btn-outline-danger m-2" v-on:click="deleteItems()"> Delete items</button>

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
</template>

<script>
	export default {
		name: "myGit-files",

        methods: {
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
            },
            createItem: function(){
                const mainMenu = document.getElementById("mainMenu")
                const mainTable = document.getElementById("mainTable")
                const newItemMenu = document.getElementById("createItemMenu")
                const newItemView = document.getElementById("createItemView")

                const imeFajla = document.getElementById("imeFajla")

                if(imeFajla.textContent.length > 0 || newItemView.hidden) {

                    mainMenu.hidden = !mainMenu.hidden
                    mainTable.hidden = !mainTable.hidden
                    newItemMenu.hidden = !newItemMenu.hidden
                    newItemView.hidden = !newItemView.hidden
                }else{
                    return
                }

            },
			cancelCreateItem: function(){
				const mainMenu = document.getElementById("mainMenu")
				const mainTable = document.getElementById("mainTable")
				const newItemMenu = document.getElementById("createItemMenu")
				const newItemView = document.getElementById("createItemView")

				const imeFajla = document.getElementById("imeFajla")


                mainMenu.hidden = !mainMenu.hidden
                mainTable.hidden = !mainTable.hidden
                newItemMenu.hidden = !newItemMenu.hidden
                newItemView.hidden = !newItemView.hidden


			}
        }
	}
</script>

<style scoped>
    .my-custom-scrollbar {
        position: relative;

        overflow: scroll;
    }
    .table-wrapper-scroll-y {
    }
</style>