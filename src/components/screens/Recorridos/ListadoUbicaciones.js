import React from 'react'
import { Marker } from 'react-leaflet'
import { WindowEmer } from './elementsMap'
import { Link } from 'react-router-dom'

export const ListadoUbicaciones = ({recorridos}) => {
  return (
    <>
        {
            recorridos ? (recorridos.map(recorrido => {
              return(
                <Marker key={recorrido.id} position={[`${recorrido.data().location.latitud}`, `${recorrido.data().location.longitud}`]}>
                  <WindowEmer>
                    <strong>{recorrido.data().lugar}</strong><br />

                    <img src={recorrido.data().urlImg} width="100%" alt={recorrido.data().lugar} /> 

                    <div className='info'>
                      {recorrido.data().descripcion}. <br/>
                      <Link to={recorrido.id}>Ver más</Link>
                    </div>
                    
                    
                  </WindowEmer>
                </Marker>
              )
            }))
            :
            ("")
          }
    </>
  )
}
