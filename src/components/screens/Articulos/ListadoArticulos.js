import React from 'react'
import { Link } from 'react-router-dom'
import { Mask, Item, Section, Titulo, Resaltado, Cursiva, Subtitulo } from '../vCatalogo';
import { FaUserAlt, FaRegCalendarAlt } from "react-icons/fa";
import { Typography } from '@mui/material';

export const ListadoArticulos = ({limite, chico, transparent, articulos}) => {
  return (
      <Section>
      {
        articulos ? (articulos.slice(0, limite).map(articulo => {
          return(
            <Item chico={chico} transparent={transparent} key={articulo.id}>
              <Titulo>{articulo.data().articulo}</Titulo>
              <Subtitulo>{articulo.data().subtitulo}</Subtitulo>          
              <Resaltado><FaUserAlt/>{articulo.data().autor}</Resaltado>
              <Cursiva><FaRegCalendarAlt/>{articulo.data().fechaSubida}</Cursiva>
              <br/>
              <Mask>
                <img src={articulo.data().urlImg} alt={articulo.data().articulo} />  
              </Mask>
              <Link to={`/articulos/${articulo.id}`}><span>Ver más</span></Link>
            </Item>
          )
        }))
        :
        (<Typography variant='h3'>Los datos se están cargando...</Typography>)
      }
      </Section>
  )
}
