<template>
<div>

    <title>Srbogit</title>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" id="navbarTogglerBtn" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand btn btn-default btn-rounded navdugmici" v-on:click="goToHome()"  @click="activeBtn = 'btn1'"  >Србогит</a>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item" id="aboutSrbogitBtn">
                    <a class=" nav-link btn btn-default btn-rounded navdugmici" v-on:click="goToHome()" @click="activeBtn = 'btn1'" :class="{active: activeBtn === 'btn1'}">About SrboGit <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item" id="blogBtn">
                    <a class="btn nav-link btn-default btn-rounded navdugmici" v-on:click="goToBlog()" @click="activeBtn = 'btn2'" :class="{active: activeBtn === 'btn2'}">Blog</a>
                </li>
                <li class="nav-item" id="pricingBtn">
                    <a class="btn nav-link btn-default btn-rounded navdugmici" v-on:click="goToPricing()" @click="activeBtn = 'btn3'" :class="{active: activeBtn === 'btn3'}">Pricing</a>
                </li>

            </ul>
            <hr>
            <div v-if="!checkStatus()">
                <ul class="form-inline navbar-nav  mt-2 mt-lg-0 " >
                    <li class="nav-item">
                        <a id="loginBtn" class="btn nav-link btn-default btn-rounded navdugmici" data-toggle="modal" data-target="#loginModalForm">Login</a>
                    </li>
                    <li class="nav-item mt-2 mt-lg-0">
                        <a id="signupBtn" class="btn nav-link btn-default btn-rounded navdugmici" data-toggle="modal" data-target="#signUpModalForm">Sign up</a>
                    </li>

                </ul>
            </div>

            <div v-else>
                <ul class=" navbar-nav  mt-2 mt-lg-0 " >
                    <li class="nav-item">
                        <a id="ProfileBtn" class="btn nav-link btn-default btn-rounded navdugmici" v-on:click="goToProfile()" @click="activeBtn = 'btn4'" :class="{active: activeBtn === 'btn4'}"  >Profile</a>
                    </li>
                    <li class="nav-item mt-2 mt-lg-0">
                        <a id="myGitBtn" class="btn nav-link btn-default btn-rounded navdugmici"  v-on:click="goToMyGit()" @click="activeBtn = 'btn5'" :class="{active: activeBtn === 'btn5'}" >My Git</a>
                    </li>
                    <li class="nav-item">
                        <a id="supportBtn" class="btn nav-link btn-default btn-rounded navdugmici"  v-on:click="goToSupport()" @click="activeBtn = 'btn6'" :class="{active: activeBtn === 'btn6'}">Support</a>
                    </li>
                    <li class="nav-item mt-2 mt-lg-0">
                        <a id="logoutBtn" class="btn nav-link btn-default btn-rounded navdugmici" v-on:click="logout" >Logout</a>
                    </li>

                </ul>
            </div>

            <form class="form-inline navbar-nav my-2 my-lg-0">
                <input class="form-control mb-lg-0 mr-sm-2 mb-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0 navdugmici" id="searchBtn" data-toggle="collapse"  v-on:click="goToSearch()">Search</button>
            </form>
        </div>
    </nav>


    <!-- LOGIN MODAL -->
    <form >
        <div class="modal fade" id="loginModalForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
             aria-hidden="true">
            <div class="modal-dialog" role="document">
                <!--Content-->
                <div class="modal-content form-elegant">
                    <!--Header-->
                    <div class="modal-header text-center">
                        <h3 class="modal-title w-100 dark-grey-text font-weight-bold my-3" id="myloginModalLabel"><strong>Sign in</strong></h3>
                        <button type="button" id="closeLoginBtn" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <!--Body-->
                    <div class="modal-body mx-4">
                        <!--Body-->
                        <div class="md-form mb-5">
                            <label data-error="wrong" data-success="right" for="Form-signup-email1">Your email</label>
                            <input type="email" id="Form-login-email1" placeholder="student@email.com" class="form-control validate" v-model="loginUsername" required>
                        </div>

                        <div class="md-form pb-3">
                            <label data-error="wrong" data-success="right" for="Form-login-pass1">Your password</label>
                            <input type="password" id="Form-login-pass1" placeholder="password" class="form-control validate" v-model="loginPassword" required>
                            <p class="font-small blue-text d-flex justify-content-end"> <a href="#" class="blue-text ml-1">
                                Forgot Password?</a></p>
                        </div>


                        <div class="text-center mb-3">
                            <button v-on:click="logIn()" class="btn blue-gradient btn-block btn-rounded z-depth-1a">Sign in</button>
                        </div>
                        <p class="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"> or Sign in
                            with:</p>

                        <div class="row my-3 d-flex justify-content-center">
                            <!--Facebook-->
                            <button type="button" class="btn btn-white btn-rounded mr-md-3 z-depth-1a"><i class="fab fa-facebook-f text-center"></i></button>
                            <!--Twitter-->
                            <button type="button" class="btn btn-white btn-rounded mr-md-3 z-depth-1a"><i class="fab fa-twitter"></i></button>
                            <!--Google +-->
                            <button type="button" class="btn btn-white btn-rounded mr-md-3 z-depth-1a"><i class="fab fa-google"></i></button>
                        </div>
                    </div>
                    <!--Footer-->
                    <div class="modal-footer mx-5 pt-3 mb-1">
                        <p class="font-small grey-text d-flex justify-content-end">Not a member? <a v-on:click="clickSignUpBtn()" href="#" class="blue-text ml-1">
                            Sign Up</a></p>
                    </div>
                </div>
                <!--/.Content-->
            </div>
        </div>
    </form>
    <!-- Modal -->

    <!--    SIGN UP MODAL-->
    <form>
        <div class="modal fade" id="signUpModalForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
             aria-hidden="true">
            <div class="modal-dialog" role="document">
                <!--Content-->
                <div class="modal-content form-elegant">
                    <!--Header-->
                    <div class="modal-header text-center">
                        <h3 class="modal-title w-100 dark-grey-text font-weight-bold my-3" id="mysignupModalLabel"><strong>Sign up</strong></h3>
                        <button type="button" id="closeSignupBtn" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <!--Body-->


                    <div class="modal-body mx-4">
                        <!--Body-->
                        <div class="md-form mb-5">
                            <label data-error="wrong" data-success="right" for="Form-signup-email1">Your email</label>
                            <input type="email" id="Form-signup-email1" placeholder="student@email.com" class="form-control validate" v-model="signupUsername" required >
                            <div class="invalid-feedback">
                                Please choose a email.
                            </div>
                        </div>

                        <div class="md-form pb-5">
                            <label data-error="wrong" data-success="right" for="Form-signup-pass1">Your password</label>
                            <input type="password" id="Form-signup-pass1" placeholder="password" class="form-control validate" v-model="signupPassword" required>
                            <div class="invalid-feedback">
                                Please choose a password.
                            </div>
                        </div>

                        <div class="md-form pb-3">
                            <label data-error="wrong" data-success="right" for="Form-signup-pass-confirm">Confirm password</label>
                            <input type="password" id="Form-signup-pass-confirm" placeholder="password" class="form-control validate" v-model="signupPassword2" required>
                        </div>


                        <div class="text-center mb-3">
                            <button type="submit" class="btn blue-gradient btn-block btn-rounded z-depth-1a">Sign up</button>
                        </div>
                        <p class="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"> or Sign in
                            with:</p>

                        <div class="row my-3 d-flex justify-content-center">
                            <!--Facebook-->
                            <button type="button" class="btn btn-white btn-rounded mr-md-3 z-depth-1a"><i class="fab fa-facebook-f text-center"></i></button>
                            <!--Twitter-->
                            <button type="button" class="btn btn-white btn-rounded mr-md-3 z-depth-1a"><i class="fab fa-twitter"></i></button>
                            <!--Google +-->
                            <button type="button" class="btn btn-white btn-rounded mr-md-3 z-depth-1a"><i class="fab fa-google"></i></button>
                        </div>
                    </div>


                    <!--Footer-->
                    <div class="modal-footer mx-5 pt-3 mb-1">
                        <p class="font-small grey-text d-flex justify-content-end">Already a member? <a v-on:click="clickLoginBtn()" href="#" class="blue-text ml-1">
                            Login</a></p>
                    </div>
                </div>
                <!--/.Content-->
            </div>
        </div>



    </form>


