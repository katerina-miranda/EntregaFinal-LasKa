import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAGT39Qc7v_TtaJ7OBaJgq9M83zggWwnJo",
  authDomain: "react-laska-2023.firebaseapp.com",
  projectId: "react-laska-2023",
  storageBucket: "react-laska-2023.appspot.com",
  messagingSenderId: "916857511095",
  appId: "1:916857511095:web:276745471656416f798132"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore() //consultar la BDD

/* 
  CRUD PRODUCTOS

    CREATE
    READ
    UPDATE
    DELETE
*/

export const cargarBDD = async () => {
  const promise = await fetch('./json/productos.json')
  const productos = await promise.json()
  productos.forEach(async (prod) => {
    await addDoc(collection(db, "productos"), {
      idCategoria: prod.idCategoria,
      nombre: prod.nombre,
      modelo: prod.modelo,
      marca: prod.marca,
      stock: prod.stock,
      precio: prod.precio,
      img: prod.img
    })
  });
}
