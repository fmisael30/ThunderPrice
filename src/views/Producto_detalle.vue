<template class="">
<div class="">






  <!--================Single Product Area =================-->
	<div class="product_image_area">
		<div class="container">
			<div class="row s_product_inner">
				<div class="col-lg-6">
                    <div style="padding:10px; position:relative; width:100%; margin:auto !important;">
                        <img class="img-fluid" v-bind:src="Imagen" style="min-width:100%;max-width:100%; object-fit:cover !important; margin:auto !important;">
                    </div>
				</div>
				<div class="col-lg-5 offset-lg-1">
					<div class="s_product_text">
                    <h3>{{Nombre}}</h3>
                    <h2>${{Precio}}</h2>
						<ul class="list">
                            <li><a class="active" href="#"><span>Category:</span>{{Categoria}}</a></li>
							<li><a href="#"><span>Availibility:</span>In Stock</a></li>
						</ul>
                        <p>{{Descripcion}}</p>
						<div class="product_count">
							<a href="#" class="button primary-btn" @click="Comprar">Comprar</a>               
						</div>
						<div class="card_area d-flex align-items-center">
							<router-link v-if="SePuedeEditar" class="icon_btn" v-bind:to="{name: 'productoEditar', params:{Producto_id:Producto_id}}"><i class="lnr lnr lnr-pencil"></i></router-link>
							<a class="icon_btn" @click="Agregar_Carrito" style="cursor:pointer;"><i class="lnr lnr lnr-cart"></i></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!--================End Single Product Area =================-->






</div>
</template>



<script>
import {firebase, db} from '../firebase.js';
import Swal from 'sweetalert';
export default {
name:'Producto_detalle',
data(){
    return{
        Producto_id:'null',
        Imagen:null,
        Nombre:null,
        Precio:null,
        Categoria:null,
        Descripcion:null,
        Publicador_id: null,
        SePuedeEditar: false,
        Usuario: null,
    }
},
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
beforeRouteEnter(to, from, next){
    db.collection('Productos').where('Producto_id','==',to.params.Producto_id).get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
                    //console.log(doc.data())
            next(vm => {
                vm.Producto_id = doc.data().Producto_id
                vm.Nombre = doc.data().Nombre
                vm.Precio = doc.data().Precio
                vm.Imagen = doc.data().Imagen
                vm.Categoria = doc.data().Categoria
                vm.Descripcion = doc.data().Descripcion
                vm.Publicador_id = doc.data().Publicador_id
            })
        })
    })
},
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
watch: {
    '$router': 'fetchData'
},
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    methods: {
        fetchData(){
            db.collection('Productos').where('Producto_id','==',this.$route.params.Producto_id).get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    //console.log(doc.data())
                    this.Producto_id = doc.data().Producto_id
                    this.Nombre = doc.data().Nombre
                    this.Precio = doc.data().Precio
                    this.Imagen = doc.data().Imagen
                    this.Categoria = doc.data().Categoria
                    this.Descripcion = doc.data().Descripcion
                    this.Publicador_id = doc.data().Publicador_id
                })
            })

            if(this.Usuario == this.Publicador_id){
                this.SePuedeEditar = firebase.auth().currentUser.uid
            }
            else{
                this.SePuedeEditar = false
            }
        },



        Agregar_Carrito(){
            let self = this;
            db.collection('Carrito').add({
            })
            .then(function(docRef) {

                      db.collection('Carrito').doc(docRef.id).set({
                        Producto_id: self.Producto_id,
                        Imagen: self.Imagen,
                        Nombre: self.Nombre,
                        Categoria: self.Categoria,
                        Precio: self.Precio,
                        Descripcion: self.Descripcion,
                        Cantidad: 1,
                        Usuario_id: firebase.auth().currentUser.uid,
                      })              

                Swal({ title: "Producto agregado al carrito", text: "Tu producto se ha sigo agregado a tu carrito", icon: "success", buttons: "ok"})
            })
            .catch(error => console.log(error))
        },

        Comprar(){
            let self = this;

            db.collection('Carrito').add({
            })
            .then(function(docRef) {

                      db.collection('Carrito').doc(docRef.id).set({
                        Producto_id: self.Producto_id,
                        Imagen: self.Imagen,
                        Nombre: self.Nombre,
                        Categoria: self.Categoria,
                        Precio: self.Precio,
                        Descripcion: self.Descripcion,
                        Cantidad: 1,
                        Usuario_id: firebase.auth().currentUser.uid,
                      })
                      .then(() =>{self.$router.go('carrito')})
            })
            .catch(error => console.log(error))
        },
        
        
    },
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
};
</script>