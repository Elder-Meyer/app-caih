import { db } from "./firebaseDb";
import { collection, getDocs, query, doc, addDoc, deleteDoc, updateDoc } from "firebase/firestore"

//ALTA
export const saveRecorrido = (lugar, descripcion, latitud, longitud, urlImg) =>{
    addDoc(collection(db, 'recorridos'), { 
        lugar,
        descripcion,
        location: {
            latitud,
            longitud,
        },
        urlImg,
    });
}

//CONSULTA
export const getRecorridos = async() =>{
    const result = await getDocs(query(collection(db, 'recorridos')));
    return result;
}

//REMOVE
export const deleteRecorrido = async(id) =>{
    await deleteDoc(doc(db, 'recorridos', id));
}

//UPDAT4
export const updateRecorrido = async(id, lugar, descripcion, latitud, longitud, urlImg) =>{
    await updateDoc(doc(db, 'recorridos', id), {
        lugar,
        descripcion,
        location: {
            latitud,
            longitud,
        },
        urlImg,
    });
}

