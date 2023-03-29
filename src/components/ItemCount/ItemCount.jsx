import '../App.css'
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
    <div className='centro'>
      <div>
        <button className="btn btn-light boton contador" onClick={() => restar()}>-</button>
        {contador}
        <button className="btn btn-light boton contador" onClick={() => sumar()}>+</button>
      </div>
      <button className="btn btn-dark boton" onClick={() => agregarCarrito()}>Agregar al carrito</button>
    </div>
  );
}
