import React, { useState } from 'react'
import { updateProject, getProjects } from "../../App/fnProyectos"
import { app, eliminarImgStorage } from '../../App/firebaseStorage';
import Swal from 'sweetalert2'


export const EditarProyecto = ({project, getProjectsData, setEditar, setProjects}) => {

  const [archivoUrl, setArchivoUrl] = useState("");

    const updateProjectInfo = async(e, id, url) =>{
        e.preventDefault();
        const project = await getProjects();
        
        let titulo      = e.target.titulo.value.toUpperCase();    
        let subtitulo   = e.target.subtitulo.value.toUpperCase();    
        let descripcion = e.target.descripcion.value;    
        let autor       = e.target.autor.value.toUpperCase();    
        
    
        eliminarImgStorage(url);
        console.log("archivo eliminado y actualizado")
        await updateProject(id, titulo, subtitulo, descripcion, autor, archivoUrl);
        getProjectsData();
        
        e.target.reset();

        setProjects(project.docs);
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
      const archivoPath = storageRef.child(`imgProyectos/${new Date().getTime()}`);
      await archivoPath.put(archivo);
      console.log("archivo cargado:", archivo.name);
      
      const enlaceUrl = await archivoPath.getDownloadURL();
      setArchivoUrl(enlaceUrl);
    }

  return (
    <div className='form-group bg-light p-2 rounded border border-warning border-2 m-0'>
        <form onSubmit={e=> updateProjectInfo(e, project.id, project.data().urlImg)}>
            <label>Imagen: </label>     <input className='input-group' type="file" onChange={prepararArchivo} />
            <label>Titulo:</label>      <input className='form-control' type="text" name="titulo" defaultValue={project.data().titulo} />
            <label>Subtitulo:</label>   <input className='form-control' type="text" name="subtitulo" defaultValue={project.data().subtitulo} />
            <label>Descripcion:</label> <input className='form-control' type="text" name="descripcion" defaultValue={project.data().descripcion} />
            <label>Autor:</label>       <input className='form-control' type="text" name="autor" defaultValue={project.data().autor} />
            <label>Fecha:</label>       <input className='form-control' type="text" name="fechaSubida" defaultValue={project.data().fechaSubida} />
            
            <input type="submit" className='btn btn-success m-1' value="Actualizar" />
            <button className='btn btn-danger m-1' onClick={e=> setEditar(0)}>Cancelar</button>
        </form>
    </div>
  )
}

