<template>
    <div>
        <div id="naslov" class="container ">

            <h1> <i class="dolarino fas fa-dollar-sign" style="color:green"></i> Pricing <i class="dolarino fas fa-dollar-sign" style="color:green"></i></h1>

        </div>
        <section class="pricing py-5">
        <div class="container">
            <div class="row">


                <!-- Free Tier -->
                <div class="col-lg-4 okvirKarte">
                    <div class="card mb-5 mb-lg-0 karta">
                        <div class="card-body flex-column d-flex">
                            <h5 class="card-title text-muted text-uppercase text-center">Pridoslica tier</h5>
                            <h6 class="card-price text-center">Dzabe</h6>
                            <hr>
                            <div class="okvirTeksta">

                                <h4 class="tekstUnutra">Probno iskustvo ovog patriotskog sajta. Sve vam je na izvolte ali u ogranicenim dozama.</h4>

                            </div>
                            <hr>
                            <ul class="fa-ul">
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>5GB Prostora</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>Gledanje bloga</li>
                                <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>10 repozitorijuma</li>
                                <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Tanji novcanik</li>
                                <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Privatnost</li>
                            </ul>
                            <a v-on:click="login()" v-if="!this.$store.getters.getLoggedIn" class="btn btn-block btn-primary text-uppercase text-white mt-auto">Prijavi me sada</a>
                            <a  v-if="this.$store.getters.getLoggedIn" class="btn btn-block btn-primary text-uppercase text-white mt-auto disabled">Kupljeno</a>

                        </div>
                    </div>
                </div>
                <!-- Plus Tier -->
                <div class="col-lg-4 okvirKarte">
                    <div class="card mb-5 mb-lg-0 karta">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title text-muted text-uppercase text-center">Gradjanin tier</h5>
                            <h6 class="card-price text-center">300 rsd<span class="period">/month</span></h6>
                            <hr>
                            <div class="okvirTeksta justify-content-center align-self-center">

                                <h4 class="tekstUnutra">Imate vise slobode kada razvijate vase projekte. Niste ograniceni kao pridoslice.</h4>

                            </div>
                            <hr>
                            <ul class="fa-ul">
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>5GB Prostora</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>Gledanje bloga</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>10 repozitorijuma</li>
                                <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Tanji novcanik</li>
                                <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Privatnost</li>
                            </ul>


                            <a v-on:click="login()" v-if="!this.$store.getters.getLoggedIn" class="btn btn-block btn-primary text-uppercase text-white mt-auto">Prijavi me sada</a>
                            <a href="https://www.paypal.me/FDraganic/300RUB" v-if="this.$store.getters.getLoggedIn" class="btn btn-block btn-primary text-uppercase text-white mt-auto">Vadi pare</a>

                        </div>
                    </div>
                </div>
                <!-- Pro Tier -->
                <div class="col-lg-4 okvirKarte">
                    <div class="card karta">
                        <div class="card-body flex-column d-flex">
                            <h5 class="card-title text-muted text-uppercase text-center">Domacin tier</h5>
                            <h6 class="card-price text-center">1000 rsd<span class="period">/month</span></h6>
                            <hr>
                            <div class="okvirTeksta">
                                <h4 class="tekstUnutra card-text ">Nista novo samo mi daj vise para.</h4>
                            </div>
                            <hr >
                            <ul class="fa-ul">
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>5GB Prostora</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>Gledanje bloga</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>10 repozitorijuma</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>Tanji novcanik</li>
                                <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Privatnost</li>
                            </ul>
                            <a v-on:click="login()" v-if="!this.$store.getters.getLoggedIn" class="btn btn-block btn-primary text-uppercase text-white mt-auto">Prijavi me sada</a>
                            <a href="https://www.paypal.me/FDraganic/1000RUB" v-if="this.$store.getters.getLoggedIn" class="btn btn-block btn-primary text-uppercase text-white mt-auto">Plati odmah</a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>

    </div>
</template>

<script>

    import headerLoggedOut from "./headerLoggedOut";

	export default {
		name: "pricing",
        created() {
			headerLoggedOut.methods.setActiveBtn("btn3")
		},
		methods: {
			login: function(){
				headerLoggedOut.methods.clickLoginBtn()
            }
        }
	}
</script>

<style scoped>
    section.pricing {
        /*background: #007bff;*/
        /*background: linear-gradient(to right, #0062E6, #33AEFF);*/
    }

    .pricing .card {
        border: none;
        border-radius: 1rem;
        transition: all 0.2s;
        box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
    }

    .pricing hr {
        margin: 1.5rem 0;
    }

    .pricing .card-title {
        margin: 0.5rem 0;
        font-size: 0.9rem;
        letter-spacing: .1rem;
        font-weight: bold;
    }

    .pricing .card-price {
        font-size: 3rem;
        margin: 0;
    }

    .pricing .card-price .period {
        font-size: 0.8rem;
    }

    .pricing ul li {
        margin-bottom: 1rem;
    }

    .pricing .text-muted {
        opacity: 0.7;
    }

    .pricing .btn {
        font-size: 80%;
        border-radius: 5rem;
        letter-spacing: .1rem;
        font-weight: bold;
        padding: 1rem;
        opacity: 0.7;
        transition: all 0.2s;
        background: green;
    }

    /* Hover Effects on Card */

    @media (min-width: 992px) {
        .pricing .card:hover {
            margin-top: -.25rem;
            margin-bottom: .25rem;
            box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.3);

        }
        .pricing .card:hover .btn {
            opacity: 1;
        }
    }

    .active{
        margin-top: -1px;
        font-size: 110%;
        background: linear-gradient(to top, #41ff33, #33ff36);;
        border-radius: 10px;

    }

    .tekstUnutra {

        text-align: center;
        min-height: 100%;
    }

    #lista{
        list-style: none;
        margin: 0 auto;

    }


    .okvirKarte{
        margin-top: 5px;
        margin-bottom: 5px;
    }

    .okvirTeksta{
        align-content: center;

        background-size: 100%;
        min-height: 130px;
    }

    #naslov{
        margin-top: 10px;
        text-align: center;
    }

</style>