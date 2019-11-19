<template>
    <div>







  <!--================Checkout Area =================-->
  <section class="checkout_area section-margin--small">
    <div class="container">

        <div class="billing_details">
            <div class="row justify-content-center alig-content-center align-items-center">
                <div class="col-lg-8">
                    <div class="order_box">
                        <h2>Your Order</h2>
                        <ul class="list">
                            <li v-for="(Producto, index) in Productos_enCarrito" :key="index">
                                <a href="#">{{Producto.Nombre}} <span class="middle">x {{Producto.Cantidad}}</span> <span class="last">${{parseFloat(Producto.Precio)*parseFloat(Producto.Cantidad)}}</span>
                                </a>
                            </li>
                        </ul>
                        <ul class="list list_2">
                            <li><a href="#">Total <span>${{Total}}</span></a></li>
                        </ul>
                        <div class="payment_item">
                            <div class="radion_btn">
                                <input type="radio" id="f-option5" name="selector">
                                <label for="f-option5">Check payments</label>
                                <div class="check"></div>
                            </div>
                            <p>Please send a check to Store Name, Store Street, Store Town, Store State / County,
                                Store Postcode.</p>
                        </div>
                        <div class="payment_item active">
                            <div class="radion_btn">
                                <input type="radio" id="f-option6" name="selector">
                                <label for="f-option6">Paypal </label>
                                <img src="img/product/card.jpg" alt="">
                                <div class="check"></div>
                            </div>
                            <p>Pay via PayPal; you can pay with your credit card if you don’t have a PayPal
                                account.</p>
                        </div>
                        <div class="creat_account">
                            <input type="checkbox" id="f-option4" name="selector">
                            <label for="f-option4">I’ve read and accept the </label>
                            <a href="#">terms & conditions*</a>
                        </div>
                        <div class="text-center">
                          <a class="button button-paypal" href="#">Proceed to Paypal</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
  <!--================End Checkout Area =================-->







    </div>
</template>

<script>
import {db} from '../firebase.js';
export default {
    name:'Checkout',
    data(){
        return{
            Productos_enCarrito:[],
            Total:[],
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
                   'Cantidad': doc.data().Cantidad,
                 }
                 this.Productos_enCarrito.push(data)
                 this.Total.push(parseInt(data.Precio)*parseInt(data.Cantidad))
                 console.log(this.Total);
            })
          });      
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