<template>
  <div>

 <!--================ Start Header Menu Area =================-->
	<header class="header_area shadow">
    <div class="main_menu">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container"  style="color: #222 !important;">
          <router-link class="navbar-brand logo_h" to="/inicio"><img src="../assets/img/logo.png" width="200"></router-link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
            <ul class="nav navbar-nav menu_nav ml-auto mr-auto">
              <li class="nav-item active"><router-link class="nav-link" to="/inicio" style="color:#222 !important;">Inicio</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/productos" style="color:#222 !important;">Productos</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/publicar" style="color:#222 !important;">Publicar</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/misproductos" style="color:#222 !important;">Mis Productos</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/historial" style="color:#222 !important;">Historial</router-link></li>
            </ul>

            <ul class="d-flex" style="color:#222 !important;">
              <li class="nav-item d-none"><button style="outline:none !important; border:none !important; background:none !important;"><i class="ti-search"></i></button></li>

              <li class="nav-item mr-3" v-if="!usuario"><router-link to="/login" style="outline:none !important; border:none !important; background:none !important;">Login</router-link></li>
              <li class="nav-item" v-if="!usuario"><router-link to="/register" style="outline:none !important; border:none !important; background:none !important;">Register</router-link></li>

              <li class="nav-item" v-if="usuario"><router-link to="/carrito" style="color:#222 !important; outline:none !important; border:none !important; background:none !important;"><i class="ti-shopping-cart"></i></router-link> </li>
              <li class="nav-item" v-if="usuario"></li>
              <li class="nav-item submenu dropdown" v-if="usuario">
                <button data-toggle="dropdown" class="dropdown-toggle" style="outline:none !important; border:none !important; background:none !important;"><i class="ti-user"></i></button>
                <div class="dropdown-menu" style="left:auto !important; right:0 !important;">
                  <button style="outline:none !important; border:none !important; background:none !important; padding:0 12px; margin:auto !important;text-align:center;width:100%;" @click="Desloguearse">Cerrar sesion</button>
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

  updated(){
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
