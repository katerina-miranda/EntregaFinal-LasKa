import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";

//firebase
import { getProducto } from "../../firebase/firebase";

export const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([])
  const {id} = useParams()
  useEffect(() => {
    getProducto(id)
    .then(item => {
      setProducto(item)
    })
  }, [id])
  return (
    <div className="card mb-3 container itemDetail">
      <h1 className="h1">Detalle</h1>
        <ItemDetail item={producto}/>
    </div>
  );
}
