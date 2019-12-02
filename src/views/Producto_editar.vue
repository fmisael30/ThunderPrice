<template class="">
<div class="">






  <!--================Single Product Area =================-->
	<div class="product_image_area">
		<div class="container">
			<div class="row s_product_inner">
				<div class="col-lg-6">
                    <div style="padding:10px; position:relative; width:100%; margin:auto !important;">
                        <img class="img-fluid" v-bind:src="Imagen" style="min-width:100%;max-width:100%; object-fit:cover !important; margin:auto !important;">
                        <input type="file" accept="image/*" v-on:change="seleccionar_image">
                    </div>
				</div>
				<div class="col-lg-5 offset-lg-1">
					<div class="s_product_text">
                    <h3><input type="text" v-model="Nombre"></h3>
                    <h2>$ <input type="number" v-model="Precio"></h2>
						<ul class="list">
                            <li><a class="active" href="#"><span>Category:</span><input type="text" v-model="Categoria"></a></li>
							<li><a href="#"><span>Availibility:</span>In Stock</a></li>
						</ul>
                        <p><textarea name="" id="" cols="30" rows="5" v-model="Descripcion"></textarea></p>
						<div class="product_count">
							<a href="#" class="button primary-btn mb-5" @click="Guardar_Cambios">Guardar cambios</a>      
							<a href="#" class="button primary-btn" @click="Borrar_item">Eliminar Producto</a>            
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
import {db,ref} from '../firebase.js'
import Swal from 'sweetalert';
export default {
name:'Producto_editar',
data(){
    return{
        Producto_id: null,
        Imagen:null,
        Nombre:null,
        Precio:null,
        Categoria:null,
        Descripcion:null,
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
                })
            })
        },


        seleccionar_image(e){
          const file = e.target.files[0];
          console.log(file)
          let selectedFile = ref.child('Productos/'+file.name)
          selectedFile.put(file).then(response =>{
            response.ref.getDownloadURL().then((downloadURL) => {  
              this.Imagen = downloadURL
            })
          }).catch(err => console.log(err))  
        },          

        Guardar_Cambios(){
            
            db.collection('Productos').where('Producto_id', '==' , this.$route.params.Producto_id).get().then(querySnapshot =>{
                querySnapshot.forEach(doc => {
                    doc.ref.update({
                        Imagen: this.Imagen,
                        Nombre: this.Nombre,
                        Categoria: this.Categoria,
                        Precio: this.Precio,
                        Descripcion: this.Descripcion,
                    })
                })
            })
            
            Swal({ title: "Producto editado", text: "Tu producto se ha sido editado sin problemas", icon: "success", button: "ok"})
            
      
        },


        Borrar_item: function(){
            db.collection('Productos').where('Producto_id', '==' , this.$route.params.Producto_id).get().then(querySnapshot =>{
                querySnapshot.forEach(doc => {
                    doc.ref.delete();
                })
            }),
            db.collection('Carrito').where('Producto_id', '==' , this.$route.params.Producto_id).get().then(querySnapshot =>{
                querySnapshot.forEach(doc => {
                    doc.ref.delete()
                      .then(() =>{self.$router.go(-1)});
                })
            })
        }

    },
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
};
</script>