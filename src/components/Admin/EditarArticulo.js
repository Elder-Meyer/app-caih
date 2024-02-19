import React, { useState } from 'react'
import { updateArticulo, getArticulos } from '../../App/fnArtculos'
import { app, eliminarImgStorage} from '../../App/firebaseStorage'
import Swal from 'sweetalert2'

export const EditarArticulo = ({articulo, getArticulosData, setEditar, setArticulos}) => {

    const [archivoUrl, setArchivoUrl] = useState("");

    const updateArticuloInfo = async(e, id, url) =>{
        e.preventDefault();
        const a = await getArticulos();
        
        let articulo      = e.target.articulo.value.toUpperCase();    
        let subtitulo     = e.target.subtitulo.value.toUpperCase();    
        let descripcion   = e.target.descripcion.value.toUpperCase();    
        let autor         = e.target.autor.value.toUpperCase();    
        
    
        eliminarImgStorage(url);
        console.log("archivo eliminado y actualizado")
        await updateArticulo(id, articulo, subtitulo, descripcion, autor, archivoUrl);
        getArticulosData();
        
        e.target.reset();

        setArticulos(a.docs);
        setEditar(0);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Datos actualizados correctamente',
          showConfirmButton: false,
          timer: 1500
        })
    }    


    const prepararArchivo = async(e)=>{
      const archivo = e.target.files[0];
      const storageRef = app.storage().ref();
      const archivoPath = storageRef.child(`imgArticulos/${new Date().getTime()}`);
      await archivoPath.put(archivo);
      console.log("archivo cargado:", archivo.name);
      
      const enlaceUrl = await archivoPath.getDownloadURL();
      setArchivoUrl(enlaceUrl);
    }    

  return (
    <div className='form-group bg-light p-2 rounded border border-warning border-2 m-0'>
        <form onSubmit={e=> updateArticuloInfo(e, articulo.id, articulo.data().urlImg)}>
            <label>Imagen: </label>     <input className='input-group' type="file" onChange={prepararArchivo} />
            <label>Articulo:</label>    <input className='form-control' type="text" name="articulo" defaultValue={articulo.data().articulo} />
            <label>Subtitulo:</label>   <input className='form-control' type="text" name="subtitulo" defaultValue={articulo.data().subtitulo} />
            <label>Descripcion:</label> <input className='form-control' type="text" name="descripcion" defaultValue={articulo.data().descripcion} />
            <label>Autor:</label>       <input className='form-control' type="text" name="autor" defaultValue={articulo.data().autor} />
            <label>Fecha:</label>       <input className='form-control' type="text" name="fechaSubida" defaultValue={articulo.data().fechaSubida} />
            
            <input type="submit" className='btn btn-success m-1' value="Actualizar" />
            <button className='btn btn-danger m-1' onClick={e=> setEditar(0)}>Cancelar</button>
        </form>
    </div>
  )
}
