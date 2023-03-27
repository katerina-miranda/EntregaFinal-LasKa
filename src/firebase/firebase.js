import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, getDoc, getDocs, updateDoc, deleteDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAGT39Qc7v_TtaJ7OBaJgq9M83zggWwnJo",
  authDomain: "react-laska-2023.firebaseapp.com",
  projectId: "react-laska-2023",
  storageBucket: "react-laska-2023.appspot.com",
  messagingSenderId: "916857511095",
  appId: "1:916857511095:web:276745471656416f798132"
};

const app = initializeApp(firebaseConfig);
console.log(app)
const db = getFirestore() //consultar la BDD

/* 
  CRUD PRODUCTOS

    CREATE
    READ
    UPDATE
    DELETE
*/

export const cargarBDD = async() => {
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

export const getProductos = async() => {
  const productos = await getDocs(collection(db, 'productos'))
  const items = productos.docs.map(prod => {
    return {...prod.data(), id: prod.id}
  })
  return items
}

export const getProducto = async(id) => {
  const producto = await getDoc(doc(db, 'productos', id))
  const item = {...producto.data(), id: producto.id}
  return item
}

export const updateProducto = async(id, info) => {
  await updateDoc(doc(db, 'productos', id), info)
}

export const deleteProducto = async(id) => {
  await deleteDoc(doc(db, 'productos', id))
}