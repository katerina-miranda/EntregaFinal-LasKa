import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([])
  const {nombre} = useParams()

  useEffect(() => {
    fetch('../json/productos.json')
    .then(response => response.json())
    .then(products => {
      const item = products.find(prod => prod.nombre === nombre)
      setProducto(item)
    })
  }, [nombre])
  return (
    <div className="card mb-3 container itemDetail">
      <ItemDetail item={producto}/>
    </div>
  );
}
