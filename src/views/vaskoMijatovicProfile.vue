<template>
    <div class=" row mt-3 justify-content-center inline">
        <div class="d-none d-md-block col-lg-2 col-3" style="background: #eeeeee">

            <div class="col-6 ml-5 mt-3">

                <img class="card-img-100 d-flex z-depth-1 " src="../assets/sadstonks.png" alt="Generic placeholder image">
                <h5>Sad Stonks</h5>

            </div>


        </div>
        <div class="col-10 col-lg-8  " style="background: #eeeeee; padding-top: 30px; padding-left: 10px">


            <div class="container d-md-none " style="text-align: center">
                <img class=" " src="../assets/sadstonks.png" alt="Generic placeholder image">
                <h5>Sad Stonks</h5>
            </div>


            <div class="ml-3">
                <div class="row ">
                    <h5 class="col-sm-3 col-md-3 col-lg-2">Info</h5>

                    <div class="container-fluid text-right col-12 col-lg-9 col-md-9 col-sm-12">
                        <button class="btn btn-danger " style=" margin-bottom: auto; margin-top: -4px"> Remove from contacts</button>
                        <button class="btn btn-outline-primary " style=" margin-bottom: auto; margin-top: -4px; margin-left: 5px"> Message</button>

                    </div>




                </div>
                <hr>
                <p>Ja sam Vasko Mijatovic. Ja sam dizajner.
                    <br><br>
                    Majstor sam profesionalnog alata po imenu MS paint. <i class="fas fa-paint-brush"></i>
                    <br><br>
                    Imam instaliran fotoshop ali ga nikad nisam upalio.
                    <br><br>
                    Graficke table su precenjene vise volim da koristim mis.
                </p>
                <br>
                <h4>Najnoviji projketi</h4>
                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
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
		name: "vaskoMijatovicProfile"
	}
</script>

<style scoped>

</style>