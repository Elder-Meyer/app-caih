import React, { useState } from 'react'                         //propio de react
import { saveProject, getProjects } from "../../App/fnProyectos" //funciones de crud
import { app } from "../../App/firebaseStorage"
import Swal from 'sweetalert2'

export const CrearProyecto = ({setProjects}) => {                        //el componente recibe el estado para modificarlo desde qeuí
  
  const [archivoUrl, setArchivoUrl] = useState("");             //pone y obtiene la url de la imagen
  const [btnDisabled, setBtnDisabled] = useState(true);         //activa el boton de enviar una vez cargada la imagen
  
  const saveProjectInfo = async(e) => {                              //guarda los datos de la persona al hacer click en guardar
    e.preventDefault(); let target = e.target;
    let titulo      = target.titulo.value.toUpperCase();    
    let subtitulo   = target.subtitulo.value.toUpperCase();    
    let descripcion = target.descripcion.value;    
    let autor       = target.autor.value.toUpperCase();    
    await saveProject(titulo, subtitulo, descripcion, autor,  archivoUrl); //se llama a la función externa que permite guardar
    e.target.reset();

    const p = await getProjects();                               //obtiene los nuevos datos
    setProjects(p.docs);                                         //los datos se le ponen al estado que está en el componente padre para pintar los elementos
    Swal.fire({
      position: 'center',
      icon: "success",
      title: 'Los datos han sido guardados :)',
      showConfirmButton: false,
      timer: 1500
    }) 
    setBtnDisabled(true);
  }

  const prepararArchivo = async(e)=>{                           //cuando el archivo se carga en el input se guarda en el storage
    const archivo = e.target.files[0];
    const storageRef = app.storage().ref();
    const archivoPath = storageRef.child(`imgProyectos/${new Date().getTime()}`);
    await archivoPath.put(archivo);
    console.log("archivo cargado:", archivo.name);
    
    const enlaceUrl = await archivoPath.getDownloadURL();
    setArchivoUrl(enlaceUrl);
    setBtnDisabled(false);
  }
  return (
    <>
        <h1>Administra los <strong>Proyectos</strong></h1>
        <form onSubmit={saveProjectInfo} className="p-2 m-1 d-inline-block border border-dark border-4">
            <label>Imagen: </label>     <input type="file" onChange={prepararArchivo} required/><br/>
            <label>Titulo:</label>      <input type="text" placeholder="Titulo"         name="titulo" required/><br/>
            <label>Subtitulo:</label>   <input type="text" placeholder="Subtitulo"      name="subtitulo" required/><br/>
            <label>Descripcion:</label> <input type="text" placeholder="Descripción"    name="descripcion" required/><br/>
            <label>Autor:</label>       <input type="text" placeholder="Autor"          name="autor" required/><br/>
            
            <input disabled={btnDisabled} className='btn btn-success' type="submit" value="Guardar" />
        </form>

        <hr className='border border-warning border-2'/>
    </>
  )
}
