import React, { useState } from 'react'
import { eliminarImgStorage } from '../../App/firebaseStorage'
import { getArticulos, deleteArticulo } from "../../App/fnArtculos"
import { EditarArticulo } from './EditarArticulo'
import Swal from 'sweetalert2'

export const ListadoArticulosAdmin = ({articulos, setArticulos, getArticulosData}) => {

    const [editar, setEditar] = useState(0);

    const alertaEliminacion = (articuloId, url) =>{
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
          removeArticulo(articuloId, url);
          Swal.fire('¡Eliminado!','El elemento seleccionado ha sido eliminado','success')
        }
      })
    }  
  
    async function removeArticulo(articuloId, url) {
      await eliminarImgStorage(url);
      console.log("archivo eliminado")
      await deleteArticulo(articuloId);
      const p = await getArticulos();
      setArticulos(p.docs);
    }      

  return (
    <>
      {
          articulos ? (articulos.map(articulo=> {
            return(
              <ul className='border border-warning m-1 border-2 rounded' key={articulo.id}>
                <div className='d-flex flex-row-wrap '>
                  <div className='d-flex align-items-center'>
                    <img src={articulo.data().urlImg} width="150px" alt={articulo.id} />
                  </div>
                  <div className='mx-1'>
                    <li className='list-group-item'><strong>Articulo: </strong> {articulo.data().articulo}</li>
                    <li className='list-group-item'><strong>Subtitulo: </strong> {articulo.data().subtitulo}</li>
                    <li className='list-group-item'><strong>Descripcion: </strong>{articulo.data().descripcion}</li>
                    <li className='list-group-item'><strong>Autor: </strong>{articulo.data().autor}</li>
                    <li className='list-group-item'><strong>Fecha:</strong> {articulo.data().fechaSubida}</li>

                    <button className='btn btn-primary m-1' onClick={()=>setEditar(articulo.id)}>editar</button>
                    <button className='btn btn-danger m-1' onClick={()=>alertaEliminacion(articulo.id, articulo.data().urlImg)}>Eliminar</button>
                    
                    <br/>
                  </div>
                </div>
                {editar === articulo.id && (
                      <EditarArticulo
                      articulo={articulo}
                      getArticulosData={getArticulosData}
                      setEditar={setEditar}
                      setArticulos={setArticulos}
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
