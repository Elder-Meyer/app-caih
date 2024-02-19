import React from 'react'
import { CrearProyecto } from './CrearProyecto'
import { ListadoProyectosAdmin } from './ListadoProyectosAdmin'

export const AdminProyectos = ({ projects, setProjects, getProjectsData}) => {
  return (
    <div className='container'>
        <CrearProyecto setProjects={setProjects}/>
        
        <ListadoProyectosAdmin projects={projects} setProjects={setProjects} getProjectsData={getProjectsData}  />
    </div>
  )
}
