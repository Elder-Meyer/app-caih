import React from 'react'
import { Link } from 'react-router-dom';
import { ListadoArticulos } from '../Articulos/ListadoArticulos';
import { ElementCarousel } from './ElementCarousel'
import { WraperCarousel, ContentArticles, Title } from './Inicio.elements';


export const Inicio = ({articulos}) => {

  return (
    <div className="page">
      <Title>Bienvenido al CAIH</Title>
        <WraperCarousel>
          <ElementCarousel/>
        </WraperCarousel>
      
        <ContentArticles>
          <h2>Echa un vistazo a nuestros <Link to="/articulos">Articulos</Link></h2>
        </ContentArticles>

        <ListadoArticulos chico transparent limite="2" articulos={articulos} />
    </div>
  )
}
