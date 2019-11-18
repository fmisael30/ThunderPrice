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
                              <th scope="col">Quantity</th>
                              <th scope="col">Total</th>
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
                                  <div class="product_count">
                                      <input type="text" name="qty" id="sst" maxlength="12" value="1" title="Quantity:"
                                          class="input-text qty">
                                      <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;"
                                          class="increase items-count" type="button"><i class="lnr lnr-chevron-up"></i></button>
                                      <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;"
                                          class="reduced items-count" type="button"><i class="lnr lnr-chevron-down"></i></button>
                                  </div>
                              </td>
                              <td>
                                  <h5>${{Productos.Precio * Productos.Cantidad}}</h5>
                              </td>
                          </tr>

                          <tr class="bottom_button">
                              <td>
                                  <a class="button" href="#">Update Cart</a>
                              </td>
                              <td>

                              </td>
                              <td>

                              </td>
                              <td>
                                  <div class="cupon_text d-flex align-items-center">
                                      <input type="text" placeholder="Coupon Code">
                                      <a class="primary-btn" href="#">Apply</a>
                                      <a class="button" href="#">Have a Coupon?</a>
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
                                  <h5>$2160.00</h5>
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
                                      <router-link to="/productos" class="gray_btn">Continue Shopping</router-link>
                                      <router-link to="/checkout" class="primary-btn ml-2">Proceed to checkout</router-link>
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
import {db} from '../firebase.js';
export default {
    name: 'Carrito',
    data(){
        return{
            Productos_enCarrito:[],
        }
    },

        created(){        

          db.collection('Carrito').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) =>{
              //console.log(doc.data())
                 const data ={
                   'Producto_id': doc.data().Producto_id,
                   'Imagen': doc.data().Imagen,
                   'Nombre': doc.data().Nombre,
                   'Categoria': doc.data().Categoria,
                   'Precio': doc.data().Precio,
                   'Descripcion': doc.data().Descripcion,
                 }
                 this.Productos_enCarrito.push(data)
            })
          });

          
    },
}
</script>