import { db } from "./firebaseDb";
import { collection, getDocs, query, doc, addDoc, deleteDoc, updateDoc } from "firebase/firestore"

//ALTA
export const saveProject = (titulo, subtitulo, descripcion, autor, urlImg) =>{
    addDoc(collection(db, 'proyectos'), { 
        titulo,
        subtitulo,
        descripcion,
        autor,
        fechaSubida: `${new Date().getDate()} - ${new Date().getMonth()} - ${new Date().getFullYear()}`,
        urlImg,
    });
}

//CONSULTA
export const getProjects = async() =>{
    const result = await getDocs(query(collection(db, 'proyectos')));
    return result;
}

//REMOVE
export const deleteProject = async(id) =>{
    await deleteDoc(doc(db, 'proyectos', id));
}

//UPDAT4
export const updateProject = async(id, titulo, subtitulo, descripcion, autor, urlImg) =>{
    await updateDoc(doc(db, 'proyectos', id), {
        titulo,
        subtitulo,
        descripcion,
        autor,
        fechaSubida: `${new Date().getDate()} - ${new Date().getMonth()} - ${new Date().getFullYear()}`,
        urlImg,
    });
}

