import React from 'react'
import { TileLayer } from 'react-leaflet'
import { ContenedorMapa, Content } from './elementsMap'
import { ListadoUbicaciones } from './ListadoUbicaciones';
import {Section} from '../vCatalogo';


export const MapView = ({recorridos}) => {

  const position = [21.1405828, -98.4092891];

  return (
    <Section>
      <Content>
        <ContenedorMapa center={position} zoom={14} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <ListadoUbicaciones recorridos={recorridos}/>
          
        </ContenedorMapa>
      </Content>
    </Section>
    
  )
}
