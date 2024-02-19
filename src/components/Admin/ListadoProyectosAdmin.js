import React, {useState} from 'react'
import {eliminarImgStorage} from "../../App/firebaseStorage"
import { getProjects, deleteProject } from "../../App/fnProyectos"
import { EditarProyecto } from './EditarProyecto'
import Swal from "sweetalert2"

export const ListadoProyectosAdmin = ({projects, setProjects, getProjectsData}) => {
  
  const [editar, setEditar] = useState(0);

  const alertaEliminacion = (projectId, url) =>{
    Swal.fire({
      title: '¿Seguro de que quieres eliminar este elemento?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        removeProject(projectId, url);
        Swal.fire('¡Eliminado!','El elemento seleccionado ha sido eliminado','success')
      }
    })
  }  

  async function removeProject(personId, url) {
    await eliminarImgStorage(url);
    console.log("archivo eliminado")
    await deleteProject(personId);
    const p = await getProjects();
    setProjects(p.docs);
  }  

  return (
    <>
        {
          projects ? (projects.map(project=> {
            return(
              <ul className='border border-warning m-1 border-2 rounded' key={project.id}>
                <div className='d-flex flex-row-wrap '>
                  <div className='d-flex align-items-center'>
                    <img src={project.data().urlImg} width="150px" alt={project.id} />
                  </div>
                  <div className='mx-1'>
                    <li className='list-group-item'><strong>Titulo: </strong> {project.data().titulo}</li>
                    <li className='list-group-item'><strong>Subtitulo: </strong> {project.data().subtitulo}</li>
                    <li className='list-group-item'><strong>Descripcion: </strong>{project.data().descripcion}</li>
                    <li className='list-group-item'><strong>Autor: </strong>{project.data().autor}</li>
                    <li className='list-group-item'><strong>Fecha:</strong> {project.data().fechaSubida}</li>

                    <button className='btn btn-primary m-1' onClick={()=>setEditar(project.id)}>editar</button>
                    <button className='btn btn-danger m-1' onClick={()=>alertaEliminacion(project.id, project.data().urlImg)}>Eliminar</button>
                    
                    <br/>
                  </div>
                </div>
                {editar === project.id && (
                      <EditarProyecto
                      project={project}
                      getProjectsData={getProjectsData}
                      setEditar={setEditar}
                      setProjects={setProjects}
                      />
                    )} 
              </ul>
            )
          }))
          :
          (<h1>Cargando datos...</h1>)
        }    
    </>    
  )
}
