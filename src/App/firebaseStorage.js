import firebase from 'firebase/compat/app'
import "firebase/compat/storage"
import "firebase/compat/firestore"
import { getStorage, ref, deleteObject } from "firebase/storage";

export const app = firebase.initializeApp({
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID
});
  


export const eliminarImgStorage = async(url) =>{
    const storage = getStorage();
    // Create a reference to the file to delete
    const desertRef = ref(storage, url);
    // Delete the file
    await deleteObject(desertRef).then(() => {
    // File deleted successfully
    console.log("archivo alterado")
    }).catch((error) => {
    // Uh-oh, an error occurred!
    });
}
  



