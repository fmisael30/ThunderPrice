~~<template>
  <div>
									<div class="comment-form container shadow">
											<form>
													<div class="form-group form-inline">
															
                              <div class="form-group col-lg-6 col-md-6 name mb-3">
																	<input type="file" accept="image/*" class="form-control" id="imagen" placeholder="Imagen del producto" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Imagen del producto'" v-on:change="seleccionar_image">
															</div>

                              <div class="form-group col-lg-6 col-md-6 name mb-3">
																	<input type="text" class="form-control" id="nombre" placeholder="Nombre del producto" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Nombre del producto'" v-model="Nombre">
															</div>

                              <div class="form-group col-lg-6 col-md-6 name mb-3">
																	<input type="text" class="form-control" id="categoria" placeholder="Categoria del producto" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Categoria del producto'" v-model="Categoria">
															</div>

                              <div class="form-group col-lg-6 col-md-6 name mb-3">
																	<input type="number" class="form-control" id="precio" placeholder="Precio del producto" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Precio del producto'" v-model="Precio">
															</div>
													
                          </div>
													<div class="form-group">
															<textarea class="form-control mb-10" rows="5" name="descripcion" placeholder="Descripcion" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Messege'" required  v-model="Descripcion"></textarea>
													</div>
													<a href="#" class="button button-postComment button--active" @click="Publicar_Producto">Publicar Producto</a>
											</form>
									</div>
  </div>
</template>

<script>
import {db ,ref} from '../firebase.js'
import Swal from 'sweetalert';
export default {
  name:'CRUD',
  data(){
    return{
      Publicante: 'Beta Tester',
      Imagen:null,
      Nombre:null,
      Categoria:null,
      Precio:null,
      Descripcion:null,
    }
  },


  methods:{

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

        Publicar_Producto(){
            let self = this;

            db.collection('Productos').add({
            })
            .then(function(docRef) {

                      db.collection('Productos').doc(docRef.id).set({
                        Producto_id: docRef.id,
                        Imagen: self.Imagen,
                        Nombre: self.Nombre,
                        Categoria: self.Categoria,
                        Precio: self.Precio,
                        Descripcion: self.Descripcion,
                      })              

                Swal({ title: "Publicacion exitosa", text: "Tu producto se ha publicado", icon: "success", button: "ok"})
            })
            .catch(error => console.log(error))
        },


  },



};
</script>