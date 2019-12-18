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
                    <a href="#">
                      {{Producto.Nombre}}
                      <span class="middle">x {{Producto.Cantidad}}</span>
                      <span
                        class="last"
                      >${{parseFloat(Producto.Precio)*parseFloat(Producto.Cantidad)}}</span>
                    </a>
                  </li>
                </ul>
                <ul class="list list_2">
                  <li>
                    <a href="#">
                      Total
                      <span>${{total}}</span>
                    </a>
                  </li>
                </ul>
                <div class="text-center">
                  <a
                    @click="Generar_Recibo()"
                    class="button button-paypal"
                    href="#"
                  >Proceed to Paypal</a>
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
import { firebase, db } from "../firebase.js";
import Swal from 'sweetalert';
export default {
  name: "Checkout",
  data() {
    return {
      Productos_enCarrito: [],
      Total: []
    };
  },

  created() {
    db.collection("Carrito")
      .where("Usuario_id", "==", firebase.auth().currentUser.uid)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          //console.log(doc.data())
          const data = {
            Producto_id: doc.data().Producto_id,
            Imagen: doc.data().Imagen,
            Nombre: doc.data().Nombre,
            Categoria: doc.data().Categoria,
            Precio: doc.data().Precio,
            Descripcion: doc.data().Descripcion,
            Cantidad: doc.data().Cantidad
          };
          this.Productos_enCarrito.push(data);
          this.Total.push(parseInt(data.Precio) * parseInt(data.Cantidad));
          //console.log(this.Total);
        });
      });
  },

  computed: {
    total: function() {
      return this.Total.reduce(function(total, item) {
        return total + item;
      }, 0);
    }
  },

  methods: {
    Generar_Recibo() {
      let self = this;
      db.collection("Recibos")
        .add({})
        .then(function(docRef) {
          db.collection("Recibos")
            .doc(docRef.id)
            .set({
              Recibo_id: docRef.id,
              Comprador_id: firebase.auth().currentUser.uid,
              Detalles: self.Productos_enCarrito,
              Total: self.total,
            });

          Swal({
            title: "Compra realizada",
            text: "Puedes verificar tus compras en tu historial",
            icon: "success",
            buttons: "ok"
          })
        }).then(() =>{
            db.collection('Carrito').where('Usuario_id', '==' , firebase.auth().currentUser.uid).get().then(querySnapshot =>{
                querySnapshot.forEach(doc => {
                    doc.ref.delete()
                        .then(() =>{self.$router.replace('/historial')});
                })
            })
        })
        .catch(error => console.log(error));

        

    }
  }
};
</script>