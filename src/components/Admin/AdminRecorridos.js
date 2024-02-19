import React, { useState } from 'react'
import { eliminarImgStorage } from "../../App/firebaseStorage";
import { getRecorridos, deleteRecorrido } from "../../App/fnRecorridos"
import { EditarRecorrido } from './EditarRecorrido';
import { CrearRecorrido } from './CrearRecorrido';
import Swal from 'sweetalert2';

export const AdminRecorridos = ({recorridos, setRecorridos, getRecorridosData}) => {
  const [editar, setEditar] = useState(0);

  const alertaEliminacion = (recorridoId, url) =>{
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
        removeRecorrido(recorridoId, url);
        Swal.fire('¡Eliminado!','El elemento seleccionado ha sido eliminado','success')
      }
    })
  }

  async function removeRecorrido(recorridoId, url) {
    await eliminarImgStorage(url);
    console.log("archivo eliminado")
    await deleteRecorrido(recorridoId);
    const p = await getRecorridos();
    setRecorridos(p.docs);
  }

  return (
    <div className='container'>
        
        <CrearRecorrido setRecorridos={setRecorridos}/>

        {
          recorridos ? (recorridos.map(recorrido=> {
            return(
              <ul className='border border-warning m-1 border-2 rounded' key={recorrido.id}>
                <div className='d-flex flex-row-wrap '>
                  <div className='d-flex align-items-center'>
                    <img src={recorrido.data().urlImg} width="150px" alt={recorrido.id} />
                  </div>
                  <div className='mx-1'>
                    <li className='list-group-item'><strong>Lugar: </strong> {recorrido.data().lugar}</li>
                    <li className='list-group-item'><strong>Descripcion: </strong> {recorrido.data().descripcion}</li>
                    <li className='list-group-item'><strong>Latitud: </strong>{recorrido.data().location.latitud}</li>
                    <li className='list-group-item'><strong>Longitud: </strong>{recorrido.data().location.longitud}</li>
                    

                    <button className='btn btn-primary m-1' onClick={()=>setEditar(recorrido.id)}>editar</button>
                    <button className='btn btn-danger m-1' onClick={()=>alertaEliminacion(recorrido.id, recorrido.data().urlImg)}>Eliminar</button>
                    
                    <br/>
                  </div>
                </div>
                {editar === recorrido.id && (
                      <EditarRecorrido
                      recorrido={recorrido}
                      getRecorridosData={getRecorridosData}
                      setEditar={setEditar}
                      setRecorridos={setRecorridos}
                      />
                    )} 
              </ul>
            )
          }))
          :
          (<h1>Cargando datos...</h1>)
        }
    </div>
  )
}
