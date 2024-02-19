import React, {useState} from 'react'
import { saveRecorrido, getRecorridos } from "../../App/fnRecorridos"
import { app } from '../../App/firebaseStorage'
import Swal from 'sweetalert2'

export const CrearRecorrido = ({setRecorridos}) => {

    const [archivoUrl, setArchivoUrl] = useState("");
    const [btnDisabled, setBtnDisabled] = useState(true);

    const saveRecorridoInfo = async(e) =>{
        e.preventDefault(); let target = e.target;

        let lugar       = target.lugar.value.toUpperCase();
        let descripcion = target.descripcion.value.toUpperCase();
        let latitud     = target.latitud.value.toUpperCase();
        let longitud    = target.longitud.value.toUpperCase();

        await saveRecorrido(lugar, descripcion, latitud, longitud, archivoUrl);
        e.target.reset();

        const r = await getRecorridos();
        setRecorridos(r.docs);
        Swal.fire({
            position: 'center',
            icon: "success",
            title: 'Los datos han sido guardados :)',
            showConfirmButton: false,
            timer: 1500
        }) 
        setBtnDisabled(true);
    }

    const prepararArchivo = async(e) =>{
        const archivo       = e.target.files[0];
        const storageRef    = app.storage().ref();
        const archivoPath   = storageRef.child(`imgRecorridos/${new Date().getTime()}`)
        
        await archivoPath.put(archivo);
        console.log("archivo cargado:", archivo.name);

        const enlaceUrl = await archivoPath.getDownloadURL();
        setArchivoUrl(enlaceUrl);
        setBtnDisabled(false);
    }

  return (
    <>
        <h1>Administra los <strong>Recorridos</strong></h1>
        <form onSubmit={saveRecorridoInfo} className="p-2 m-1 d-inline-block border border-dark border-4">
            <label>Imagen: </label>     <input type="file" onChange={prepararArchivo}/><br/>
            <label>Lugar:</label>       <input type="text" placeholder="Lugar"        name="lugar" required/><br/>
            <label>Descripcion:</label> <input type="text" placeholder="Descripcion"  name="descripcion" required/><br/>
            <label>Latitud:</label>     <input type="text" placeholder="Latitud"      name="latitud" required/><br/>
            <label>Longitud:</label>    <input type="text" placeholder="Longitud"     name="longitud" required/><br/>
            
            
            <input disabled={btnDisabled} className='btn btn-success' type="submit" value="Guardar" />
        </form>

        <hr className='border border-warning border-2'/>
    </>
  )
}
