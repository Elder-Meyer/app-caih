import React from 'react';
import { Link } from 'react-router-dom';
import { ListadoProyectos } from './ListadoProyectos';

import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

export const Proyectos = ({projects}) => {
  return (
    <div className="page">
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/inicio" style={{textDecoration: "none", color: "inherit"}}>
          INICIO 
        </Link>
        <Typography color="text.primary">PROYECTOS</Typography>
      </Breadcrumbs>
      <ListadoProyectos projects={projects}/>
    </div>
  )
}
