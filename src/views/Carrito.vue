<template>
    <div>
          
  

  <!--================Cart Area =================-->
  <section class="cart_area">
      <div class="container">
          <div class="cart_inner">
              <div class="table-responsive">
                  <table class="table">
                      <thead>
                          <tr>
                              <th scope="col">Product</th>
                              <th scope="col">Price</th>
                              <th scope="col">Total</th>
                              <th scope="col">Borrar</th>
                          </tr>
                      </thead>
                      <tbody>

                          <tr v-for="(Productos, index) in Productos_enCarrito" :key="index">
                              <td>
                                  <div class="media">
                                      <div class="d-flex" style="width:250px; height:180px; overflow:hidden;">
                                          <img v-bind:src="Productos.Imagen" class="img-fluid" style="object-fit:cover !important;">
                                      </div>
                                      <div class="media-body">
                                          <p>{{Productos.Descripcion}}</p>
                                      </div>
                                  </div>
                              </td>
                              <td>
                                  <h5>${{Productos.Precio}}</h5>
                              </td>
                              <td>
                                  <h5>${{parseFloat(Productos.Precio)*parseFloat(Productos.Cantidad)}}</h5>
                              </td>
                              <td>
                                  <i class="lnr lnr lnr-trash" style="cursor:pointer;" @click="Borrar_item(Productos.Producto_id)"></i>
                              </td>
                          </tr>

                          <tr class="bottom_button">
                              <td>
                              </td>
                              <td>

                              </td>
                              <td>

                              </td>
                              <td>
                                  <div class="cupon_text d-flex align-items-center">
                                      <input type="text" placeholder="Coupon Code">
                                      <a class="primary-btn" href="#">Apply</a>
                                      <a class="button" href="#">Coupon?</a>
                                  </div>
                              </td>
                          </tr>
                          <tr>
                              <td>

                              </td>
                              <td>

                              </td>
                              <td>
                                  <h5>Subtotal</h5>
                              </td>
                              <td>
                                  <h5>${{total}}</h5>
                              </td>
                          </tr>
                          <tr class="out_button_area">
                              <td class="d-none-l">

                              </td>
                              <td class="">

                              </td>
                              <td>

                              </td>
                              <td>
                                  <div class="checkout_btn_inner d-flex align-items-center">
                                      <router-link to="/productos" class="gray_btn">Seguir comprando</router-link>
                                      <router-link to="/checkout" class="primary-btn ml-2">Realizar compra</router-link>
                                  </div>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
  </section>
  <!--================End Cart Area =================-->



    </div>
</template>

<script>
import {firebase,db} from '../firebase.js';
export default {
    name: 'Carrito',
    data(){
        return{
            Productos_enCarrito:[],
            Total:[],
        }
    },

    
    created(){
          db.collection('Carrito').where('Usuario_id','==', firebase.auth().currentUser.uid).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) =>{
              //console.log(doc.data())
                 const data ={
                   'Producto_id': doc.data().Producto_id,
                   'Imagen': doc.data().Imagen,
                   'Nombre': doc.data().Nombre,
                   'Categoria': doc.data().Categoria,
                   'Precio': doc.data().Precio,
                   'Descripcion': doc.data().Descripcion,
                   'Cantidad': doc.data().Cantidad,
                 }
                 this.Productos_enCarrito.push(data)
                 this.Total.push(parseInt(data.Precio)*parseInt(data.Cantidad))
                 //console.log(this.Total);
            })
          });      
    },

    methods:{
        Borrar_item: function(Producto_id){
            console.log(Producto_id)
            db.collection('Carrito').where('Producto_id', '==' , Producto_id).get().then(querySnapshot =>{
                querySnapshot.forEach(doc => {
                    doc.ref.delete();
                })
            })
        }
    },

  computed: {
    total: function(){
        return this.Total.reduce(function(total, item){
        return total + item; 
    },0);
  }
  }




}
</script>