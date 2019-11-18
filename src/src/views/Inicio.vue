<template>
    <div>
        


    <!--================ Hero Carousel start =================-->
    <section class="section-margin mt-0">
      <div class="owl-carousel owl-theme hero-carousel">
        <div class="hero-carousel__slide">
          <img src="../assets/img/home/hero-slide1.png" alt="" class="img-fluid">
          <a href="#" class="hero-carousel__slideOverlay">
            <h3>Wireless Headphone</h3>
            <p>Accessories Item</p>
          </a>
        </div>
        <div class="hero-carousel__slide">
          <img src="../assets/img/home/hero-slide2.png" alt="" class="img-fluid">
          <a href="#" class="hero-carousel__slideOverlay">
            <h3>Wireless Headphone</h3>
            <p>Accessories Item</p>
          </a>
        </div>
        <div class="hero-carousel__slide">
          <img src="../assets/img/home/hero-slide3.png" alt="" class="img-fluid">
          <a href="#" class="hero-carousel__slideOverlay">
            <h3>Wireless Headphone</h3>
            <p>Accessories Item</p>
          </a>
        </div>
      </div>
    </section>
    <!--================ Hero Carousel end =================-->

    <!-- ================ trending product section start ================= -->  
    <section class="section-margin calc-60px">
      <div class="container">
        <div class="section-intro pb-60px">
          <p>Popular Item in the market</p>
          <h2>Trending <span class="section-intro__style">Product</span></h2>
        </div>
        <div class="row">

          <div class="col-md-6 col-lg-4 col-xl-3" v-for="(Producto , index) in Productos_Populares" v-bind:key="index">
            <router-link v-bind:to="{name: 'productoDetalle', params:{Producto_id:Producto.id}}">
              <div class="card text-center card-product">
                <div class="card-product__img">
                  <img class="card-img" v-bind:src="Producto.Imagen">
                  <ul class="card-product__imgOverlay d-none">
                    <li><button><i class="ti-search"></i></button></li>
                    <li><button @click="Agregar_Carrito"><i class="ti-shopping-cart"></i></button></li>
                    <li><button><i class="ti-heart"></i></button></li>
                  </ul>
                </div>
                <div class="card-body">
                  <p>{{Producto.Categoria}}</p>
                  <h4 class="card-product__title">{{Producto.Nombre}}</h4>
                  <p class="card-product__price">${{Producto.Precio}}</p>
                </div>
              </div>
            </router-link>
          </div><!---producto plus link--->
          

        </div>
      </div>
    </section>
    <!-- ================ trending product section end ================= -->  

    <!-- ================ offer section start ================= --> 
    <section class="offer" id="parallax-1" data-anchor-target="#parallax-1" data-300-top="background-position: 20px 30px" data-top-bottom="background-position: 0 20px">
      <div class="container">
        <div class="row">
          <div class="col-xl-5">
            <div class="offer__content text-center">
              <h3>Up To 50% Off</h3>
              <h4>Winter Sale</h4>
              <p>Him she'd let them sixth saw light</p>
              <a class="button button--active mt-3 mt-xl-4" href="#">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ================ offer section end ================= --> 

    <!-- ================ Best Selling item  carousel ================= --> 
    <section class="section-margin calc-60px">
      <div class="container">
        <div class="section-intro pb-60px">
          <p>Popular Item in the market</p>
          <h2>Best <span class="section-intro__style">Sellers</span></h2>
        </div>
        <div class="owl-carousel owl-theme" id="bestSellerCarousel">

          <div class="card text-center card-product" v-for="(Producto , index) in Productos_MasVendidos" v-bind:key="index">
            <div class="card-product__img">
              <img class="img-fluid" v-bind:src="Producto.Imagen" alt="">
            </div>
            <div class="card-body">
              <p>{{Producto.Categoria}}</p>
              <h4 class="card-product__title"><a href="single-product.html">{{Producto.Nombre}}</a></h4>
              <p class="card-product__price">${{Producto.Precio}}</p>
            </div>
          </div>


   
        </div>
      </div>
    </section>
    <!-- ================ Best Selling item  carousel end ================= --> 

    <!-- ================ Blog section start ================= -->  
    <section class="blog">
      <div class="container">
        <div class="section-intro pb-60px">
          <p>Popular Item in the market</p>
          <h2>Latest <span class="section-intro__style">News</span></h2>
        </div>

        <div class="row">
          <div class="col-md-6 col-lg-4 mb-4 mb-lg-0">
            <div class="card card-blog">
              <div class="card-blog__img">
                <img class="card-img rounded-0" src="../assets/img/blog/blog1.png" alt="">
              </div>
              <div class="card-body">
                <ul class="card-blog__info">
                  <li><a href="#">By Admin</a></li>
                  <li><a href="#"><i class="ti-comments-smiley"></i> 2 Comments</a></li>
                </ul>
                <h4 class="card-blog__title"><a href="single-blog.html">The Richland Center Shooping News and weekly shooper</a></h4>
                <p>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</p>
                <a class="card-blog__link" href="#">Read More <i class="ti-arrow-right"></i></a>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 mb-4 mb-lg-0">
            <div class="card card-blog">
              <div class="card-blog__img">
                <img class="card-img rounded-0" src="../assets/img/blog/blog2.png" alt="">
              </div>
              <div class="card-body">
                <ul class="card-blog__info">
                  <li><a href="#">By Admin</a></li>
                  <li><a href="#"><i class="ti-comments-smiley"></i> 2 Comments</a></li>
                </ul>
                <h4 class="card-blog__title"><a href="single-blog.html">The Shopping News also offers top-quality printing services</a></h4>
                <p>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</p>
                <a class="card-blog__link" href="#">Read More <i class="ti-arrow-right"></i></a>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 mb-4 mb-lg-0">
            <div class="card card-blog">
              <div class="card-blog__img">
                <img class="card-img rounded-0" src="../assets/img/blog/blog3.png" alt="">
              </div>
              <div class="card-body">
                <ul class="card-blog__info">
                  <li><a href="#">By Admin</a></li>
                  <li><a href="#"><i class="ti-comments-smiley"></i> 2 Comments</a></li>
                </ul>
                <h4 class="card-blog__title"><a href="single-blog.html">Professional design staff and efficient equipment you’ll find we offer</a></h4>
                <p>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</p>
                <a class="card-blog__link" href="#">Read More <i class="ti-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ================ Blog section end ================= -->  





    </div>