</div>
</template>

<script>
	import $ from 'jquery'
	export default {
		name: "headerLoggedOut",

		components:{
		},
		data() {
			return {
				loginUsername: '',
                loginPassword: '',
                signupUsername: '',
                signupPassword: '',
                signupPassword2: '',
				activeBtn: '',
				loginStatus: 0
			}
		},
        created() {

            console.log( )
            switch (this.$router.currentRoute["name"].toLowerCase()) {
            	case "home" : {
            		this.activeBtn = "btn1"
            		break;
                }
				case "pricing" : {
					this.activeBtn = "btn3"
					break;
				}
				case "blog" : {
					this.activeBtn = "btn2"
					break;
				}
				case "profile" : {
					this.activeBtn = "btn4"
					break;
				}
				case "my-git" : {
					this.activeBtn = "btn5"
					break;
				}
				case "support" : {
					this.activeBtn = "btn6"
					break;
				}
                default :{
                    this.activeBtn = ""
                }

			}
		},
		methods:{

            logIn: function () {
				const $field = $("#Form-login-email1")
				const $field1 = $("#Form-login-pass1")
            	if(this.validateEmail(this.loginUsername)){
            		console.log("Dobar email")
					$field.css("color","black")

					if(this.loginPassword.length > 0){
						console.log("Dobar password")
						$field1.css("color","")

						this.$store.dispatch('setLoggedIn', 1)
						console.log("Da li je uspeo login = " + this.$store.getters.getLoggedIn)


					}else{

						$field1.css("color","red")
						console.log("Los password")
					}
                }else{

                    $field.css("color","red")
            		console.log("Los email")
                }
			},

            logout: function(){
                this.$store.dispatch("logout", null)
                this.$router.push({name:"Home"})
            },

			checkStatus: function () {
				this.loginStatus = this.$store.getters.getLoggedIn

				console.log("Ovde? status je = " + this.loginStatus)
				return this.loginStatus

			},

            validateEmail :function (email) {
            	console.log(email)
				const re = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/;
				return re.test(String(email).toLowerCase());
			},

			validatePassword :function (password) {
				const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
				return re.test(String(password).toLowerCase());
			},

			goToHome: function () {
				this.$router.push({path: '/'})

			},
			goToBlog: function () {
				this.$router.push({name: 'blog'})

			},
			goToPricing: function () {
				this.$router.push({name: 'pricing'})

			},
			goToProfile: function () {
				this.$router.push({name: 'profile'})

			},
			goToMyGit: function () {
				this.$router.push({name: 'myGit'})

			},
			goToSupport: function () {
				this.$router.push({name: 'support'})

			},
            goToSearch: function () {
            	this.$router.push({name: 'search'})
            },

            clickLoginBtn: function(){
				document.getElementById("closeSignupBtn").click()
				document.getElementById("loginBtn").click()
            },
			clickSignUpBtn: function(){
				document.getElementById("closeLoginBtn").click()
				document.getElementById("signupBtn").click()
			},

            setActiveBtn: function(ime){
				this.activeBtn = ime
            }
		},
        mounted() {
            $('.navdugmici').on('click', function() {
                console.log("KLIK")
                $('.navbar-collapse').collapse('hide');
            });
        }
    }


