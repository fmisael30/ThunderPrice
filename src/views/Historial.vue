<template>
    <div>



  
  <!--================Order Details Area =================-->
  <section class="order_details section-margin--small">
    <div class="container">
      <div class="row mb-5" v-for="(ReciboItem, index) in Recibo" :key="index">
        <div class="col-md-5 col-xl-5">
          <div class="confirmation-card">
            <h3 class="billing-title">Order Info</h3>
            <table class="order-rable">
              <tr>
                <td>Order id</td>
                <td>: {{ReciboItem.Recibo_id}}</td>
              </tr>
              <tr>
                <td>Date</td>
                <td>: Oct 03, 2017</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>: {{ReciboItem.Recibo_Total}}</td>
              </tr>
              <tr>
                <td>Payment method</td>
                <td>: Demo</td>
              </tr>
            </table>
          </div>
        </div>
        <div class="col-md-7 col-xl-7">
          <div class="confirmation-card table-responsive">
                <h3 class="billing-title">Order Details</h3>
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(Detail, index ) in ReciboItem.Recibo_Detalles" :key="index">
                        <td>
                          <p>{{Detail.Nombre}}</p>
                        </td>
                        <td>
                          <h5>{{Detail.Cantidad}}</h5>
                        </td>
                        <td>
                          <p>${{Detail.Precio}}</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--================End Order Details Area =================-->






    </div>
</template>


<script>
import {firebase,db} from '../firebase.js';
//import Swal from 'sweetalert';
export default {
    name:'Confirmation',
    data(){
        return{
            Recibo:[],
            Detalles:[],
        }
    },

    
    created(){
          db.collection('Recibos').where('Comprador_id','==', firebase.auth().currentUser.uid).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) =>{
                 const data ={
                   'Recibo_id': doc.data().Recibo_id,
                   'Recibo_Total': doc.data().Total,
                   'Recibo_Detalles': doc.data().Detalles,
                 }
                 this.Recibo.push(data)
            })
          });
    },



}
</script>