</template>














<script>
import {firebase, db} from '../firebase.js'
import Swal from 'sweetalert'
export default {
    name: 'inicio',
    data(){
        return{
            usuario: null,
            Productos_Populares:[],
            Productos_MasVendidos:[
              {'Imagen':'', 'Categoria':'categoria va aqui', 'Nombre':'nombre provisional', 'Precio':'123'},
              {'Imagen':'', 'Categoria':'categoria va aqui', 'Nombre':'nombre provisional', 'Precio':'123'},
              {'Imagen':'', 'Categoria':'categoria va aqui', 'Nombre':'nombre provisional', 'Precio':'123'},
              {'Imagen':'', 'Categoria':'categoria va aqui', 'Nombre':'nombre provisional', 'Precio':'123'},
              {'Imagen':'', 'Categoria':'categoria va aqui', 'Nombre':'nombre provisional', 'Precio':'123'},
            ],

            Producto_id:null,
            Imagen:null,
            Nombre:null,
            Categoria:null,
            Descripcion:null,
            Precio:null,
            Cantidad: 1,
        }
    },

    /*eslint-disable */
    beforeRouteEnter(to, from, next) {
      next(vm => {
          $('.owl-carousel').owlCarousel();
      })
    },
    /*eslint-enable */


    created(){        

          db.collection('Productos').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) =>{
              //console.log(doc.data())
                 const data ={
                   'id': doc.data().Producto_id,
                   'Imagen': doc.data().Imagen,
                   'Nombre': doc.data().Nombre,
                   'Categoria': doc.data().Categoria,
                   'Precio': doc.data().Precio,
                 }
                 this.Productos_Populares.push(data)
            })
          });

          
    },

    
    methods:{       
        Funcion_desloguearse: function(){
           Swal({ title: "Cerrando sesion de "+this.usuario , text: "vuelva pronto!", icon: "warning"})
           .then(() => {
                 firebase.auth().signOut();
               }
            )
        },        

        Agregar_Carrito(){
            let self = this;

            db.collection('Carrito').add({
            })
            .then(function(docRef) {

                      db.collection('Carrito').doc(docRef.id).set({
                        id: docRef.id,
                        Producto_id: self.Producto_id,
                        Imagen: self.Imagen,
                        Nombre: self.Nombre,
                        Categoria: self.Categoria,
                        Precio: self.Precio,
                        Descripcion: self.Descripcion,
                        Cantidad: self.Cantidad,
                      })              

                Swal({ title: "Producto agregado al carrito", text: "Tu producto se ha sigo agregado a tu carrito", icon: "success", buttons: "ok"})
            })
            .catch(error => console.log(error))
        },
    },


  computed: {
    Productos_Populares_Filter() {
      return this.Productos_Populares
    }
  },
//////////////////////////////////////////////////////////////////////////////////////////////////////////
};
</script>