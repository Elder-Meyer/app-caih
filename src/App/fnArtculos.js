import { db } from "./firebaseDb";
import { collection, getDocs, query, doc, addDoc, deleteDoc, updateDoc } from "firebase/firestore"

//ALTA
export const saveArticulo = (articulo, subtitulo, descripcion, autor, urlImg) =>{
    addDoc(collection(db, 'articulos'), { 
        articulo,
        subtitulo,
        descripcion,
        autor,
        fechaSubida: `${new Date().getDate()} - ${new Date().getMonth()} - ${new Date().getFullYear()}`,
        urlImg,
    });
}

//CONSULTA
export const getArticulos = async() =>{
    const result = await getDocs(query(collection(db, 'articulos')));
    return result;
}

//REMOVE
export const deleteArticulo = async(id) =>{
    await deleteDoc(doc(db, 'articulos', id));
}

//UPDAT4
export const updateArticulo = async(id, articulo, subtitulo, descripcion, autor, urlImg) =>{
    await updateDoc(doc(db, 'articulos', id), {
        articulo,
        subtitulo,
        descripcion,
        autor,
        fechaSubida: `${new Date().getDate()} - ${new Date().getMonth()} - ${new Date().getFullYear()}`,
        urlImg,
    });
}

