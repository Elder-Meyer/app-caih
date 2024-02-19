import React from 'react'
import { CrearArticulo } from './CrearArticulo'
import { ListadoArticulosAdmin } from './ListadoArticulosAdmin'

export const AdminArticulos = ({articulos, setArticulos, getArticulosData}) => {
  return (
    <div className='container'>
      <CrearArticulo setArticulos={setArticulos}/>

      <ListadoArticulosAdmin articulos={articulos} setArticulos={setArticulos} getArticulosData={getArticulosData}/>
    </div>
  )
}
