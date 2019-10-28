<template>
  <div>

 <!--================ Start Header Menu Area =================-->
	<header class="header_area shadow">
    <div class="main_menu">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
          <router-link class="navbar-brand logo_h" to="/inicio"><img src="../assets/img/logo.png" width="200"></router-link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
            <ul class="nav navbar-nav menu_nav ml-auto mr-auto">
              <li class="nav-item active"><router-link class="nav-link" to="/inicio">Home</router-link></li>
              <li class="nav-item submenu dropdown">
                <router-link to="/#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                  aria-expanded="false">Shop</router-link>
                <ul class="dropdown-menu">
                  <li class="nav-item"><router-link class="nav-link" to="/category">Shop Category</router-link></li>
                  <li class="nav-item"><router-link class="nav-link" to="/single-product">Product Details</router-link></li>
                  <li class="nav-item"><router-link class="nav-link" to="/checkout">Product Checkout</router-link></li>
                  <li class="nav-item"><router-link class="nav-link" to="/confirmation">Confirmation</router-link></li>
                  <li class="nav-item"><router-link class="nav-link" to="/cart">Shopping Cart</router-link></li>
                </ul>
							</li>
              <li class="nav-item submenu dropdown">
                <router-link to="/#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                  aria-expanded="false">Blog</router-link>
                <ul class="dropdown-menu">
                  <li class="nav-item"><router-link class="nav-link" to="/blog">Blog</router-link></li>
                  <li class="nav-item"><router-link class="nav-link" to="/single-blog">Blog Details</router-link></li>
                </ul>
							</li>
							<li class="nav-item submenu dropdown">
                <router-link to="/#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                  aria-expanded="false">Pages</router-link>
                <ul class="dropdown-menu">
                  <li class="nav-item"><router-link class="nav-link" to="/login">Login</router-link></li>
                  <li class="nav-item"><router-link class="nav-link" to="/register">Register</router-link></li>
                  <li class="nav-item"><router-link class="nav-link" to="/recovery">Recovery</router-link></li>
                  <li class="nav-item"><router-link class="nav-link" to="/crud">CRUD</router-link></li>
                  <li class="nav-item"><router-link class="nav-link" to="/productos">Productos</router-link></li>
                </ul>
              </li>
              <li class="nav-item"><router-link class="nav-link" to="/contact">Contact</router-link></li>
            </ul>

            <ul class="nav-shop">
              <li class="nav-item"><button><i class="ti-search"></i></button></li>
              <li class="nav-item"><button><i class="ti-shopping-cart"></i><span class="nav-shop__circle">3</span></button> </li>
              <li class="nav-item submenu dropdown">
                <button data-toggle="dropdown" class="button button-header dropdown-toggle" v-if="usuario">{{usuario}}</button>
                <div class="dropdown-menu">
                  <button style="padding:0 12px; margin:auto !important;text-align:center;width:100%;" @click="Desloguearse">Cerrar sesion</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
	<!--================ End Header Menu Area =================-->

  </div>
</template>

<script>
import firebase from '../firebase.js';
import Swal from 'sweetalert';
export default {
  name: 'Navegacion',
  data(){
    return{
      usuario:null,
    }
  },




  created(){
    let self = this;
    if(firebase.auth().currentUser){
        self.usuario = firebase.auth().currentUser.email
    }
    else{
      this.usuario = null
    }
  },

  methods:{
    Desloguearse: function(){
      Swal({ title: "Cerrando sesion" , text: "Esta seguro que desea cerrar la sesion?", icon: "warning", buttons:["cancelar","cerrar sesion"],})
        .then((cerrar_sesion) => {
          if(cerrar_sesion){
          firebase.auth().signOut().then(() =>{this.$router.go('/inicio')})
        }
      })
    },
  }


}
</script>
