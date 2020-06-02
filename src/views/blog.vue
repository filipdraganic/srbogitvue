<template>

    <div class="container">
        <div >
            <h1 class="mt-3" style="text-align: center">SrboBlog</h1>
        </div>

        <h5 style="text-align: center; margin-top: 50px">Create new post</h5>
        <div class="mt-4 row justify-content-center" v-if=this.$store.getters.getLoggedIn style="text-align: center;  ">
            <div class="col-1 col-sm-0"></div>

            <textarea class="col-7" placeholder="Post text here" style=" min-height: 100px">

            </textarea>

            <button class="btn btn-primary  ml-4" style="max-height: 40px; min-width: 80px; margin-top: auto; margin-bottom: auto">Post</button>


        </div>

        <hr>

        <div class="row" id="komentariIAdovi">
            <div class="col-12 col-sm-12 col-lg-8 mr-lg-4" id="sviKomentari">
                <div class="row">
                    <div class="col-9 col-lg-11 komentari" >
                        <section class="my-5">

                            <div class="media mt-4 ">
                                <img class="card-img-100 d-flex z-depth-1 mr-3" src="../assets/sadstonks.png"
                                     alt="Generic placeholder image">
                                <div class="media-body">
                                    <h5 class="font-weight-bold mt-0">
                                        <a> <a href="">Sad Stonks</a> <span class="ml-1 ml-lg-5  starost"> <br>2 dana </span> </a>
                                    </h5>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod consectetur accusamus velit nostrum et
                                    magnam.
                                </div>
                            </div>

                        </section>
                    </div>

                    <div class="col-3 col-lg-1">
                        <section class="my-5">

                            <div class="media mt-4 ">
                                <ul>
                                    <li>
                                        <a href=""><i class="fas fa-angle-up ikonica" style="color:green"></i>  </a>
                                    </li>
                                    <li>
                                        <h6 class="brojVoteova">+21</h6>
                                    </li>
                                    <li>
                                        <a href=""><i class="fas fa-angle-down ikonica " style="color:red" ></i> </a>
                                    </li>

                                </ul>



                            </div>
                        </section>
                    </div>
                </div>


                <div class="row">
                    <div class="col-9 col-lg-11 komentari" >
                        <section class="my-5">

                            <div class="media mt-4 ">
                                <img class="card-img-100 d-flex z-depth-1 mr-3" src="../assets/classicstonks.png"
                                     alt="Generic placeholder image">
                                <div class="media-body">
                                    <h5 class="font-weight-bold mt-0">
                                        <a href="">Classic Stonks</a> <span class="ml-1 ml-lg-5  starost"> <br>2 dana </span>
                                    </h5>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod consectetur accusamus velit nostrum et
                                    magnam.
                                </div>
                            </div>

                        </section>
                    </div>

                    <div class="col-3 col-lg-1">
                        <section class="my-5">

                            <div class="media mt-4 ">
                                <ul>
                                    <li>
                                        <a href=""><i class="fas fa-angle-up ikonica" style="color:green"></i>  </a>
                                    </li>
                                    <li>
                                        <h6 class="brojVoteova">+23</h6>
                                    </li>
                                    <li>
                                        <a href=""><i class="fas fa-angle-down ikonica " style="color:red" ></i> </a>
                                    </li>

                                </ul>



                            </div>
                        </section>
                    </div>
                </div>


                <div class="row">
                    <div class="col-9 col-lg-11 komentari" >
                        <section class="my-5">

                            <div class="media mt-4 ">
                                <img class="card-img-100 d-flex z-depth-1 mr-3" src="../assets/forwardstonks.png"
                                     alt="Generic placeholder image">
                                <div class="media-body">
                                    <h5 class="font-weight-bold mt-0">
                                        <a href="">Forward Stonks</a> <span class="ml-1 ml-lg-5 starost"><br> 2 dana </span>
                                    </h5>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod consectetur accusamus velit nostrum et
                                    magnam.
                                </div>
                            </div>

                        </section>
                    </div>

                    <div class="col-3 col-lg-1">
                        <section class="my-5">

                            <div class="media mt-4 ">
                                <ul>
                                    <li>
                                        <a href=""><i class="fas fa-angle-up ikonica" style="color:green"></i>  </a>
                                    </li>
                                    <li>
                                        <h6 class="brojVoteova">-200</h6>
                                    </li>
                                    <li>
                                        <a href=""><i class="fas fa-angle-down ikonica " style="color:red" ></i> </a>
                                    </li>

                                </ul>



                            </div>
                        </section>
                    </div>
                </div>


                <div class="row">
                    <div class="col-9 col-lg-11 komentari" >
                        <section class="my-5">

                            <div class="media mt-4 ">
                                <img class="card-img-100 d-flex z-depth-1 mr-3" src="../assets/gamerstonks.png"
                                     alt="Generic placeholder image">
                                <div class="media-body">
                                    <h5 class="font-weight-bold mt-0">
                                        <a href="">Gamer Stonks</a> <span class="ml-1 ml-lg-5  starost"> <br>2 dana </span>
                                    </h5>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod consectetur accusamus velit nostrum et
                                    magnam.
                                </div>
                            </div>

                        </section>
                    </div>

                    <div class="col-3 col-lg-1">
                        <section class="my-5">

                            <div class="media mt-4 ">
                                <ul>
                                    <li>
                                        <a href=""><i class="fas fa-angle-up ikonica" style="color:green"></i>  </a>
                                    </li>
                                    <li>
                                        <h6 class="brojVoteova">+5</h6>
                                    </li>
                                    <li>
                                        <a href=""><i class="fas fa-angle-down ikonica " style="color:red" ></i> </a>
                                    </li>

                                </ul>



                            </div>
                        </section>
                    </div>
                </div>


                <div class="row">
                    <div class="col-9 col-lg-11 komentari" >
                        <section class="my-5">

                            <div class="media mt-4 ">
                                <img class="card-img-100 d-flex z-depth-1 mr-3" src="../assets/helthstonks.png"
                                     alt="Generic placeholder image">
                                <div class="media-body">
                                    <h5 class="font-weight-bold mt-0">
                                        <a href="">Helth Stonks</a> <span class="ml-1 ml-lg-5  starost"><br> 2 dana </span>
                                    </h5>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod consectetur accusamus velit nostrum et
                                    magnam.
                                </div>
                            </div>

                        </section>
                    </div>
                    <div class="col-3 col-lg-1">
                        <section class="my-5">

                            <div class="media mt-4 ">
                                <ul>
                                    <li>
                                        <a href=""><i class="fas fa-angle-up ikonica" style="color:green"></i>  </a>
                                    </li>

                                    <li>
                                        <h6 class="brojVoteova">-2</h6>
                                    </li>

                                    <li>
                                        <a href=""><i class="fas fa-angle-down ikonica " style="color:red" ></i> </a>
                                    </li>

                                </ul>



                            </div>
                        </section>
                    </div>
                </div>

            </div>

            <div class="d-none d-md-block col-lg-3 ml-4" id="adovi">
                <div class="jumbotron" style="background: white; padding: 5px 10px 5px 10px">
                    <h3 style="text-align: center">Oglasi firma za posao</h3>

                    <br><br>

                    <div class="jumbotron justify-content-center" style="padding: 5px;">
                        <img src="../assets/holycode.png" style="object-fit: cover; width: 100%; height: 100%" alt="">
                        <p style="font-size: 0.75em; text-align: center; margin: 2px">Holy code trazi novog programera po 512 puta!!!</p>
                    </div>


                    <div class="jumbotron justify-content-center" style="padding: 5px;">
                        <img src="../assets/microsoft.png" style="object-fit: cover; width: 100%; height: 100%" alt="">
                        <p style="font-size: 0.75em; text-align: center; margin: 2px">Microsoft praksa skroz placena, prijava sada</p>
                    </div>


                    <div class="jumbotron justify-content-center" style="padding: 5px; min-height: 100px">
                        <img src="../assets/penta.png" style="object-fit: cover; width: 100%; height: 100%" alt="">
                        <p style="font-size: 0.75em; text-align: center; margin: 2px">Penta, kul firma, slajduj u dm</p>
                    </div>
                </div>
                <br><br>

            </div>

        </div>


    </div>

</template>

<script>
	import headerLoggedOut from "./headerLoggedOut";

	export default {
		name: "blog",
		created() {
			headerLoggedOut.methods.setActiveBtn("btn2")
		},
	}
</script>

<style scoped>


    .card-img-100{
        border-radius: 50%;
        width: 110px;
        height: 110px;

    }

    .starost{
        font-size: 13px;
    }

    ul{
        list-style: none;
    }

    .ikonica{
        font-size: 3em;
    }

    .brojVoteova{
        text-align: center;
    }
</style>