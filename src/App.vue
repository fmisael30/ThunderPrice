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
  },

};
 
</script>
<style>
    @import"./assets/vendors/bootstrap/bootstrap.min.css";
    @import"./assets/vendors/nouislider/nouislider.min.css";
    @import"./assets/vendors/owl-carousel/scss/owl.theme.default.css";
    @import"./assets/vendors/owl-carousel/scss/owl.carousel.css";   
    @import"./assets/scss/style.css";
</style>