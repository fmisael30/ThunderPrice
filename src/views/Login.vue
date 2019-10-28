<template class="">
<div class="">


  
  <!--================Login Box Area =================-->
	<section class="login_box_area section-margin">
		<div class="container">
			<div class="row">
				<div class="col-lg-6">
					<div class="login_box_img">
						<div class="hover">
							<h4>New to our website?</h4>
							<p>There are advances being made in science and technology everyday, and a good example of this is the</p>
							<router-link class="button button-account" to="/register">Create an Account</router-link>				
						</div>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="login_form_inner">
						<h3>Log in to enter</h3>
						<form class="row login_form" action="#/" id="contactForm" @submit.prevent>
							<div class="col-md-12 form-group">
								<input type="text" class="form-control" id="name" name="name" placeholder="Email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email'"  v-model="email">
							</div>
							<div class="col-md-12 form-group">
								<input type="text" class="form-control" id="name" name="name" placeholder="Password" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Password'" v-model="password">
							</div>
							<div class="col-md-12 form-group">
								<button type="submit" value="submit" class="button button-login w-100" @click="Funcion_Logearse">Log In</button>
								<router-link to="/recovery">Forgot Password?</router-link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!--================End Login Box Area =================-->

</div>
</template>




<script>
import firebase from '../firebase.js'
import Swal from 'sweetalert';
export default {
    name:'Login',
    data(){
      return{
          
          email:'',
          password:'',
            
      }
    },

    methods:{

        Funcion_Logearse: function(){
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
            () => {
            Swal({ title: "Inicio de sesion exitoso" , text: "la sesion se ha iniciado sin problemas, ya puede comenzar a utilizar la plataforma", icon: "success"}).then(() =>{this.$router.go('/inicio')})
            },
            (err) =>{
            Swal({ title: "Error!", text: err.message, icon: "error"})
            }
        )
        },

    },


};
</script>