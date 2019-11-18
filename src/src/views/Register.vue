<template>
<div class="">

 

  
  <!--================Login Box Area =================-->
	<section class="login_box_area section-margin">
		<div class="container">
			<div class="row">
				<div class="col-lg-6">
					<div class="login_box_img">
						<div class="hover">
							<h4>Already have an account?</h4>
							<p>There are advances being made in science and technology everyday, and a good example of this is the</p>
							<router-link class="button button-account" to="/login">Login Now</router-link>				
						</div>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="login_form_inner register_form_inner">
						<h3>Create an account</h3>
						<form class="row login_form" action="#/" id="register_form"  @submit.prevent>
							<div class="col-md-12 form-group">
								<input type="text" class="form-control" id="name" name="name" placeholder="Username" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Username'" v-model="nombre">
							</div>
							<div class="col-md-12 form-group">
								<input type="text" class="form-control" id="email" name="email" placeholder="Email Address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email Address'" v-model="email">
							</div>
							<div class="col-md-12 form-group">
								<input type="password" class="form-control" id="password" name="password" placeholder="Password" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Password'" v-model="password">
							</div>
							<div class="col-md-12 form-group">
								<input type="password" class="form-control" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Confirm Password'" v-model="password">
							</div>
							<div class="col-md-12 form-group">
								<button type="submit" value="submit" class="button button-register w-100" @click="Funcion_Registrarse">Register</button>
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
    name:'Register',
    data(){
      return{

          nombre:'',
          email:'',
          password:'',
            
      }
    },

    methods:{

        Funcion_Registrarse: function(){
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
            () => {
            Swal({ title: "Registro de cuenta exitoso" , text: "la cuenta se ha registrado sin problemas, ya puede comenzar a utilizar la plataforma", icon: "success"}).then(() =>{this.$router.replace('/inicio')})
            },
            (err) =>{
            Swal({ title: "Error!", text: err.message, icon: "error"})
            }
        )
        },

    },


};
</script>