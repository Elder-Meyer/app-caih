import firebase from 'firebase/compat/app'
import "firebase/compat/storage"
import "firebase/compat/firestore"
import { getStorage, ref, deleteObject } from "firebase/storage";

export const app = firebase.initializeApp({
    apiKey: "AIzaSyCI-uAsU3SHavAugY4GVDR6QALfWbbOSeY",
    authDomain: "app-caih.firebaseapp.com",
    projectId: "app-caih",
    storageBucket: "app-caih.appspot.com",
    messagingSenderId: "596116028493",
    appId: "1:596116028493:web:453a054256683d83d17004"
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
  



