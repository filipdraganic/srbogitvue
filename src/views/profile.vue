<template>

    <div class=" row mt-3 justify-content-center inline">
        <div class="d-none d-md-block col-lg-2 col-3 text-center" style="background: #eeeeee">

            <div class=" mt-3 text-center">

                <img class="card-img-100  " src="../assets/classicstonks.png" alt="Generic placeholder image">
                <h5>Stonks Man</h5>

            </div>
            <nav class="topmenu">
                <ul style="list-style: none; padding: 0">
                    <li><a class="btn mt-3" style="font-size: 1.5em"><i class="fas fa-user-alt"></i> Profile</a></li>
                    <li><a class="btn mt-3" v-on:click="$router.push({path:'inbox'})" style="font-size: 1.5em"><i class="fas fa-inbox"></i> Inbox</a></li>
                    <li><a class="btn mt-3" v-on:click="$router.push({path:'contacts'})" style="font-size: 1.5em"><i class="fas fa-address-book"></i> Contacts</a></li>

                </ul>
            </nav>


        </div>
        <div class="col-10 col-lg-8 ml-3 " style="background: #eeeeee; padding-top: 30px; padding-left: 10px">


            <div class="container d-md-none " style="text-align: center">
                <img class=" " src="../assets/classicstonks.png" alt="Generic placeholder image">
                <h5>Stonks Man</h5>
                <a class="btn mt-3" style="font-size: 1em" v-on:click="$router.push({path:'inbox'})"><i class="fas fa-inbox"></i> Inbox</a>
                <a class="btn mt-3" style="font-size: 1em" v-on:click="$router.push({path:'contacts'})"><i class="fas fa-address-book"></i> Contacts</a>

            </div>


            <div class="ml-3">
                <h5>Info</h5>
                <hr>
                <p>Ja sam Nebojsa Trajkovic. Moja strast je da budem programator .
                    <br><br>
                    Imam diplomiranu reddit akademiju.
                    <br><br>
                    43 zapoceta kursa na udemy, nijedan zavrsen.
                    <br><br>
                    Umem vindous da instaliram. Cak poneki i da krekiram.

                </p>
                <hr>
                <h4>Najnoviji projketi</h4>
                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Ime projekta</th>
                        <th scope="col">Starost</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Beograd na vodi</td>
                        <td>3 godine</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Autoput Milos Veliki</td>
                        <td>1 godina</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Brojevi NBG Blokova</td>
                        <td>300 godina</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Robna kuca Temerin</td>
                        <td>6 godina</td>
                    </tr>
                    </tbody>
                </table>



            </div>


        </div>





    </div>


</template>

<script>
	export default {
		name: "Profile"
	}
</script>

<style scoped>

</style>