</script>

<style scoped>

</style>


<style>
    .active{
        margin-top: -1px;
        font-size: 110%;
        background: green !important;
        color: white !important;
        border-radius: 10px;

    }

    .form-elegant .font-small {
        font-size: 0.8rem; }

    .form-elegant .z-depth-1a {
        -webkit-box-shadow: 0 2px 5px 0 rgba(55, 161, 255, 0.26), 0 4px 12px 0 rgba(121, 155, 254, 0.25);
        box-shadow: 0 2px 5px 0 rgba(55, 161, 255, 0.26), 0 4px 12px 0 rgba(121, 155, 254, 0.25); }

    .form-elegant .z-depth-1-half,
    .form-elegant .btn:hover {
        -webkit-box-shadow: 0 5px 11px 0 rgba(85, 182, 255, 0.28), 0 4px 15px 0 rgba(36, 133, 255, 0.15);
        box-shadow: 0 5px 11px 0 rgba(85, 182, 255, 0.28), 0 4px 15px 0 rgba(36, 133, 255, 0.15); }

    .form-elegant .modal-header {
        border-bottom: none; }

    .modal-dialog .form-elegant .btn .fab {
        color: #2196f3!important; }

    .form-elegant .modal-body, .form-elegant .modal-footer {
        font-weight: 400; }


</style>