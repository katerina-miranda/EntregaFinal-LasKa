import { useState } from "react"
import { toast } from 'react-toastify'

export const ItemCount = ({valInicial, stock, onAdd}) => {
  const [contador, setContador] = useState(valInicial)
          //var   //modificar var   //estado inicial
  const restar = () => (contador > valInicial) && setContador(contador - 1) //operador ternario sin else
  const sumar = () => (contador < stock) && setContador(contador + 1) //contador = contador + 1
  const agregarCarrito = () => {
    onAdd(contador)
    toast.success(`Agregaste ${contador} productos al carrito!`)
  }
  return (
    <>
      <button className="btn btn-light" onClick={() => restar()}>-</button>
      {contador}
      <button className="btn btn-light" onClick={() => sumar()}>+</button>
      <button className="btn btn-dark" onClick={() => agregarCarrito()}>Agregar al carrito</button>
    </>
  );
}
