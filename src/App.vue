<template>
  <div id="app">
    <BarraDeNavegacion/>
    <router-view class="site-main"/>
    <PieDePagina/>
  </div>
</template>






<script>
export default {
  components:{
    BarraDeNavegacion: () => import('./components/Navegacion.vue'),
    PieDePagina: () => import('./components/Footer.vue'),
  },
  data(){
    return{

    }
  }
};
  import "./assets/vendors/jquery/jquery-3.2.1.min.js";
  import "./assets/vendors/bootstrap/bootstrap.bundle.min.js";
  import "./assets/vendors/owl-carousel/js/owl.carousel.js";
  import "./assets/vendors/skrollr.min.js";
  import "./assets/vendors/nice-select/jquery.nice-select.min.js";
  import "./assets/vendors/jquery.ajaxchimp.min.js";
  import "./assets/vendors/mail-script.js";
  import "./assets/js/main.js"; 
</script>
<style>
    @import"./assets/vendors/bootstrap/bootstrap.min.css";
    @import"./assets/vendors/fontawesome/css/all.min.css";
    @import"./assets/vendors/themify-icons/themify-icons.css";
    @import"./assets/vendors/linericon/style.css";
    @import"./assets/vendors/nice-select/nice-select.css";
    @import"./assets/vendors/nouislider/nouislider.min.css";
    @import"./assets/vendors/owl-carousel/scss/owl.theme.default.css";
    @import"./assets/vendors/owl-carousel/scss/owl.carousel.css";   
    @import"./assets/scss/style.css";
</style>