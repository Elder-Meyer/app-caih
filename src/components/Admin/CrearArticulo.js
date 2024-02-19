import React , { useState }from 'react'
import { saveArticulo, getArticulos } from "../../App/fnArtculos"
import { app } from '../../App/firebaseStorage'
import Swal from 'sweetalert2'

export const CrearArticulo = ({setArticulos}) => {

    const [archivoUrl, setArchivoUrl] = useState("");
    const [btnDisabled, setBtnDisabled] = useState(true);
  
    const saveArticuloInfo = async(e) =>{
        e.preventDefault(); let target = e.target;
        let articulo      = target.articulo.value.toUpperCase();
        let subtitulo     = target.subtitulo.value.toUpperCase();
        let descripcion   = target.descripcion.value.toUpperCase();
        let autor         = target.autor.value.toUpperCase();
        await saveArticulo(articulo, subtitulo, descripcion, autor, archivoUrl);
        e.target.reset();
    
        const r = await getArticulos();
        setArticulos(r.docs);
        Swal.fire({
            position: 'center',
            icon: "success",
            title: 'Los datos han sido guardados :)',
            showConfirmButton: false,
            timer: 1500
        }) 
        setBtnDisabled(true);
    }
  
    const prepararArchivo = async(e) =>{
        const archivo       = e.target.files[0];
        const storageRef    = app.storage().ref();
        const archivoPath   = storageRef.child(`imgArticulos/${new Date().getTime()}`)
        await archivoPath.put(archivo);
        console.log("archivo cargado:", archivo.name);
    
        const enlaceUrl = await archivoPath.getDownloadURL();
        setArchivoUrl(enlaceUrl);
        setBtnDisabled(false);
    }  

  return (
    <>
    <h1>Administra los <strong>Articulos</strong></h1>
        <form onSubmit={saveArticuloInfo} className="p-2 m-1 d-inline-block border border-dark border-4">
            <label>Imagen: </label>     <input type="file" onChange={prepararArchivo}/><br/>
            <label>Articulo:</label>    <input type="text" placeholder="Articulo"     name="articulo" required/><br/>
            <label>subtitulo:</label>   <input type="text" placeholder="subtitulo"    name="subtitulo" required/><br/>
            <label>Descripcion:</label> <input type="text" placeholder="Descripcion"  name="descripcion" required/><br/>
            <label>Autor:</label>       <input type="text" placeholder="Autor"        name="autor" required/><br/>
            
            <input disabled={btnDisabled} className='btn btn-success' type="submit" value="Guardar" />
        </form>

        <hr className='border border-warning border-2'/>
    </>
  )
}
