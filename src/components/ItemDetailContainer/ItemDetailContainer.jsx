import '../App.css'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";

//firebase
import { getProducto } from "../../firebase/firebase";

//context
import { useDarkModeContext } from '../../context/DarkModeContext';

export const ItemDetailContainer = () => {
  const {darkMode} = useDarkModeContext()
  const [producto, setProducto] = useState([])
  const {id} = useParams()
  useEffect(() => {
    getProducto(id)
    .then(item => {
      setProducto(item)
    })
  }, [id])
  return (
    <>
      <h1 className={`h1 ${darkMode ? 'blanco' : ''}`}>Detalle</h1>
      <div className="card mb-5 container itemDetail">
        <ItemDetail item={producto}/>
      </div>
    </>
  );
}
