import React from 'react'
import { MapView } from './MapView'
import { Link } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

export const Recorridos = ({recorridos}) => {
  return (
    <div className="page">
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/inicio" style={{textDecoration: "none", color: "inherit"}}>
            INICIO 
          </Link>
          <Typography color="text.primary">RECORRIDOS</Typography>
        </Breadcrumbs>

        <MapView recorridos={recorridos}/>  
    </div>
  )
}
