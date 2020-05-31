 <template>
    <div>
        <div class="d-none d-md-block">
            <div class="container-fluid row " style="height: 100%; margin-bottom:-50px">
                <div class="jumbotron col-3 " style="padding: 0; border-radius: 0 !important; height: 100%; min-height: 500px; margin-bottom:auto; background:white">
                    <div class="btn-group-vertical" style="width: 100%; ">
                        <button class="dugmad btn btn-outline-primary active"> Beograd na vodi </button>
                        <button class="dugmad btn btn-outline-primary">Autoput Milos Veliki</button>
                        <button class="dugmad btn btn-outline-primary">Brojevi Nbg blokova</button>
                        <button class="dugmad btn btn-outline-primary">Robna kuca Temerin</button>


                        <button class="dugmad btn btn-outline-primary" style="margin-top: 100%">Create new Repository</button>


                    </div>

                </div>
                <div class="col-8">
                    <!--            Git koji treba da se pokaze na kompu-->
                    <h2>Beograd na vodi</h2>
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


                </div>

            </div>

        </div>

        <div class="d-md-none">
            <div class=" " style="padding: 0; border-radius: 0 !important; height: 100%; min-height: 500px; margin-bottom:auto; background:white">
                <div class="btn-group-vertical" style="width: 100%; ">
                    <button class="dugmad btn btn-outline-primary"> Beograd na vodi </button>
                    <button class="dugmad btn btn-outline-primary">Autoput Milos Veliki</button>
                    <button class="dugmad btn btn-outline-primary">Brojevi Nbg blokova</button>
                    <button class="dugmad btn btn-outline-primary">Robna kuca Temerin</button>


                    <button class="dugmad btn btn-outline-primary" style="margin-top: 100%">>Create new Repository</button>

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

	export default {
		name: "myGit",

        created() {
			headerLoggedOut.methods.setActiveBtn("btn5")
		}


	}

</script>

<style scoped>
    .dugmad{
        padding: 20px;
    }
</style>