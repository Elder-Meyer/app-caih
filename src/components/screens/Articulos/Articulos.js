import React from 'react'
import { Link } from 'react-router-dom';
import { ListadoArticulos } from './ListadoArticulos'

import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

export const Articulos = ({articulos}) => {
  console.log("articulos");
  console.log(articulos)
  return (
    <div className="page">
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/inicio" style={{textDecoration: "none", color: "inherit"}}>
          INICIO 
        </Link>
        <Typography color="text.primary">ARTICULOS</Typography>
      </Breadcrumbs>
      <ListadoArticulos articulos={articulos} />
    </div>
  )
}
