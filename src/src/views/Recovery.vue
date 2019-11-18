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
							<router-link class="button button-account" to="/login">Login Now</router-link>					
						</div>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="login_form_inner">
						<h3>Account recovery</h3>
						<form class="row login_form" action="#/" id="contactForm" @submit.prevent>
							<div class="col-md-12 form-group">
								<input type="text" class="form-control" id="name" name="name" placeholder="emailAddress" onfocus="this.placeholder = ''" onblur="this.placeholder = 'emailAddress'"  v-model="emailAddress">
							</div>
							<div class="col-md-12 form-group">
								<button type="submit" value="submit" class="button button-login w-100" @click="Funcion_Recuperacion">Send Request</button>
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
    name:'Recovery',
    data(){
      return{
            emailAddress:'',
      }
    },

    methods:{
      
        Funcion_Recuperacion: function(){
        firebase.auth().sendPasswordResetEmail(this.emailAddress).then(function() {
            Swal({ title: "Verifica tu correo" , text: "Hemos enviado un link a tu correo para recuperar tu clave", icon: "success"})
            }).catch(function(error) {
            Swal({ title: "Oops !", text: error.message, icon: "error"})
            });
        },

    },


};
</script>