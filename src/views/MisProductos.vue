<template>
    <div>




	<!-- ================ top product area start ================= -->	
<section class="mt-5 related-product-area">
	<div class="container mt-5">
		<div class="section-intro pb-60px">
            <p>Productos actualmente en venta</p>
        </div>
        <div class="row mt-30">

        <div class="col-sm-6 col-xl-3 mb-4 mb-xl-0" v-for="(Producto , index) in misProductos" v-bind:key="index">

            <div class="single-search-product-wrapper w-100">
                <div class="single-search-product d-flex justify-content-between">
                    <img v-bind:src="Producto.Imagen" alt="">
                    <div class="desc w-100">
                        <router-link v-bind:to="{name: 'productoDetalle', params:{Producto_id:Producto.Producto_id}}" class="title">{{Producto.Nombre}}</router-link>
                        <div class="price">${{Producto.Precio}}</div>
                    </div>
                    <div class="d-flex align-items-center justify-content-between w-25">
                        <router-link class="icon_btn m-auto d-flex align-items-center justify-content-center" v-bind:to="{name: 'productoEditar', params:{Producto_id:Producto.Producto_id}}"><i class="lnr lnr lnr-pencil"></i></router-link>
                    </div>
                </div>
            </div>

        </div>


        </div>
	</div>
</section>
	<!-- ================ top product area end ================= -->	






    </div>
</template>

<script>
import {firebase,db} from '../firebase.js';
export default {
    name:'misproductos',
    data(){
        return{
            misProductos:[],
        }
    },

    
    created(){
          db.collection('Productos').where('Publicador_id','==', firebase.auth().currentUser.uid).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) =>{
              //console.log(doc.data())
                 const data ={
                   'Producto_id': doc.data().Producto_id,
                   'Imagen': doc.data().Imagen,
                   'Nombre': doc.data().Nombre,
                   'Categoria': doc.data().Categoria,
                   'Precio': doc.data().Precio,
                   'Descripcion': doc.data().Descripcion,
                   'Publicador_id': doc.data().Publicador_id,
                 }
                 this.misProductos.push(data)
            })
          });      
    },


}
</script>