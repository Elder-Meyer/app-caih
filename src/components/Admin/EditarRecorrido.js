import React, {useState} from 'react'
import { updateRecorrido, getRecorridos } from "../../App/fnRecorridos"
import { app, eliminarImgStorage } from "../../App/firebaseStorage";
import Swal  from 'sweetalert2';

export const EditarRecorrido = ({recorrido, getRecorridosData, setEditar, setRecorridos}) => {

    const [archivoUrl, setArchivoUrl] = useState("");

    const updateRecorridoInfo = async(e, id, url)=>{
        e.preventDefault();
        const recorrido = await getRecorridos();

        let lugar       = e.target.lugar.value.toUpperCase();
        let descripcion = e.target.descripcion.value.toUpperCase();
        let latitud     = e.target.latitud.value.toUpperCase();
        let longitud    = e.target.longitud.value.toUpperCase();

        eliminarImgStorage(url);
        console.log("imagen de recorrido anterior eliminada y actualizada")
        await updateRecorrido(id, lugar, descripcion, latitud, longitud, archivoUrl)
        getRecorridosData();

        e.target.reset();

        setRecorridos(recorrido.docs);
        setEditar(0);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Datos actualizados correctamente',
            showConfirmButton: false,
            timer: 1500
          })
    }

    const prepararArchivo = async(e)=>{
        const archivo       = e.target.files[0];
        const storageRef    = app.storage().ref();
        const archivoPath   = storageRef.child(`imgRecorridos/${new Date().getTime()}`);

        await archivoPath.put(archivo);
        console.log("archivo cargado: ", archivo.name);

        const enlaceUrl = await archivoPath.getDownloadURL();
        setArchivoUrl(enlaceUrl);
    }

  return (
    <div className='form-group bg-light p-2 rounded border border-warning border-2 m-0'>
        <form onSubmit={e=> updateRecorridoInfo(e, recorrido.id, recorrido.data().urlImg)}>
            <label>Imagen: </label>     <input className='input-group' type="file" onChange={prepararArchivo} />
            <label>Lugar:</label>       <input className='form-control' type="text" name="lugar" defaultValue={recorrido.data().lugar} />
            <label>Descripcion:</label> <input className='form-control' type="text" name="descripcion" defaultValue={recorrido.data().descripcion} />
            <label>Latitud:</label>     <input className='form-control' type="text" name="latitud" defaultValue={recorrido.data().location.latitud} />
            <label>Longitud:</label>    <input className='form-control' type="text" name="longitud" defaultValue={recorrido.data().location.longitud} />
            
            
            <input type="submit" className='btn btn-success m-1' value="Actualizar" />
            <button className='btn btn-danger m-1' onClick={e=> setEditar(0)}>Cancelar</button>
        </form>
    </div>
  )
}
